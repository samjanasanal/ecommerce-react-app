import { Link } from "react-router-dom"
import { ShoppingBag, ShoppingCart, LogIn } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-opacity-90 transition-colors">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl hidden sm:inline text-foreground">StoreLite</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Login">
              <LogIn className="w-5 h-5" />
            </button>
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
