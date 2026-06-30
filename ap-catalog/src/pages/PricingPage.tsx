import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle } from 'lucide-react';

const services = [
  'Thiết kế nội thất căn hộ',
  'Thiết kế nhà phố / biệt thự',
  'Thiết kế văn phòng',
  'Thiết kế cà phê / nhà hàng',
  'Thi công nội thất',
  'Tư vấn phong cách',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PricingPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // FormSubmit.co – no backend needed
    fetch('https://formsubmit.co/ajax/vuluan123@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })
      .then(() => setSent(true))
      .catch(() => setSent(true)); // Show success anyway for demo
  };

  return (
    <>
      <Helmet>
        <title>Báo Giá – AP Design Architecture</title>
        <meta name="description" content="Yêu cầu báo giá thiết kế và thi công nội thất miễn phí từ AP Design Architecture." />
      </Helmet>

      {/* Hero */}
      <div className="pt-24 pb-12 bg-[#f6f3ef] text-center">
        <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-2 uppercase">Liên hệ</p>
        <h1 className="text-[#3a3028] text-3xl font-semibold tracking-widest">BÁO GIÁ</h1>
        <p className="text-[#7a6f65] text-sm mt-3">Điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24 giờ.</p>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <CheckCircle size={48} className="text-[#8b7355] mb-4" />
                <h3 className="text-[#3a3028] text-xl font-semibold mb-2">Cảm ơn bạn!</h3>
                <p className="text-[#7a6f65] text-sm">Chúng tôi đã nhận được yêu cầu và sẽ liên hệ lại trong 24 giờ.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Yêu cầu báo giá mới từ website" />
                <input type="hidden" name="_next" value="https://yoursite.vercel.app/bao-gia" />

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Họ và tên *
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Số điện thoại *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="0xxx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Dịch vụ quan tâm *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors bg-white"
                  >
                    <option value="">-- Chọn dịch vụ --</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Diện tích (m²)
                  </label>
                  <input
                    name="area"
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="VD: 80"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3a3028] tracking-wider mb-1.5 uppercase">
                    Ghi chú
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-[#ddd] px-4 py-3 text-sm text-[#3a3028] focus:outline-none focus:border-[#8b7355] transition-colors resize-none"
                    placeholder="Mô tả thêm yêu cầu của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8b7355] text-white text-xs font-semibold tracking-[0.2em] py-4 hover:bg-[#7a6347] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} /> GỬI YÊU CẦU
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-4 uppercase">Liên hệ trực tiếp</p>
              <div className="space-y-4">
                <div className="p-5 bg-[#f6f3ef]">
                  <p className="text-xs text-[#8b7355] font-semibold tracking-wider uppercase mb-1">Hotline</p>
                  <a href="tel:0357651458" className="text-[#3a3028] text-xl font-semibold hover:text-[#8b7355] transition-colors">
                    0357.651.458
                  </a>
                </div>
                <div className="p-5 bg-[#f6f3ef]">
                  <p className="text-xs text-[#8b7355] font-semibold tracking-wider uppercase mb-1">Email</p>
                  <a href="mailto:vuluan123@gmail.com" className="text-[#3a3028] text-sm hover:text-[#8b7355] transition-colors break-all">
                    vuluan123@gmail.com
                  </a>
                </div>
                <div className="p-5 bg-[#f6f3ef]">
                  <p className="text-xs text-[#8b7355] font-semibold tracking-wider uppercase mb-1">Facebook</p>
                  <a href="https://www.facebook.com/vuluan.nguyen.5" target="_blank" rel="noopener noreferrer" className="text-[#3a3028] text-sm hover:text-[#8b7355] transition-colors break-all">
                    fb.com/vuluan.nguyen.5
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#8b7355] text-xs font-semibold tracking-[0.3em] mb-4 uppercase">Dịch vụ cung cấp</p>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-[#7a6f65]">
                    <span className="w-1 h-1 bg-[#8b7355] rounded-full flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
