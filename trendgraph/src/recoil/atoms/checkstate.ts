import { atom } from "recoil";

export const prefacturesState = atom<Prefacture[]>({
    key: "prefacturesState",
    default: [],
});
