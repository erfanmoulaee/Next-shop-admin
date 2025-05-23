"use client";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import PaymentTable from "./payments/PaymentTable";
import Link from "next/link";

function Profile() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <p>is Loading ...</p>;

  return (
    <div>
      <h1>{user.name} خوش آمدی</h1>
      <p>
        <span>تاریخ پیوستن : </span>
        <span>{toLocalDateStringShort(user.createdAt)}</span>
      </p>
      <div className="border rounded-xl p-4 mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">آخرین سفارشات کاربر</h2>
          <Link className="text-primary-900" href="/profile/payments">
            مشاهده همه سفارشات
          </Link>
        </div>
        <PaymentTable payments={payments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 2)} />
      </div>
    </div>
  );
}

export default Profile;
