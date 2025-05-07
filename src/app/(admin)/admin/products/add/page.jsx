"use client";
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
import React, { useState } from "react";

function addProductPage() {
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
  return (
    <div className="w-full max-w-sm">
      <h1>اضافه کردن محصول</h1>
      <form>
        {productsFormData.map((item) => {
          return <TextField key={item.id} label={item.label} name={item.name} value={formData[item.name]} onChange={handleChange} />;
        })}
        <button className="btn btn--primary w-full">اضافه کردن محصول</button>
      </form>
    </div>
  );
}

export default addProductPage;
