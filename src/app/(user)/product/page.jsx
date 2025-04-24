import { getCategories } from "@/services/getCategories";
import { getProducts } from "@/services/getProducts";
import React from "react";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";

async function Products({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();
  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {products.map((product) => {
            return (
              <div className="col-span-1 border rounded-xl shadow-md p-4" key={product._id}>
                <h2 className="font-bold">{product.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
