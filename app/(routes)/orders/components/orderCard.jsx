import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const OrderCard = ({ order }) => {
  const totalPrice = order.orderItems.reduce((total, item) => {
    return total + Number(item.price * item.quantity);
  }, 0);
  return (
    <div className="border rounded-md p-8 my-4 flex flex-col gap-4 text-xl font-bold">
      <p>Order ID : {order._id}</p>
      {order.orderItems.map((item, key) => (
        <div key={key} className="flex items-center gap-4">
          <Image
            src={item?.images[0].url}
            height={100}
            width={100}
            className="rounded-md border shadow-lg"
          />
          <div className="text-lg py-2">
            <p>Item name : {item?.name}</p>
            <p>Item price : ₹{item?.price}</p>
            <p>Item quantity : x{item?.quantity}</p>
          </div>
        </div>
      ))}
      <Separator className="mt-2" />
      <p className="pt-4 text-right">Total Amount : ₹{totalPrice}</p>
    </div>
  );
};

export default OrderCard;
