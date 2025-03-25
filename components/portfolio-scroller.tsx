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
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const animateScroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0
      } else {
        scrollElement.scrollLeft += 1
      }
    }

    const interval = setInterval(animateScroll, 30)

    // Pause on hover
    const handleMouseEnter = () => clearInterval(interval)
    const handleMouseLeave = () => setInterval(animateScroll, 30)

    scrollElement.addEventListener("mouseenter", handleMouseEnter)
    scrollElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      scrollElement.removeEventListener("mouseenter", handleMouseEnter)
      scrollElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate the companies array to create a seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto no-scrollbar gap-6 pb-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {duplicatedCompanies.map((company, index) => (
        <Card key={`${company.name}-${index}`} className="min-w-[200px] flex-shrink-0 !bg-transparent !border-none shadow-none">
          <CardContent className="p-4 flex flex-col items-center justify-center !bg-transparent !border-none">
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={150}
              height={75}
              className="object-contain h-16"
            />
            {/* <p className="mt-2 text-center text-sm font-medium">{company.name}</p> */}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

