import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400">Help Center</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Track Order</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Shipping Info</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About ShopEase</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Press</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400">Sell on ShopEase</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Seller Center</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Affiliate Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400">Facebook</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Instagram</Link></li>
              <li><Link href="#" className="hover:text-orange-400">Twitter / X</Link></li>
              <li><Link href="#" className="hover:text-orange-400">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 ShopEase. Demo e-commerce inspired by AliExpress. Built with Next.js.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-orange-400">Privacy</Link>
            <Link href="#" className="hover:text-orange-400">Terms</Link>
            <Link href="#" className="hover:text-orange-400">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
