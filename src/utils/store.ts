import { atom } from "nanostores"

export const $showModal = atom<Boolean>(false)
export const $modalContent = atom<String | Number>(0)