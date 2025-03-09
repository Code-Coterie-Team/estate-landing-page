import { create } from "zustand";

export const useStore = create<IModal>((set)=>({
    isShowModal:false,
    setShowModal:(value)=>set({isShowModal:value})
})
)