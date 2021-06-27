import Table from "./components/Table/Table";
import RootProvider from "./hooks";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <RootProvider>
      <GlobalStyle />
      <Table />
    </RootProvider>
  );
}

export default App;
