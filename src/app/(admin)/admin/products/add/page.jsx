"use client";
import { useGetCategories } from "@/hooks/useCategories";
import { useState } from "react";
import { useAddProduct } from "@/hooks/useProducts";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";

function addProductPage() {
  const router = useRouter();
  const { data } = useGetCategories();
  const { categories } = data || {};
  const { isLoading, mutateAsync } = useAddProduct();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    countInStock: "",
    imageLink: "",
  });
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <h1>اضافه کردن محصول</h1>
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

export default addProductPage;
