import { atom } from "recoil";

export const populationsState = atom({
  key: "populationsState",
  default: [],
});
export const prefCodesState = atom<number[]>({
  key: "prefCodesState",
  default: [],
});


