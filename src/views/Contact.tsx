export const Contact = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">HABLEMOS</h2>
        <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed uppercase tracking-widest font-light">
          ¿Listo para dar vida a tu visión? Ya sea que seas un artista buscando producción
          o una marca en busca de paisajes sonoros únicos, estamos aquí para conectar.
        </p>
        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:hello@strikemedia.xyz"
            className="text-xl md:text-2xl font-bold hover:text-white transition-colors duration-300 tracking-tighter"
          >
            HELLO@STRIKEMEDIA.XYZ
          </a>
          <a
            href="https://check.so"
            className="btn-shine text-sm font-bold tracking-[0.2em] uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acceso Anticipado
          </a>
        </div>
      </div>
    </div>
  )
}