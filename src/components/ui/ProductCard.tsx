import Image from "next/image"
import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
          width={300}
          height={300}
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
            New
          </div>
        )}
        {product.isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            Sale
          </div>
        )}
        <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm font-bold">${product.price}</p>
      </div>
    </div>
  )
}

