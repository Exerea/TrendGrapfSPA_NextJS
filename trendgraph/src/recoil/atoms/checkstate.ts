import { atom } from "recoil";

export const prefCodesState = atom<number[]>({
    key: "prefCodesState",
    default: [],
});
