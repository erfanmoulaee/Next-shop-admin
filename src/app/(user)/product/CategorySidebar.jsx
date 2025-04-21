import CheckBox from "@/common/CheckBox";
import { useState } from "react";

function CategorySidebar({ categories }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categoryHandler = () => {};
  return (
    <div className="col-span-1">
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

export default CategorySidebar;
