import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-lg border p-8">
        <p className="text-3xl font-bold pb-6">Account Details</p>
        <div className="flex items-center gap-6">
          <Avatar className="h-18 w-18">
            <AvatarImage src={session?.user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1 py-1">
              <p className="text-xl font-semibold">Name : </p>
              <p className="text-lg font-dark">{session?.user.name}</p>
            </div>
            <div className="flex items-center gap-1 py-1">
              <p className="text-xl font-semibold">Email : </p>
              <p className="text-lg font-dark">{session?.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
