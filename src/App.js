import Table from "./components/Table/Table";
import RootProvider from "./hooks";


function App() {
  return (
    <RootProvider>
      <Table />
    </RootProvider>
  );
}

export default App;
