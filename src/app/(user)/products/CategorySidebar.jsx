import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";

function CategorySidebar({ categories }) {
  return (
    <div className="col-span-1 space-y-6">
      <ProductsSort />
      <ProductsFilter categories={categories} />
    </div>
  );
}

export default CategorySidebar;
