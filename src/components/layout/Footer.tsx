import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/Logo.png"
                alt="Comforty Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
            <p className="text-sm text-gray-600 max-w-sm">
              Discover the perfect blend of comfort and style with our curated collection of furniture. Transform your space into a haven of relaxation and elegance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Category</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Sofa</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Armchair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Wing Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Desk Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">wooden Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Park Bench</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Help & Support</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Tearms & Conditions</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-gray-800">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 border rounded-md"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-gray-600 text-center">
            &copy; 2023 Comforty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

