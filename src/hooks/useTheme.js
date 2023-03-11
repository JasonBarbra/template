import { extendTheme } from "native-base";
import { colors } from "../constants/colors";

const textBaseStyle = {
  color: colors.black,
  fontSize: 24,
};

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: { ...textBaseStyle },
      variants: {
        chips: {
          ...textBaseStyle,
          fontSize: "14px",
          color: colors.black,
        },
      },
    },
  },
});
