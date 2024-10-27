"use client";
import React, { useEffect, useState } from "react";

import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
import useCart from "@/hooks/use-cart";
import usePreviewModel from "@/hooks/use-preview-modal";
import Counter from "./ui/counter";
import toast from "react-hot-toast";

const Info = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModel();
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [increaseDisabled, setIncreaseDisabled] = useState(false);
  const [decreaseDisabled, setDecreaseDisabled] = useState(false);

  const increaseCounter = () => {
    if (quantity >= data.stock) {
      setIncreaseDisabled(true);
      toast.error(`Only ${data.stock} products is available in stock`);
    } else {
      setDecreaseDisabled(false);
      setQuantity(quantity + 1);
    }
  };

  const decreaseCounter = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setDecreaseDisabled(true);
    } else {
      setIncreaseDisabled(false)
      setQuantity(quantity - 1);
    }
  };

  const onAddToCart = (e) => {
    data.quantity = quantity;
    e.stopPropagation();
    cart.addItem(data);
    setQuantity(1);
    setIncreaseDisabled(false);
    setDecreaseDisabled(false);
    setDisabled(false);
    previewModal.onClose();
  };

  useEffect(() => {
    if (quantity > data.stock) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [quantity]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Size :</h3>
          <div>{data?.sizeId?.name}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Product Description :</h3>
          <div>{data?.description}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Quantity: </h3>
          <Counter
            increaseCounter={increaseCounter}
            decreaseCounter={decreaseCounter}
            disabled={disabled}
            increaseDisabled={increaseDisabled}
            decreaseDisabled={decreaseDisabled}
            quantity={quantity}
          />
        </div>
        <p
          className={`${
            data.stock > 0 ? "text-green-500" : "text-red-500"
          } flex items-center gap-x-4 text-xl font-bold`}
        >
          {data.stock > 0 ? "Product is in stock" : "Out of stock"}
        </p>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          disabled={disabled}
          onClick={onAddToCart}
          className="flex items-center gap-x-2"
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
