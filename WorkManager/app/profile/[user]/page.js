import React from "react";
import UserPageComp from "@/app/profile/[user]/UserPage";

export const metadata = {
  title: "User : MIDDLEWARE",
};

function UserPage() {
  return <div>
    <UserPageComp/>
  </div>;
}

export default UserPage;
