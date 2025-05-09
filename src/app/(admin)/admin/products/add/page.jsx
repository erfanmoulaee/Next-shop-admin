"use client";
import Select from "react-select";
const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
  {
    id: 9,
    label: "لینک عکس محصول",
    name: "imageLink",
  },
];

import TextField from "@/common/TextField";
import { useGetCategories } from "@/hooks/useCategories";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import { useAddProduct } from "@/hooks/useProducts";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loading from "@/common/Loading";

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
    <div className="w-full max-w-sm mb-10">
      <h1>اضافه کردن محصول</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {productsFormData.map((item) => {
          return <TextField key={item.id} label={item.label} name={item.name} value={formData[item.name]} onChange={handleChange} />;
        })}
        <div>
          <label htmlFor="tags">تگ محصولات</label>
          <TagsInput id="tags" value={tags} onChange={setTags} name="tags" />
        </div>
        <div>
          <label htmlFor="category" className="mb-2">
            دسته بندی
          </label>
          <Select id="category" onChange={setSelectedCategory} options={categories} getOptionLabel={(option) => option.title} getOptionValue={(option) => option._id} />
        </div>
        <div>{isLoading ? <Loading /> : <button className="btn btn--primary w-full">اضافه کردن محصول</button>}</div>
      </form>
    </div>
  );
}

export default addProductPage;
