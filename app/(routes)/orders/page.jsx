import React from "react";
import OrderCard from "./components/orderCard";
import getOrderDetail from "@/actions/get-orders";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  const orders = await getOrderDetail(session?.user?.email);

  if (orders.length === 0) {
    return (
      <section className="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border max-h-[80%] px-8 py-4">
          <p className="text-2xl font-semibold text-center p-4">
            You have no past orders!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border max-h-[80%] px-8 py-4">
        {orders.map((order, key) => (
          <OrderCard order={order} key={key} />
        ))}
      </div>
    </section>
  );
};

export default page;
