"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoSectionProps {
  videoLinks: string[]
}

export function VideoSection({ videoLinks }: VideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Generate thumbnail URL from YouTube video ID
  const getThumbnailUrl = (url: string) => {
    const id = getYouTubeId(url)
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "/placeholder.svg?height=200&width=300"
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoLinks.map((link, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          <div className="aspect-video bg-muted relative cursor-pointer" onClick={() => setActiveVideo(link)}>
            <img
              src={getThumbnailUrl(link) || "/placeholder.svg"}
              alt={`Video thumbnail ${index + 1}`}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="rounded-full bg-primary/90 p-3 text-primary-foreground">
                <Play className="h-8 w-8" />
              </div>
            </div>
          </div>

          {activeVideo === link && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(link)}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

