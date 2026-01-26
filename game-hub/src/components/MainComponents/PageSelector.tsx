import { Button, VStack } from "@chakra-ui/react";

interface Props {
  selectedPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageSelector = ({ selectedPage, totalPages, onPageChange }: Props) => {
  return (
    <VStack paddingBottom="10">
      <Button>1</Button>
    </VStack>
  );
};

export default PageSelector;
