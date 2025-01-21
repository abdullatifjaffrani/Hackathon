import Image from "next/image"
import { fetchProductsByCategory } from "../../../app/utils/fetchProductsByCategory"
import Link from "next/link"

interface Product {
  _id: string
  title: string
  price: number
  image: {
    asset: {
      url: string
    }
  }
  description: string
}

export default async function Page({ params }: { params: { id: string } }) {
  const products: Product[] = await fetchProductsByCategory(params.id)

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Products in Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product._id}`}>
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={product.image.asset.url || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

