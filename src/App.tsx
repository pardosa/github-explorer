import "./App.css";
import { SearchInput } from "./components/SearchInput";
import { RecoilRoot } from "recoil";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <>
      <RecoilRoot>
        <SearchInput />
        <SearchResult />
      </RecoilRoot>
    </>
  );
}

export default App;
