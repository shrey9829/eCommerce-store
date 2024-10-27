"use client";

import React from "react";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModel from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

const ProductCard = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModel();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?._id}`);
  };

  const onPreview = (e) => {
    e.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart = (e) => {
    e.stopPropagation();
    console.log(data);
    if (data.stock <= 0) {
      toast.error("Item out of stock");
      return;
    } else {
      cart.addItem(data);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-lg hover:shadow-xl "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0].url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.categoryId?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`${
            data.stock > 0 ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {data.stock > 0 ? "Available" : "Out of stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
