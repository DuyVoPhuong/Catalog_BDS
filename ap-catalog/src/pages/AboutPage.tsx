import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { title: "Lắng nghe", desc: "Mỗi dự án bắt đầu từ việc thấu hiểu nhu cầu và ước mơ của khách hàng." },
  { title: "Sáng tạo", desc: "Mỗi thiết kế là một tác phẩm độc bản, phản ánh cá tính riêng của chủ nhân." },
  { title: "Chất lượng", desc: "Vật liệu được chọn lọc kỹ càng, thi công tỉ mỉ và giám sát chặt chẽ." },
  { title: "Đúng hẹn", desc: "Cam kết tiến độ, minh bạch chi phí, không phát sinh ngoài hợp đồng." },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Giới Thiệu – Nguyễn Vũ Luân</title>
        <meta name="description" content="Giới thiệu về Nguyễn Vũ Luân – Real Estate Catalog cá nhân." />
      </Helmet>

      {/* Hero */}
      <div className="relative h-72 overflow-hidden">
        <img src="https://apdesignarch.vn/images/trang-chu/main.webp" alt="Giới thiệu" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] font-black tracking-[0.4em] uppercase">VL · Personal Brand</p>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black tracking-widest">GIỚI THIỆU</h1>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="bg-[var(--bg)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] font-black tracking-[0.35em] uppercase">Về tôi</p>
            </div>
            <h2 className="text-[var(--text)] text-3xl md:text-4xl font-black leading-snug mb-6">
              Kiến tạo không gian sống<br />
              <span className="text-gold-gradient">độc bản cho bạn</span>
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              AP Design Architecture là công ty chuyên thiết kế và thi công nội ngoại thất tại TP. Hồ Chí Minh. Chúng tôi phục vụ đa dạng loại hình: căn hộ, nhà phố, biệt thự, văn phòng, cà phê và nhà hàng.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang lại không gian sống chất lượng cao, tối ưu chi phí và hoàn thành đúng tiến độ.
            </p>
            <Link to="/du-an" className="btn-outline-gold text-[11px] font-black tracking-[0.2em] px-8 py-3.5 rounded-sm inline-block">
              XEM DỰ ÁN →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}>
            <div className="relative">
              <img src="https://apdesignarch.vn/images/trang-chu/thi-cong.png" alt="Design" className="w-full max-w-sm mx-auto" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[var(--gold)]/30 rounded-lg animate-spin-slow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--dark-2)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-4" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-[10px] font-black tracking-[0.35em] uppercase">Cam kết</p>
              <span className="w-8 h-px bg-[var(--gold)]" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-black">GIÁ TRỊ CỐT LÕI</h2>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="glass rounded-lg p-7 text-center group hover:border-[var(--gold)]/40 transition-all duration-400 hover:-translate-y-1"
              >
                <div className="w-10 h-px bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] mx-auto mb-5" />
                <h3 className="text-white font-black text-base mb-3 group-hover:text-[var(--gold)] transition-colors">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--dark)] py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-[var(--gold)] text-[10px] font-black tracking-[0.35em] mb-3 uppercase">Liên hệ trực tiếp</p>
          <a href="tel:0357651458" className="text-white text-3xl font-black hover:text-[var(--gold)] transition-colors">0357.651.458</a>
          <p className="text-white/30 text-sm my-2">vuluan123@gmail.com</p>
          <Link to="/bao-gia" className="btn-gold text-[11px] font-black tracking-[0.22em] px-10 py-3.5 rounded-sm inline-block mt-5">
            YÊU CẦU BÁO GIÁ
          </Link>
        </motion.div>
      </section>
    </>
  );
}