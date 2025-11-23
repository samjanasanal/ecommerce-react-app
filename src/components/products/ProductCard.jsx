import { Link } from "react-router-dom"
import { Eye } from "lucide-react"

export default function ProductCard({ product }) {
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text
  }

  return (
    <div className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-border bg-card rounded-lg flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block text-xs font-semibold text-primary-foreground bg-primary px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-sm">{truncateText(product.title, 50)}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">{"★".repeat(Math.round(product.rating?.rate || 4))}</div>
          <span className="text-xs text-muted-foreground">({product.rating?.count || 0})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</p>
        </div>

        <Link to={`/product/${product.id}`} className="w-full mt-auto">
          <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors flex items-center justify-center gap-1 text-sm">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}
