"use client";
import Loading from "@/common/Loading";
import { useGetCategories } from "@/hooks/useCategories";
import CategoryListTable from "./CategoryListTable";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

function page() {
  const { isLoading, data } = useGetCategories();
  const { categories } = data || {};
  console.log(categories);

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">دسته بندی</h1>
        <Link href="/admin/categories/add" className="font-bold text-primary-900 flex items-center gap-x-2">
          <HiPlusCircle className="w-6 h-6" /> <span>اضافه کردن دسته بندی</span>
        </Link>
      </div>
      <CategoryListTable categories={categories} />
    </div>
  );
}

export default page;
