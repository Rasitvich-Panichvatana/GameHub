import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

interface Props {
  selectedGenres: string[];
  onSelectGenres: (platforms: string[]) => void;
}

const GenreList = ({ selectedGenres, onSelectGenres }: Props) => {
  const genresList = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts ",
  ];

  const handleChange = (values: string[]) => {
    onSelectGenres(values); // pass all selected values
  };

  return (
    <>
      <CheckboxGroup
        value={selectedGenres}
        onChange={(values) => handleChange(values as string[])}
      >
        <Stack>
          {genresList.map((genre) => (
            <Checkbox key={genre} value={genre}>
              {genre}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default GenreList;
