import { Button } from "@/components/ui/Button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter xl:text-6xl/none">
                Best Furniture Collection For Your Interior.
              </h1>
            </div>
            <Button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white">
              Shop Now
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/Hero.png"
              alt="Hero Chair"
              width={150}
              height={150}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

