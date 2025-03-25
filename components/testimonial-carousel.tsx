"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  quote: string
  author: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative"> 
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-none bg-transparent max-w-4xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex justify-end mb-6">
                    <Quote className="h-12 w-12 text-primary" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-center mb-6 font-light">"{testimonial.quote}"</blockquote>
                  <p className="text-center font-medium">{testimonial.author}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

