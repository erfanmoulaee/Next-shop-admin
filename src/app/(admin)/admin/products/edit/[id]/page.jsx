"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};
  if (isLoading) return <Loading />;
  console.log(data);
  return <div> page</div>;
}

export default page;
