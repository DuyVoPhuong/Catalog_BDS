import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet-async';

const steps = [
  {
    icon: 'https://apdesignarch.vn/images/trang-chu/y-tuong.png',
    title: 'Ý TƯỞNG',
    heading: 'Từ điều bạn mong\nThành nơi bạn sống',
    desc: 'AP Design Architecture khởi đầu từ việc lắng nghe bạn. Mỗi ý tưởng được phát triển thành không gian sống chuẩn mực, độc bản và đúng chất riêng. Chúng tôi giúp bạn tối ưu chi phí, thời gian và đạt được công trình bền vững.',
  },
  {
    icon: 'https://apdesignarch.vn/images/trang-chu/trien-khai.png',
    title: 'TRIỂN KHAI',
    heading: 'Hiện thực hoá ý tưởng\nbằng giải pháp rõ ràng',
    desc: 'Từ ý tưởng, chúng tôi phát triển bản vẽ kỹ thuật chi tiết, đảm bảo thi công chính xác và hiệu quả. Kỹ thuật tại AP Design Architecture không làm mất đi sự tinh tế của thiết kế, mà biến nó thành trình khả thi, tiết kiệm chi phí và đúng tiến độ.',
  },
  {
    icon: 'https://apdesignarch.vn/images/trang-chu/thi-cong.png',
    title: 'THI CÔNG',
    heading: 'Nơi ý tưởng\nchạm vào hiện thực',
    desc: 'AP Design Architecture biến ý tưởng thành công trình thực tế với đội ngũ thi công lành nghề và giám sát chặt chẽ. Mỗi vật liệu được chọn lọc, mỗi chi tiết hoàn thiện tỉ mỉ để công trình đúng thiết kế, đúng tiến độ và bền vững theo thời gian.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>AP Design Architecture – Thiết kế & Thi công Nội Thất</title>
        <meta name="description" content="AP Design Architecture – Thiết kế và thi công nội ngoại thất. Không gian giành cho bạn, khác biệt thuộc về bạn." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-20 overflow-hidden">
        <img
          src="https://apdesignarch.vn/images/trang-chu/main.webp"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#c9b99a] text-xs font-semibold tracking-[0.3em] mb-3 uppercase">
              AP . Design Architecture
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-2">
              THIẾT KẾ THI CÔNG NỘI THẤT
            </h1>
            <p className="text-white/80 text-lg md:text-xl italic mt-3 mb-8">
              "Không gian giành cho bạn<br />Khác biệt thuộc về bạn"
            </p>
            <Link
              to="/du-an"
              className="inline-block border border-white text-white text-xs font-semibold tracking-[0.2em] px-8 py-3 hover:bg-white hover:text-[#3a3028] transition-all duration-300"
            >
              SEE MORE →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-[#f6f3ef] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <img src={step.icon} alt={step.title} className="h-24 w-24 object-contain mb-6 opacity-80" />
                <p className="text-[#8b7355] text-xs font-semibold tracking-[0.25em] mb-3">{step.title}</p>
                <h3 className="text-[#3a3028] text-xl font-semibold leading-snug mb-4 whitespace-pre-line">
                  {step.heading}
                </h3>
                <p className="text-[#7a6f65] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-2 uppercase">Portfolio</p>
            <h2 className="text-[#3a3028] text-3xl font-semibold tracking-wide">CÔNG TRÌNH NỔI BẬT</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard
                  slug={p.slug}
                  title={p.title}
                  subtitle={p.subtitle}
                  thumbnail={p.thumbnail}
                  category={p.category}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/du-an"
              className="inline-block border border-[#8b7355] text-[#8b7355] text-xs font-semibold tracking-[0.2em] px-8 py-3 hover:bg-[#8b7355] hover:text-white transition-all duration-300"
            >
              XEM TẤT CẢ DỰ ÁN →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#3a3028] py-16 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[#c9b99a] text-xs font-semibold tracking-[0.3em] mb-3 uppercase">Bắt đầu ngay hôm nay</p>
          <h2 className="text-white text-3xl font-light mb-6">Nhận báo giá thiết kế miễn phí</h2>
          <Link
            to="/bao-gia"
            className="inline-block bg-[#8b7355] text-white text-xs font-semibold tracking-[0.2em] px-10 py-3.5 hover:bg-[#7a6347] transition-colors duration-300"
          >
            BÁO GIÁ NGAY
          </Link>
        </motion.div>
      </section>
    </>
  );
}
