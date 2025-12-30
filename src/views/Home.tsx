import { Navbar } from '@/components/Navbar'
import { ArtistsView as Artists } from '@/components/ArtistsView'
import { ArchiveView as Archive } from '@/components/ArchiveView'
import { Contact } from '@/views/Contact'

export const Home = () => {
  return (
    <div className="scroll-container">
      <Navbar />

      <section id="home" className="section hero">
        <div className="container flex flex-col items-center text-center">
          <img className="logo-home mb-12" src="/logo.svg" alt="STRIKEMEDIA Logo" />
          <div className="max-w-xl animate-in slide-in-from-bottom duration-1000">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">CULTURA & SONIDO VANGUARDISTA</h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 uppercase tracking-widest">
              Laboratorio creativo dedicado a la producción audiovisual, gestión de talento y diseño sonoro.
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
              >
                Explorar Artistas
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="artists" className="section">
        <Artists />
      </section>

      <section id="archive" className="section">
        <Archive />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  )
}