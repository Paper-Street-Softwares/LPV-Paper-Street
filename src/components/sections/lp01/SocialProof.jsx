function SocialProofVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-[230px] bg-cover h-[105px] tablet1:w-[260px] rounded-lg overflow-hidden shadow-md border mx-3">
      {!isPlaying && (
        <div className="bg-black/40 absolute inset-0 pointer-events-none" />
      )}

      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover border-2 border-primaryDark rounded-lg"
      />

      <div className="absolute flex items-center gap-2 px-2 w-[140px] py-1 text-xs text-white -translate-x-1/2 rounded-full bottom-2 left-1/2 bg-white shadow-lg transition hover:scale-110 ">
        <button
          onClick={togglePlay}
          className="w-full"
          aria-label="Botão de Player e Pause dos vídeos"
        >
          {isPlaying ? (
            <p className="flex items-center justify-evenly text-black">
              Pausar áudio <Pause width={14} />
            </p>
          ) : (
            <p className="flex items-center justify-evenly text-black">
              Toque para ouvir <Play width={14} />
            </p>
          )}
        </button>
      </div>
    </div>
  );
}
