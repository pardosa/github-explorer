import { useRecoilState } from "recoil";
import { Octokit } from "octokit";
import { userRepoState } from "../state/repo";
import { RepoSearchResultItem } from "../types/schema";

export const useUserRepo = () => {
  const [, setRepos] = useRecoilState(userRepoState);

  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });

  const setUserRepos = (items: RepoSearchResultItem[], login: string) => {
    setRepos((oldState) => {
      return oldState.data && oldState.data.length > 0
        ? {
            ...oldState,
            data: [...oldState.data, { login: login, repos: items }],
          }
        : { ...oldState, data: [{ login: login, repos: items }] };
    });
  };

  const setLoading = (loading: boolean) => {
    setRepos((oldState) => {
      return {
        ...oldState,
        loading: loading,
      };
    });
  };

  const getUserRepos = async (login: string) => {
    setLoading(true);

    const { data } = await octokit.request("GET /users/{username}/repos", {
      username: login,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    setUserRepos(data, login);
    setLoading(false);
  };

  return {
    getUserRepos,
  };
};
