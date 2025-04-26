"use client";

import CheckBox from "@/common/CheckBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function ProductsFilter({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(searchParams.get("category")?.split(",") || []);
  // console.log(searchParams.getAll("category")?.split(",") || []);

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((category) => category !== value);
      setSelectedCategories(categories);
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", categories);
      router.push(pathname + "?" + params.toString());
    } else {
      setSelectedCategories([...selectedCategories, value]);
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", [...selectedCategories, value]);
      router.push(pathname + "?" + params.toString());
    }
  };

  return (
    <div>
      <p className="font-bold mb-4">دسته بندی ها </p>
      <ul className="space-y-4">
        {categories.map((category) => {
          return (
            <CheckBox
              key={category._id}
              id={category._id}
              value={category.englishTitle}
              name="product-type"
              label={category.title}
              checked={selectedCategories.includes(category.englishTitle)}
              onChange={categoryHandler}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsFilter;
