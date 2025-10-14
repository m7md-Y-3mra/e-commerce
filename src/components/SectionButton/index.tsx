import type { FC } from "react"

const SectionButton: FC<{ label: string }> = ({ label }) => {
  return (
    <button className="bg-primary hover:opacity-95 text-white px-10 py-3 lg:px-12 lg:py-4 rounded cursor-pointer">
      {label}
    </button>
  )
}

export default SectionButton