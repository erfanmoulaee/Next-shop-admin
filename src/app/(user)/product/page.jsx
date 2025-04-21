import { getCategories } from "@/services/getCategories";
import { getProducts } from "@/services/getProducts";
import Link from "next/link";
import React from "react";

async function Products() {
  const { products } = await getProducts();
  const { categories } = await getCategories();
  return (
    <div>
      <h1>صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        {categories.map((category) => {
          return (
            <div>
              <Link href={``}>{category.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
