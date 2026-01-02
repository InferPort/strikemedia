import { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'

interface ReleaseAsset {
    name: string
    browser_download_url: string
}

interface Release {
    tag_name: string
    assets: ReleaseAsset[]
}

export const WaveVault = () => {
    const [downloadUrls, setDownloadUrls] = useState<{ mac: string; windows: string; linux: string; version: string }>({
        mac: '',
        windows: '',
        linux: '',
        version: ''
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDownloadUrls = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/nikitacontreras/wavevault/releases')
                const releases: Release[] = await response.json()

                if (releases.length > 0) {
                    const latestRelease = releases[0]
                    const assets = latestRelease.assets

                    let macUrl = ''
                    let windowsUrl = ''
                    let linuxUrl = ''

                    for (const asset of assets) {
                        if (asset.name.includes('.blockmap')) {
                            continue // Ignorar archivos .blockmap
                        }
                        if (asset.name.includes('mac') || asset.name.includes('darwin')) {
                            macUrl = asset.browser_download_url
                        } else if (asset.name.includes('win') || asset.name.includes('.exe')) {
                            windowsUrl = asset.browser_download_url
                        } else if (asset.name.includes('linux')) {
                            linuxUrl = asset.browser_download_url
                        }
                    }

                    setDownloadUrls({ mac: macUrl, windows: windowsUrl, linux: linuxUrl, version: latestRelease.tag_name })
                }
            } catch (error) {
                console.error('Error fetching download URLs:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchDownloadUrls()
    }, [])
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
            <Navbar />

            <main className="section flex-col pt-32">
                <div className="container max-w-6xl mx-auto px-6">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-block px-4 py-1.5 mb-8 border border-white/10 rounded-full">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Suite de Producción Profesonal</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">WAVEVAULT</h1>
                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed uppercase tracking-widest max-w-2xl font-light">
                            La herramienta definitiva de gestión de samples y "crate digging" para productores de élite.
                        </p>
                    </div>

                    {/* Main Screenshot Placeholder */}
                    <div className="relative group mb-32 animate-in fade-in zoom-in-95 duration-1000 delay-200">
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative w-full aspect-video bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <img
                                src="/wavevault/dashboard.png"
                                alt="WaveVault Dashboard"
                                className="w-full h-full object-contain transition-transform duration-1000"
                            />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 mb-32 overflow-hidden rounded-xl">
                        <div className="p-10 bg-[#050505] hover:bg-zinc-900/50 transition-colors">
                            <div className="text-white/20 text-3xl mb-6 font-black italic">01</div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Librería Inteligente</h3>
                            <p className="text-gray-500 text-[10px] leading-loose uppercase tracking-wider">Análisis automático de BPM y Tonalidad. Olvida el etiquetado manual.</p>
                        </div>
                        <div className="p-10 bg-[#050505] hover:bg-zinc-900/50 transition-colors">
                            <div className="text-white/20 text-3xl mb-6 font-black italic">02</div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Crate Digging</h3>
                            <p className="text-gray-500 text-[10px] leading-loose uppercase tracking-wider">Búsqueda integrada en Discogs y preescucha instantánea en alta fidelidad.</p>
                        </div>
                        <div className="p-10 bg-[#050505] hover:bg-zinc-900/50 transition-colors">
                            <div className="text-white/20 text-3xl mb-6 font-black italic">03</div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-white">Estándar Pro</h3>
                            <p className="text-gray-500 text-[10px] leading-loose uppercase tracking-wider">Conversión por lotes, normalización y arrastrar-soltar directo a tu DAW.</p>
                        </div>
                    </div>

                    {/* Detailed Feature Sections */}
                    <div className="space-y-48 pb-32">
                        {/* Section 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
                                <div className="w-12 h-0.5 bg-white"></div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">Excavación Digital<br />Redefinida</h2>
                                <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest font-light">
                                    Navega por la base de datos musical más grande del mundo directamente desde tu escritorio. Encuentra el sample perfecto, preescúchalo al instante y descárgalo con integridad total de metadatos.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-white scale-0 group-hover:scale-100 transition-transform"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Filtros Avanzados Discogs</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-white scale-0 group-hover:scale-100 transition-transform"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Enriquecimiento de Audio Instantáneo</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="aspect-[4/3] bg-zinc-900 border border-white/5 rounded-xl group overflow-hidden relative shadow-xl">
                                <img
                                    src="/wavevault/discovery.png"
                                    alt="WaveVault Discovery"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Interface: Discovery Mode</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                            <div className="aspect-[4/3] bg-[#0a0a0a] border border-white/5 rounded-xl group order-2 md:order-1 overflow-hidden relative shadow-2xl">
                                <img
                                    src="/wavevault/manager.png"
                                    alt="WaveVault Manager"
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Interface: Project Manager</p>
                                </div>
                            </div>
                            <div className="space-y-8 order-1 md:order-2 animate-in slide-in-from-right-8 duration-1000">
                                <div className="w-12 h-0.5 bg-white ml-auto md:ml-0"></div>
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-right md:text-left">Flujo de Trabajo<br />de Grado Estudio</h2>
                                <p className="text-gray-400 text-xs leading-relaxed uppercase tracking-widest font-light text-right md:text-left">
                                    La forma más eficiente de formatear tu librería de samples. Resampleado de alta fidelidad, normalización y control absoluto sobre la organización de tus archivos finales.
                                </p>
                                <ul className="space-y-4 flex flex-col items-end md:items-start">
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-white scale-0 group-hover:scale-100 transition-transform"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Motor Multi-Formato</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-white scale-0 group-hover:scale-100 transition-transform"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Normalización de Sample Rate</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Download Section */}
                    <div className="relative overflow-hidden rounded-3xl mb-32">
                        <div className="absolute inset-0 bg-white"></div>
                        <div className="relative z-10 p-16 md:p-24 flex flex-col items-center text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">Únete a la Beta</h2>
                            <p className="text-black/50 text-[10px] font-bold uppercase tracking-[0.3em] mb-12">Eleva tu flujo de trabajo en el estudio hoy mismo.</p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                                <button
                                    type="button"
                                    className="flex-1 px-8 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => downloadUrls.mac && window.open(downloadUrls.mac, '_blank')}
                                    disabled={loading || !downloadUrls.mac}
                                >
                                    <i className="fab fa-apple text-sm"></i>
                                    {loading ? 'Loading...' : 'Download Mac (Universal)'}
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 px-8 py-5 bg-zinc-100 text-black border border-black/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => downloadUrls.windows && window.open(downloadUrls.windows, '_blank')}
                                    disabled={loading || !downloadUrls.windows}
                                >
                                    <i className="fab fa-windows text-sm"></i>
                                    {loading ? 'Loading...' : 'Download Windows (.exe)'}
                                </button>
                            </div>

                            <p className="mt-10 text-[9px] font-bold uppercase tracking-widest text-black/40">
                                WaveVault {downloadUrls.version} — Gratuito por tiempo limitado
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 border-t border-white/5 text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-gray-600">© 2026 STRIKEMEDIA — Todos los derechos reservados</p>
            </footer>
        </div>
    )
}
