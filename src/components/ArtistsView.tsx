import { useState } from 'react'
import type { Artist } from '@/lib/artists'
import { sampleArtists } from '@/lib/artists'
import { Button } from '@/components/ui/button'

const ArtistProfile = ({ artist, onBack }: { artist: Artist, onBack: () => void }) => {
  return (
    <div className="w-full py-12 px-4 md:px-8 animate-in fade-in duration-500">
      <div className="max-w-5xl mx-auto">
        <Button
          onClick={onBack}
          className="mb-8 hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest"
          variant="outline"
        >
          ← Volver a artistas
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full aspect-[4/5] rounded-xl object-cover shadow-2xl shadow-white/5"
            />

            {artist.social && (
              <div className="flex justify-center lg:justify-start gap-6 mt-8">
                {artist.social.spotify && (
                  <a href={artist.social.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all text-2xl">
                    <i className="fab fa-spotify"></i>
                  </a>
                )}
                {artist.social.instagram && (
                  <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
                {artist.social.youtube && (
                  <a href={artist.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all text-2xl">
                    <i className="fab fa-youtube"></i>
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight">{artist.name}</h1>
            <p className="text-sm text-gray-400 mb-6 font-medium tracking-widest uppercase">{artist.genre}</p>
            <div className="w-12 h-0.5 bg-white mb-8"></div>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">{artist.bio}</p>

            {artist.gallery && artist.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">Galería</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {artist.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${artist.name} gallery ${idx}`}
                      className="aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ArtistsView = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)

  if (selectedArtist) {
    return <ArtistProfile artist={selectedArtist} onBack={() => setSelectedArtist(null)} />
  }

  return (
    <div className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Artistas</h2>
          <div className="w-16 h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sampleArtists.map((artist) => (
            <div
              key={artist.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500"
              onClick={() => setSelectedArtist(artist)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] text-gray-400 mb-1 font-bold tracking-[0.2em] uppercase">{artist.genre}</p>
                <h3 className="text-2xl font-bold text-white uppercase">{artist.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}