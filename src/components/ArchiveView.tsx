import { useState } from 'react'

const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
    alt: "Estudio de grabación",
    category: "Estudio"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop",
    alt: "Presentación en vivo",
    category: "En Vivo"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop",
    alt: "Colección de vinilos",
    category: "Equipo"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=800&fit=crop",
    alt: "Producción musical",
    category: "Estudio"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=800&fit=crop",
    alt: "Audiencia en concierto",
    category: "En Vivo"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1565034946-7e1b7b5d6a1d?w=1200&h=800&fit=crop",
    alt: "Consola de mezcla",
    category: "Equipo"
  }
]

export const ArchiveView = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("Todos")

  const categories = ["Todos", "Estudio", "En Vivo", "Equipo"]

  const filteredImages = filter === "Todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter)

  return (
    <div className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Archivo</h2>
            <div className="w-16 h-1 bg-white mt-4"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${filter === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/40'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-video overflow-hidden rounded-lg cursor-zoom-in bg-neutral-900"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-widest">{image.alt}</p>
                  <p className="text-gray-400 text-[10px] mt-2 uppercase tracking-tight">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Vista completa"
              className="max-w-full max-h-full object-contain rounded-sm"
            />
            <button className="absolute top-8 right-8 text-white text-4xl hover:scale-110 transition-transform">
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}