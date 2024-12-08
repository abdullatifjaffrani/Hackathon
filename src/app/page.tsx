import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/Hero"
import { BrandsSection } from "@/components/sections/Brands"
import { FeaturedProducts } from "@/components/sections/FeaturedProducts"
import { Categories } from "@/components/sections/Categories"
import { ExploreSection } from "@/components/sections/Explore"
import { OurProducts } from "@/components/sections/OurProducts"

export default function Home() {
  return (<div>
      <main className="flex-1">
        <HeroSection />
        <BrandsSection />
        <FeaturedProducts />
        <Categories />
        <ExploreSection />
        <OurProducts />
      </main>

    </div>
  )
}

