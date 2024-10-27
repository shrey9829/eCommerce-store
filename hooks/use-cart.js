import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item._id === data._id);

        if (existingItem) {
          return toast.error("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item._id !== id)] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
      increaseCount: (id) => {
        const currentItems = get().items;
        const item = currentItems.find((item) => id === item._id);
        const index = currentItems.findIndex((item) => item._id === id);
        item.quantity = item.quantity + 1;
        currentItems.splice(index, 1, item);

        set({ items: currentItems });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
