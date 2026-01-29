import { Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div>
      <Box bg="green.focusRing" w="100%" p="4" color="white">
        This is the Box
      </Box>
    </div>
  );
}
