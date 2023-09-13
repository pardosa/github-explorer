import { atom } from "recoil";
import { RepoSearchResultItem } from "../types/schema";

type userRepo = {
  login: string;
  repos: RepoSearchResultItem[];
};

export type IUserRepoState = {
  data?: userRepo[];
  loading: boolean;
};

const inititalState: IUserRepoState = {
  loading: false,
};

export const userRepoState = atom({
  key: "userRepoState",
  default: inititalState,
});
