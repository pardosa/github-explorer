import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { searchState } from "../../state/search";
import { userRepoState } from "../../state/repo";
import { useUserRepo } from "../../hooks/useUserRepo";
import RepoList from "../RepoList";

library.add(fas);

const Accordian = () => {
  const [open, setOpen] = useState<number>();
  const { users } = useRecoilValue(searchState);
  const { data, loading } = useRecoilValue(userRepoState);
  const { getUserRepos } = useUserRepo();

  const handleOpen = (value: number, login: string) => {
    setOpen(open === value ? undefined : value);

    if (open !== value) {
      // check if repo is not loaded yet
      const repoUser = data?.find((rp) => rp.login === login);
      if (!repoUser) {
        // load user repo
        getUserRepos(login);
      }
    }
  };

  return (
    <>
      {users &&
        users.map((user, idx) => {
          const repo = data?.find((rp) => rp.login === user.login);
          return (
            <div
              className="relative mb-3 shadow-sm border border-gray-200"
              key={`accordian-${idx}`}
            >
              <h6 className="mb-0">
                <button
                  className="border-slate-100 text-slate-700 rounded-t-sm relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in bg-gray-50"
                  data-collapse-target="collapse-1"
                  onClick={() => handleOpen(idx, user.login)}
                >
                  <span className=" font-bold text-md">{user.login}</span>
                  <FontAwesomeIcon
                    icon={
                      open === idx ? ["fas", "angle-up"] : ["fas", "angle-down"]
                    }
                    className={`absolute right-0 pt-1 pr-2 font-bold text-lg`}
                    size="lg"
                  />
                </button>
              </h6>
              <div
                data-collapse="collapse-1"
                className="overflow-hidden transition-all duration-300 ease-in-out"
              >
                {open === idx ? (
                  <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                    {loading ? (
                      "loading..."
                    ) : (
                      <div>{repo ? <RepoList repos={repo.repos} /> : null}</div>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Accordian;
