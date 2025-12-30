export const SocialLinks = () => {
  return (
    <div className="flex gap-6 text-2xl">
      <a
        href="https://youtube.com/@_STRIKEMEDIA_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <a
        href="https://open.spotify.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        <i className="fab fa-spotify"></i>
      </a>
      <a
        href="https://instagram.com/strikemedia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  )
}