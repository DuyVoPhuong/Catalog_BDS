import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';
import { ArrowLeft, MapPin, Calendar, Maximize } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <p className="text-[#8b7355] mb-4">Không tìm thấy dự án.</p>
        <Link to="/du-an" className="text-sm underline text-[#3a3028]">← Quay lại danh sách</Link>
      </div>
    );
  }

  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} – AP Design Architecture</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#c9b99a] text-xs tracking-[0.3em] uppercase mb-2">{project.category}</p>
              <h1 className="text-white text-3xl md:text-5xl font-semibold">{project.title}</h1>
              <p className="text-white/70 text-sm mt-1">{project.subtitle}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#8b7355] text-xs font-semibold tracking-wider mb-10 hover:gap-3 transition-all"
        >
          <ArrowLeft size={14} /> QUAY LẠI
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <p className="text-[#7a6f65] leading-relaxed mb-10">{project.description}</p>

            {/* Gallery */}
            <h2 className="text-[#3a3028] text-sm font-semibold tracking-widest mb-5 uppercase">Hình ảnh dự án</h2>
            <div className="grid grid-cols-2 gap-3">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className="relative overflow-hidden aspect-[4/3] group"
                >
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-[#f6f3ef] p-6">
              <h3 className="text-[#3a3028] text-xs font-semibold tracking-widest mb-5 uppercase">Thông tin dự án</h3>
              <ul className="space-y-4 text-sm">
                {project.location && (
                  <li className="flex items-start gap-3 text-[#7a6f65]">
                    <MapPin size={14} className="mt-0.5 text-[#8b7355] flex-shrink-0" />
                    <span>{project.location}</span>
                  </li>
                )}
                {project.year && (
                  <li className="flex items-start gap-3 text-[#7a6f65]">
                    <Calendar size={14} className="mt-0.5 text-[#8b7355] flex-shrink-0" />
                    <span>{project.year}</span>
                  </li>
                )}
                {project.area && (
                  <li className="flex items-start gap-3 text-[#7a6f65]">
                    <Maximize size={14} className="mt-0.5 text-[#8b7355] flex-shrink-0" />
                    <span>{project.area}</span>
                  </li>
                )}
                <li className="flex items-start gap-3 text-[#7a6f65]">
                  <span className="text-[#8b7355] font-semibold text-[10px] tracking-widest uppercase mt-0.5">Danh mục</span>
                  <span>{project.category}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#3a3028] p-6 text-center">
              <p className="text-[#c9b99a] text-xs tracking-widest mb-3 uppercase">Quan tâm dự án này?</p>
              <p className="text-white/70 text-sm mb-5">Liên hệ ngay để được tư vấn và báo giá miễn phí.</p>
              <Link
                to="/bao-gia"
                className="block bg-[#8b7355] text-white text-xs font-semibold tracking-widest py-3 hover:bg-[#7a6347] transition-colors"
              >
                BÁO GIÁ NGAY
              </Link>
            </div>
          </aside>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[#3a3028] text-sm font-semibold tracking-widest mb-8 uppercase">Dự án liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/du-an/${p.slug}`} className="group block">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    />
                  </div>
                  <p className="text-sm font-semibold text-[#3a3028] mt-2 group-hover:text-[#8b7355] transition-colors">{p.title}</p>
                  <p className="text-xs text-[#8b7a70]">{p.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={project.gallery.map((src) => ({ src }))}
      />
    </>
  );
}
