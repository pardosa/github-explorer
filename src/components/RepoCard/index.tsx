import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RepoSearchResultItem } from "../../types/schema";

type Iprops = {
  repo: RepoSearchResultItem;
};

const RepoCard = (props: Iprops) => {
  return (
    <div className="w-full bg-gray-200  p-2 m-4">
      <div className="flex flex-row flex-wrap justify-between">
        <a
          href={props.repo.html_url}
          target="_blank"
          className="font-semibold text-left"
        >
          {props.repo.full_name}
        </a>
        <div className="flex flex-row px-6">
          <span className="font-semibold ">{props.repo.stargazers_count}</span>
          <FontAwesomeIcon
            icon={["fas", "star"]}
            className={`absolute right-0 pt-1 pr-2 font-bold text-md`}
          />
        </div>
      </div>
      <div className=" font-light text-left">{props.repo.description}</div>
    </div>
  );
};

export default RepoCard;
