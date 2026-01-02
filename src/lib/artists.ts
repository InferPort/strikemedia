export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  gallery?: string[];
  social?: {
    spotify?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const sampleArtists: Artist[] = [
  {
    id: "1",
    name: "ИIKITA",
    genre: "RAP",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=800&fit=crop",
    bio: 'En las calles soleadas de Cali, NIKITA ha tejido su historia musical durante siete años, desde el 2017, primero como parte del proyecto "El Fantoche", ahora STRIKE. Su arte es un eco de su alma caleña, donde encuentra refugio en el poema y la prosa para expresar su dolor emocional. En cada nota, busca la paz y la armonía, convirtiendo sus experiencias en melodías que resuenan con la verdad de su ser.',
    // gallery: [
    //   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    //   "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop"
    // ],
    social: {
      spotify: "https://open.spotify.com/artist/5N1ODpvMH7eK0dc8awjsB0",
      instagram: "https://instagram.com/prod.strike",
      youtube: "https://youtube.com/@_STRIKEMEDIA_"
    }
  },
  {
    id: "2",
    name: "David's Dying",
    genre: "RAP",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop",
    bio: "Artista moderno.",
    social: {
      spotify: "https://open.spotify.com/artist/6d25fgOIADH5LqBP6tZosO",
      youtube: "https://www.youtube.com/@DavidsDying"
    }
  },
  // {
  //   id: "3",
  //   name: "steven.wav",
  //   genre: "Ambient / Chillwave",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
  //   bio: "Artista solista que crea paisajes sonoros oníricos perfectos para la meditación y el enfoque. Su música fusiona texturas orgánicas con sintetizadores ambientales.",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=800&h=600&fit=crop"
  //   ],
  //   social: {
  //     spotify: "https://open.spotify.com/artist/example",
  //     instagram: "https://instagram.com/auroradreams"
  //   }
  // }
]