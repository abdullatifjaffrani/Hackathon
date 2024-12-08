import Image from "next/image"

export function BrandsSection() {
  const brands = [
    { name: "Zapier", logo: "/assets/companylogo/Logo.png" },
    { name: "Pipedrive", logo: "/assets/companylogo/Logo1.png" },
    { name: "CIB Bank", logo: "/assets/companylogo/Logo2.png" },
    { name: "‍Z", logo: "/assets/companylogo/Logo3.png" },
    { name: "Burnt Toast", logo: "/assets/companylogo/Logo4.png" },
    { name: "PandaDoc", logo: "/assets/companylogo/Logo5.png" },
    { name: "Moz", logo: "/assets/companylogo/Logo6.png" },
  ]

  return (
    <section className="w-full py-12 border-t border-b">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

