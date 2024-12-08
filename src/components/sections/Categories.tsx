import Image from "next/image"
import Link from "next/link"

export function Categories() {
  const categories = [
    {
      title: "Wing Chair",
      image: "/assets/topcategory/Image.png",
      link: "/category/wing-chair",
    },
    {
      title: "Wooden Chair",
      image: "/assets/topcategory/Image2.png",
      link: "/category/wooden-chair",
    },
    {
      title: "Desk Chair",
      image: "/assets/topcategory/Image3.png",
      link: "/category/desk-chair",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={600}
                className="object-cover w-full h-[600px] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

