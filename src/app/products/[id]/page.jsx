import ProductCard from "@/components/ProductCard";
import Buttons from "../Buttons";
import axios from "axios";

async function LoadProducts(productId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/products/" + productId
  );
  return data;
}

async function Product({ params }) {
  const product = await LoadProducts(params.id);

  return (
    <section className="flex justify-center">
      <div className="p-6 bg-white rounded-md">
        <p>Name: {product.name}</p>
        <p>Price:{product.price}</p>
        <p>Description: {product.description}</p>
        <Buttons productId={params.id}/>
      </div>
      
    </section>
  );
}

export default Product;
