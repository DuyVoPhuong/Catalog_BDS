import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { title: 'Lắng nghe', desc: 'Mỗi dự án bắt đầu từ việc thấu hiểu nhu cầu và ước mơ của khách hàng.' },
  { title: 'Sáng tạo', desc: 'Mỗi thiết kế là một tác phẩm độc bản, phản ánh cá tính riêng của chủ nhân.' },
  { title: 'Chất lượng', desc: 'Vật liệu được chọn lọc kỹ càng, thi công tỉ mỉ và giám sát chặt chẽ.' },
  { title: 'Đúng hẹn', desc: 'Cam kết tiến độ, minh bạch chi phí, không phát sinh ngoài hợp đồng.' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Giới Thiệu – AP Design Architecture</title>
        <meta name="description" content="AP Design Architecture – Công ty thiết kế và thi công nội ngoại thất uy tín tại TP. Hồ Chí Minh." />
      </Helmet>

      {/* Hero */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://apdesignarch.vn/images/trang-chu/main.webp"
          alt="Giới thiệu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#c9b99a] text-xs tracking-[0.4em] uppercase mb-2">AP . Design Architecture</p>
            <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-widest">GIỚI THIỆU</h1>
          </div>
        </div>
      </div>

      {/* About content */}
      <section className="bg-[#f6f3ef] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-3 uppercase">Về chúng tôi</p>
            <h2 className="text-[#3a3028] text-3xl font-semibold leading-snug mb-6">
              Kiến tạo không gian sống<br />độc bản cho bạn
            </h2>
            <p className="text-[#7a6f65] leading-relaxed mb-4">
              AP Design Architecture là công ty chuyên thiết kế và thi công nội ngoại thất tại TP. Hồ Chí Minh. Chúng tôi phục vụ đa dạng loại hình: căn hộ, nhà phố, biệt thự, văn phòng, cà phê và nhà hàng.
            </p>
            <p className="text-[#7a6f65] leading-relaxed mb-8">
              Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, chúng tôi cam kết mang lại không gian sống chất lượng cao, tối ưu chi phí và hoàn thành đúng tiến độ.
            </p>
            <Link
              to="/du-an"
              className="inline-block border border-[#8b7355] text-[#8b7355] text-xs font-semibold tracking-[0.2em] px-8 py-3 hover:bg-[#8b7355] hover:text-white transition-all duration-300"
            >
              XEM DỰ ÁN →
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://apdesignarch.vn/images/trang-chu/thi-cong.png"
              alt="AP Design Architecture"
              className="w-full max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-2 uppercase">Giá trị cốt lõi</p>
            <h2 className="text-[#3a3028] text-3xl font-semibold">Cam kết của chúng tôi</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 border border-[#e8e0d5] hover:border-[#8b7355] transition-colors"
              >
                <div className="w-10 h-0.5 bg-[#8b7355] mx-auto mb-5" />
                <h3 className="text-[#3a3028] font-semibold mb-3">{v.title}</h3>
                <p className="text-[#7a6f65] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-[#3a3028] py-16 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[#c9b99a] text-xs tracking-[0.3em] mb-3 uppercase">Liên hệ</p>
          <h2 className="text-white text-2xl font-light mb-2">0357.651.458</h2>
          <p className="text-white/50 text-sm mb-6">vuluan123@gmail.com</p>
          <Link
            to="/bao-gia"
            className="inline-block bg-[#8b7355] text-white text-xs font-semibold tracking-[0.2em] px-10 py-3 hover:bg-[#7a6347] transition-colors"
          >
            YÊU CẦU BÁO GIÁ
          </Link>
        </motion.div>
      </section>
    </>
  );
}
