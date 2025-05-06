"use client";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  // fetch based on product id to get product detail
  return <div>page</div>;
}

export default page;
