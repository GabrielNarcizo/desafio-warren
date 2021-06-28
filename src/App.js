import Home from "./pages/Home";
import RootProvider from "./hooks";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <RootProvider>
      <GlobalStyle />
      <Home />
    </RootProvider>
  );
}

export default App;
