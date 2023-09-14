import { RepoSearchResultItem } from "../../types/schema";
import RepoCard from "../RepoCard";

type Iprops = {
  repos: RepoSearchResultItem[];
};
const RepoList = (props: Iprops) => {
  return (
    <>
      {props.repos.map((rp) => (
        <RepoCard repo={rp} />
      ))}
    </>
  );
};

export default RepoList;
