import { ProductCard } from "@/components/ui/ProductCard"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Luxury Stool Chair",
      price: 29,
      image: "/assets/feature/Image.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/feature/Image2.png",
      isSale: true,
    },
    {
      id: 3,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/feature/Image3.png",
    },
    {
      id: 4,
      name: "Luxury Stool Chair",
      price: 35,
      image: "/assets/feature/Image4.png",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

