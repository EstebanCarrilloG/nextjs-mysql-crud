"use client";

import axios from "axios";
import { useRouter,useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });
  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  useEffect(()=> {

    if(params.id){
      axios.get("/api/products/" + params.id)
      .then(res =>(
        setProduct({
          name:res.data.name,
          price:res.data.price,
          description:res.data.description
        })
      ))
    }

  },[])
  
  const handleChange = (e) => {
    setProduct({
        ...product,[e.target.name]: e.target.value
    })
  };

  const  handleSubmit  = async (e) => {
    e.preventDefault();

    if(!params.id){
      const res = await axios.post("/api/products",product);
      console.log(res);
      form.current.reset()
    }else{
      const res = await axios.put("/api/products/"+params.id,product);
      console.log(res)
      form.current.reset()
    }
    
    
    
    router.refresh()
    router.push("/products")

  
}
  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
    onSubmit={handleSubmit}
    ref={form}>
      <label
        htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Product name
      </label>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handleChange}
        value={product.name}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="price"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Price
      </label>
      <input
        name="price"
        type="text"
        placeholder="00.00"
        onChange={handleChange}
        value={product.price}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="description"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Description
      </label>
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={product.description}
        rows="3"
        className="shadow appearance-none border rounded w-full py-2 px-3" 
      />
      <button type="submit" className="mt-[1rem] bg-blue-500 text-white rounded-md px-5 py-2">Save Product</button>
    </form>
  );
}

export default ProductForm;
