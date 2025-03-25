"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

interface Company {
  name: string
  logo: string
}

interface PortfolioScrollerProps {
  companies: Company[]
}

export function PortfolioScroller({ companies }: PortfolioScrollerProps) {
  // Duplicate the companies array to create a seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div className="relative overflow-hidden py-4">
      <div className="w-full flex whitespace-nowrap">
        <div className="flex min-w-max animate-scroll gap-6">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="min-w-[200px] flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={150}
                height={75}
                className="object-contain h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

