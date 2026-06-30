import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, CATEGORIES, type Category } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet-async';

const PER_PAGE = 8;

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('Tất cả');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => active === 'Tất cả' ? projects : projects.filter((p) => p.category === active),
    [active],
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategory = (cat: Category) => {
    setActive(cat);
    setPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Dự Án – AP Design Architecture</title>
        <meta name="description" content="Danh sách dự án thiết kế và thi công nội thất của AP Design Architecture." />
      </Helmet>

      {/* Page header */}
      <div className="pt-24 pb-10 bg-[#f6f3ef] text-center">
        <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-2 uppercase">Portfolio</p>
        <h1 className="text-[#3a3028] text-3xl font-semibold tracking-widest">DỰ ÁN</h1>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-[#e8e0d5] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-semibold tracking-widest transition-colors border ${
                  active === cat
                    ? 'bg-[#8b7355] text-white border-[#8b7355]'
                    : 'bg-transparent text-[#7a6f65] border-transparent hover:text-[#8b7355] hover:border-[#8b7355]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {paginated.map((p) => (
                <ProjectCard
                  key={p.id}
                  slug={p.slug}
                  title={p.title}
                  subtitle={p.subtitle}
                  thumbnail={p.thumbnail}
                  category={p.category}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {paginated.length === 0 && (
            <div className="text-center py-20 text-[#8b7355] text-sm">Chưa có dự án trong danh mục này.</div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-8 h-8 flex items-center justify-center border border-[#ccc] text-[#7a6f65] hover:border-[#8b7355] disabled:opacity-30 transition-colors text-xs"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-8 h-8 flex items-center justify-center border text-xs font-semibold transition-colors ${
                    n === page
                      ? 'bg-[#8b7355] text-white border-[#8b7355]'
                      : 'border-[#ccc] text-[#7a6f65] hover:border-[#8b7355]'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-8 h-8 flex items-center justify-center border border-[#ccc] text-[#7a6f65] hover:border-[#8b7355] disabled:opacity-30 transition-colors text-xs"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
