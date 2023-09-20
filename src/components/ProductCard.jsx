import Link from "next/link"

function ProductCard({product}){
    return(<Link href={`/products/${product.id}`}
        className="bg-white border-l-gray-500 px-[1rem] py-[1rem]"
      >
        <h1>{product.name}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
      </Link>)

}

export default ProductCard