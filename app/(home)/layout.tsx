import YourLibrary from "@/components/shared/home/your-library";
import { Box } from "@chakra-ui/react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box display="flex">
      <Box w="1/5">
        <YourLibrary />
      </Box>
      <Box flex={1}>{children}</Box>
    </Box>
  );
}
