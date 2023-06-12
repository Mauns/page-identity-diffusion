import { atom } from "nanostores"

export const $username = atom<String>("")

export const $showModal = atom<Boolean>(false)
export const $modalContent = atom<String | Number>(0)

export const $heroStageCoords = atom<Object>({
    x: 0,
    y: 0
})