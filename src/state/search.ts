import { atom } from "recoil";
import { User } from "../types/schema";

export type ISearchState = {
  query: string;
  users?: User[];
  loading: boolean;
};

const inititalState: ISearchState = {
  query: "",
  loading: false,
};

export const searchState = atom({
  key: "searchState",
  default: inititalState,
});
