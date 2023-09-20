import ProductCard from "@/components/ProductCard";
import axios from "axios";

async function LoadProducts() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;
}

async function ProductsPage() {
  const products = await LoadProducts();

  return (
    <>
      <h1>Products page</h1>
      <div className="flex flex-wrap gap-[2rem]">
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
