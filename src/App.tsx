import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppProvider, useAppContext } from "./context/AppContext";
import { lightTheme, darkTheme } from "./styles/theme";
import PageContainer from "./components/PageContainer";

const StyledApp = () => {
  const { darkMode } = useAppContext();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles $darkMode={darkMode} />
      <PageContainer />
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <AppProvider>
      <StyledApp />
    </AppProvider>
  );
}