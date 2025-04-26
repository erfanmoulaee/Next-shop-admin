"use client";
import RadioInput from "@/common/RadioInput";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "قدیمی ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "جدید ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

function ProductsSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("");

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(pathname + "?" + params.toString());
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);
  return (
    <div>
      <p className="font-bold mb-4">مرتب سازی</p>
      {sortOptions.map((item) => {
        return <RadioInput key={item.id} id={item.id} value={item.value} label={item.label} name="product-sort" checked={sort === item.value} onChange={sortHandler} />;
      })}
    </div>
  );
}

export default ProductsSort;
