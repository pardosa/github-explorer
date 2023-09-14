import { useRecoilValue } from "recoil";
import { searchState } from "../../state/search";
import Accordian from "../Accordian";

const SearchResult = () => {
  const { query, loading, users } = useRecoilValue(searchState);

  if (query.length < 1 || (users && users?.length < 1)) return <></>;

  return (
    <div>
      {loading === true ? (
        "loading..."
      ) : users ? (
        <div>
          <div className="flex items-start justify-start my-4">
            Showing users for "{query}"
          </div>
          <Accordian />
        </div>
      ) : null}
    </div>
  );
};

export default SearchResult;
