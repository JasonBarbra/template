import { NativeBaseProvider } from "native-base";
import { theme } from "../hooks/useTheme";

const Providers = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default Providers;
