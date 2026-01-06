import { List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  genres: string[];
}

const GenreList = () => {
  const genreslist = [
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
  return (
    <List>
      {genreslist.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <Text fontSize="lg">{genre}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

/* 

  */
