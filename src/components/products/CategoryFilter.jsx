"use client"

export default function CategoryFilter() {
  return (
    <div className="border border-border bg-card p-6 h-fit rounded-lg sticky top-20">
      <h3 className="font-bold text-foreground mb-4">Categories</h3>

      <div className="space-y-2">
        {/* All Categories */}
        <button
          onClick={() => onCategoryChange("all")}
          className={`w-full text-left px-4 py-2 rounded-md transition-colors "text-foreground hover:bg-primary/10 hover:text-primary"
          `}
        >
          All Products
        </button>

        {/* Individual Categories */}
          <button
            className={`w-full text-left px-4 py-2 rounded-md capitalize transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            category
          </button>
      </div>
    </div>
  )
}
