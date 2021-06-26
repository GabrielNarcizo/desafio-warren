import { FetchProvider } from "./useFetch";

const RootProvider = ({ children }) => {
  return (
    <FetchProvider>
      {children}
    </FetchProvider>
  );
};

export default RootProvider;