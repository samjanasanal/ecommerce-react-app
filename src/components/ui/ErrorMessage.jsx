import { AlertCircle } from "lucide-react"

export default function ErrorMessage({ message }) {
  return (
    <div className="border border-destructive/50 bg-destructive/10 p-4 mb-6 rounded-lg">
      <div className="flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
        <p className="text-destructive font-medium">{message}</p>
      </div>
    </div>
  )
}
