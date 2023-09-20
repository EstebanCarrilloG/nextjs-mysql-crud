"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ productId }) {
  const router = useRouter();

  return (
    <div className="flex gap-2 mt-3">
      <button
        className="bg-gray-500 text-white px-2 py-1"
        onClick={() => {
          router.push("/products/edit/" + productId)
        }}
      >
        Editar
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1"
        onClick={async () => {
          if (confirm("Are you sure you want to delete this product?")) {
            const res = await axios.delete("/api/products/" + productId);
            if (res.status === 204) {
              router.push("/products");
              router.refresh();
            }
          }
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Buttons;
