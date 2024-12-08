import { ProductCard } from "@/components/ui/ProductCard"

export function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Luxury Stool Chair",
      price: 29,
      image: "/assets/ourproducts/Image1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image2.png",
      isSale: true,
    },
    {
      id: 3,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image3.png",
    },
    {
      id: 4,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image4.png",
    },
    {
      id: 5,
      name: "Luxury Stool Chair",
      price: 29,
      image: "/assets/ourproducts/Image5.png",
    },
    {
      id: 6,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image6.png",
    },
    {
      id: 7,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image7.png",
    },
    {
      id: 8,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/ourproducts/Image8.png",
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

