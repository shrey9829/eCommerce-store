import { create } from "zustand";

const usePreviewModel = create((set) => ({
  isOpen:false,
  data: undefined,
  onOpen: (data) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModel;
