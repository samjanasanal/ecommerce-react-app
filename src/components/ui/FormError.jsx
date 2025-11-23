import { AlertCircle } from "lucide-react"

export default function FormError({ message }) {
  return (
    <div className="flex items-center gap-2 mt-2 text-sm text-destructive">
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      <span>{message}</span>
    </div>
  )
}
