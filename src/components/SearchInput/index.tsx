import { useSearch } from "../../hooks/useSearch";
import { useRecoilState } from "recoil";
import { searchState } from "../../state/search";
import { userRepoState } from "../../state/repo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchInput = () => {
  const [search, setSearch] = useRecoilState(searchState);
  const [repos, setRepos] = useRecoilState(userRepoState);
  const { getUsers } = useSearch();

  const handleInput = (val: string) => {
    setSearch((oldState) => {
      return { ...oldState, query: val, users: undefined };
    });

    if (repos.data && repos.data.length > 0)
      setRepos({ loading: false, data: undefined });
  };

  return (
    <div>
      <div className="w-full flex justify-center items-center relative">
        <input
          type="text"
          value={search.query}
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          className="w-full p-2 shadow-md border-1 border-gray-200 mb-3 bg-gray-100 rounded-sm"
          onKeyUp={(e) => {
            if (e.code === "Enter" && search.query.length > 3) getUsers();
          }}
        />
        {search.query.length > 0 ? (
          <FontAwesomeIcon
            icon={["fas", "close"]}
            className={`absolute right-0 px-2 pb-2 mr-2 font-bold text-md text-gray-400 cursor-pointer`}
            onClick={() => handleInput("")}
          />
        ) : null}
      </div>

      <div
        className={`w-full p-2 mb-3 text-white justify-center items-center ${
          search.query.length === 0 || search.loading === true
            ? "cursor-default bg-blue-400"
            : "cursor-pointer bg-blue-500"
        }`}
        onClick={() => (search.query.length > 0 ? getUsers() : null)}
      >
        Search
      </div>
    </div>
  );
};
