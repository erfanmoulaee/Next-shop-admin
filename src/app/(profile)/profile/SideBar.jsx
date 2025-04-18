"use client";
import { logOut } from "@/services/authService";
import Link from "next/link";
import React from "react";

function SideBar() {
  const logOutHandler = async () => {
    await logOut();
    document.location.href = "/";
  };
  return (
    <div>
      <ul className="flex flex-col space-y-8">
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link href="/profile/me">اطلاعات کاربری</Link>
        </li>
        <li>
          <button onClick={logOutHandler}>خروج از حساب کاربری</button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
