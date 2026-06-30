import { Link } from "react-router-dom";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  category: string;
}

export default function ProjectCard({ slug, title, subtitle, thumbnail, category }: ProjectCardProps) {
  return (
    <Link to={`/du-an/${slug}`} className="group block">
      {/* Image container */}
      <div className="card-shimmer relative overflow-hidden aspect-[4/3] rounded-sm">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <span className="inline-flex items-center gap-2 text-white text-[10px] font-black tracking-[0.22em] border border-[var(--gold)] px-3 py-1.5">
            <span className="w-4 h-px bg-[var(--gold)]" />
            XEM CHI TIẾT
          </span>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-[var(--dark)]/80 backdrop-blur-sm text-[var(--gold)] text-[9px] font-black tracking-[0.15em] px-2.5 py-1 uppercase rounded-sm border border-[var(--gold)]/30">
          {category}
        </span>
      </div>

      {/* Info */}
      <div className="pt-3.5 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-4 h-px bg-[var(--gold)] transition-all duration-300 group-hover:w-8" />
          <p className="text-[var(--muted)] text-[10px] font-semibold tracking-widest uppercase">{subtitle}</p>
        </div>
        <h3 className="text-[var(--text)] text-sm font-bold tracking-wide group-hover:text-[var(--gold)] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}