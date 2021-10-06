import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: "Roboto",
    body: "Open Sans",
  }
}

const theme = extendTheme({ config });

export default theme;
