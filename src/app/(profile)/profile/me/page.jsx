"use client";
import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authService";
import { includeObj } from "@/utils/objectutils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const [formData, setFormData] = useState({});
  const { user } = data || {};

  const includeKey = ["name", "email", "phoneNumber", "biography"];

  useEffect(() => {
    if (user) setFormData(includeObj(user, includeKey));
  }, [user]);

  if (isLoading) return <Loading />;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: "get-user" });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="max-w-sm">
      <h1 className="mb-4  ">اطلاعات کاربری</h1>
      <form onSubmit={submitHandler} className="space-y-8">
        {Object.keys(includeObj(user, includeKey)).map((key) => {
          return <TextField label={key} name={key} key={key} value={formData[key] || ""} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />;
        })}
        {isUpdating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            آپدیت
          </button>
        )}
      </form>
    </div>
  );
}

export default MePage;
