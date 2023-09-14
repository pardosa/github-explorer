import { useRecoilState } from "recoil";
import { Octokit } from "octokit";
import { User, UserSearchResult } from "../types/schema";
import { searchState } from "../state/search";

export const useSearch = () => {
  const [search, setSearch] = useRecoilState(searchState);

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });

  const setUsers = (users: User[]) => {
    setSearch((oldState) => {
      return {
        ...oldState,
        users: users,
      };
    });
  };

  const setLoading = (loading: boolean) => {
    setSearch((oldState) => {
      return {
        ...oldState,
        loading: loading,
      };
    });
  };

  const getUsers = async () => {
    setLoading(true);
    const {
      data: { items },
    }: { data: UserSearchResult } = await octokit.rest.search.users({
      q: search.query,
    });
    setUsers(items);
    setLoading(false);
  };

  return {
    getUsers,
  };
};
