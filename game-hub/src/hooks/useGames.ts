import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  genre: string;
}

interface Props {
  selectedPlatforms?: string[];
  selectedGenres?: string[];
  searchText?: string;
  page?: number;
}

const useGames = ({
  selectedPlatforms = [],
  selectedGenres = [],
  searchText,
  page = 1,
}: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const params: Record<string, any> = {};
    if (selectedPlatforms.length > 0) params.platform = selectedPlatforms;
    if (selectedGenres.length > 0) params.genre = selectedGenres;
    if (searchText) params.search = searchText;
    params.page = String(page);

    apiClient
      .get("/games", {
        params,
        signal: controller.signal,
        paramsSerializer: {
          indexes: null, // ลบ [] ออก
        },
      })
      .then((res) => {
        setGames(res.data.results || res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [
    searchText,
    page,
    JSON.stringify(selectedPlatforms),
    JSON.stringify(selectedGenres),
  ]);

  return { games, error, isLoading };
};

export default useGames;
