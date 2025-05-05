"use client";
import Loading from "@/common/Loading";
import { useGetUsers } from "@/hooks/useAuth";

function UsersPage() {
  const { isLoading, data } = useGetUsers();
  const { users } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>اطلاعات کاربران</h1>
    </div>
  );
}

export default UsersPage;
