import Link from "next/link";
import { categories } from "@/data/products";

export default function CategoryNav() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap transition-colors"
            >
              <span>{cat.icon}</span>
              <span className="font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
