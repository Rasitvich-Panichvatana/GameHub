import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Genre from "./Genre";
import ExpandableText from "./ExpandableText";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Card
      variant={isHovering ? "elevated" : ""}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="xl">
          <ExpandableText isHover={isHovering}>{game.title}</ExpandableText>
        </Heading>
        <HStack justifyContent="space-between" paddingTop={3}>
          <PlatformIconList platforms={game.platform} />
          <Genre genre={game.genre} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
