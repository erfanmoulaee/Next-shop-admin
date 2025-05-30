import { getCategories } from "@/services/getCategories";
import { getProducts } from "@/services/getProducts";
import React from "react";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import LikeProduct from "./LikeProduct";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";

export const dynamic = "force-dynamic";

async function Products({ params }) {
  const { searchParams } = await params;
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const query = queryString.stringify(searchParams || {});
  const productsPromise = getProducts(query, strCookies);
  const categoryPromise = getCategories();
  const [{ products }, { categories }] = await Promise.all([productsPromise, categoryPromise]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => {
              return (
                <div className="col-span-1 border rounded-xl shadow-md p-4" key={product._id}>
                  <h2 className="font-bold">{product.title}</h2>
                  <div className="mb-4">
                    <span>تاریخ ساختن :</span>
                    <span className="font-bold">{toLocalDateStringShort(product.createdAt)}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Link className="text-primary-900 font-bold mb-4 block border border-green-300 rounded-xl px-4 py-2" href={`/products/${product.slug}`}>
                      مشاهده محصول
                    </Link>
                    <LikeProduct product={product} />
                    <AddToCart product={product} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
