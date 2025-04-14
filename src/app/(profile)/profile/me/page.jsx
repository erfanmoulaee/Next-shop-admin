"use client";

import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { includeObj } from "@/utils/objectutils";
import { useEffect, useState } from "react";

function MePage() {
  const { data, isLoading } = useGetUser();
  const [formData, setFormData] = useState({});
  const { user } = data || {};

  const includeKey = ["name", "email", "phoneNumber", "biography"];

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeKey));
  }, [user]);

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-sm">
      <h1>اطلاعات کاربری</h1>
      <form>
        {Object.keys(includeObj(user, includeKey)).map((key) => {
          return <TextField label={key} name={key} key={key} value={formData[key] || ""} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />;
        })}
      </form>
    </div>
  );
}

export default MePage;
