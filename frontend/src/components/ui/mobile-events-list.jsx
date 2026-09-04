export function MobileEventsList({ images }) {
  return (
    <div className="flex flex-col gap-6 px-4 pb-16 w-full max-w-md mx-auto">
      {images.map(({ src, alt, title, description, date }, index) => (
        <div 
          key={index} 
          className="group relative flex flex-col w-full bg-white/5 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[var(--leaf-500)]/50 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="relative w-full h-[25vh] overflow-hidden">
            <img 
              src={src || '/placeholder.svg'} 
              alt={alt || `Event image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Text Content Section */}
          <div className="relative flex flex-col p-5 bg-black/40 backdrop-blur-md">
            {date && (
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--leaf-500)] mb-2">
                {date}
              </div>
            )}
            <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
              {title || 'Event Title'}
            </h3>
            {description && (
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
