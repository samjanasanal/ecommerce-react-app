"use client"

import React from "react"
import ProductGrid from "../components/products/ProductGrid"
import CategoryFilter from "../components/products/CategoryFilter"
import { Search } from "lucide-react"

export default function Home() {
 

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Discover Premium Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our curated collection of quality products. Create, edit, and manage your store with ease.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full px-3 py-2 border border-border rounded-md bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
       
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <CategoryFilter
              />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
      </div>
    </div>
  )
}
