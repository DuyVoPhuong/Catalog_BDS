import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, CATEGORIES, type Category } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet-async";

const PER_PAGE = 8;

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("Tất cả");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (active === "Tất cả" ? projects : projects.filter((p) => p.category === active)),
    [active]
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
        <title>Dự Án – Nguyễn Vũ Luân</title>
        <meta name="description" content="Danh sách dự án thiết kế và thi công nội thất." />
      </Helmet>

      {/* Header */}
      <div className="pt-28 pb-14 bg-[var(--dark-2)] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[var(--gold)]" />
            <p className="text-[var(--gold)] text-[10px] font-black tracking-[0.4em] uppercase">Portfolio</p>
            <span className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-black tracking-widest">DỰ ÁN</h1>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="bg-[var(--dark)] border-b border-white/8 sticky top-[68px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 text-[10px] font-black tracking-[0.18em] transition-all duration-300 rounded-sm ${
                  active === cat
                    ? "bg-[var(--gold)] text-[var(--dark)] shadow-lg shadow-[var(--gold)]/30"
                    : "text-white/40 hover:text-white hover:bg-white/8"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[var(--bg)] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + page}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {paginated.map((p) => (
                <ProjectCard key={p.id} slug={p.slug} title={p.title} subtitle={p.subtitle} thumbnail={p.thumbnail} category={p.category} />
              ))}
            </motion.div>
          </AnimatePresence>

          {paginated.length === 0 && (
            <div className="text-center py-20 text-[var(--muted)] text-sm">Chưa có dự án trong danh mục này.</div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center border border-[var(--bg-3)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-25 transition-all text-sm rounded-sm"
              >‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-sm transition-all ${
                    n === page
                      ? "bg-[var(--gold)] text-[var(--dark)] shadow-lg shadow-[var(--gold)]/30"
                      : "border border-[var(--bg-3)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  }`}
                >{n}</button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-[var(--bg-3)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-25 transition-all text-sm rounded-sm"
              >›</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}