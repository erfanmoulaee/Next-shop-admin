"use client";
import Loading from "@/common/Loading";
import ProductForm from "@/components/ProductForm";
import { useGetCategories } from "@/hooks/useCategories";
import { useGetProductById, useUpdateProduct } from "@/hooks/useProducts";
import { includeObj } from "@/utils/objectutils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const includesProductkey = ["title", "description", "slug", "brand", "price", "offPrice", "discount", "countInStock", "imageLink"];

function page() {
  const { id } = useParams();
  const { data, isLoading: isLoadingProduct } = useGetProductById(id);
  const { product } = data || {};
  const { data: categoryData } = useGetCategories();
  const { categories } = categoryData || {};
  const [formData, setFormData] = useState({});
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isLoading, mutateAsync } = useUpdateProduct();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        productId: product._id,
        data: {
          ...formData,
          tags,
          category: selectedCategory._id,
        },
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setTags(product.tags);
      setSelectedCategory(product.category);
      setFormData(includeObj(product, includesProductkey));
    }
  }, [data]);
  if (isLoadingProduct) return <Loading />;
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش اطلاعات محصول</h1>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        productData={formData}
        productDataOnChange={handleChange}
      />
    </div>
  );
}

export default page;
