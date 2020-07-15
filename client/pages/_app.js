import { ThemeProvider } from "styled-components";
import theme from "../styledComponents/theme";
import "./main.scss";
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
