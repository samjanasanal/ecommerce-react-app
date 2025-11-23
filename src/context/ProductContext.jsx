"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products")
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError(err.message || "Failed to load products")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addProduct = (newProduct) => {
    const maxId = Math.max(...products.map((p) => p.id), 0)
    const productWithId = { ...newProduct, id: maxId + 1 }
    setProducts([productWithId, ...products])
  }

  const updateProduct = (productId, updatedData) => {
    setProducts(products.map((p) => (p.id === productId ? { ...p, ...updatedData } : p)))
  }

  const deleteProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId))
  }

  const getProductById = (id) => {
    return products.find((p) => p.id === Number.parseInt(id))
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within ProductProvider")
  }
  return context
}
