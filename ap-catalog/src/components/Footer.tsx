import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2a2420] text-[#b5a898] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-[#8b7355] flex items-center justify-center font-bold text-xl text-white tracking-tight">
              VL
            </div>
            <div>
              <p className="text-white font-semibold text-sm tracking-widest">NGUYỄN VŨ LUÂN</p>
              <p className="text-[10px] tracking-widest opacity-60 uppercase">Real Estate Catalog</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed opacity-70">
            Website catalog bất động sản cá nhân — Lưu trữ & giới thiệu dự án.
          </p>
        </div>

        {/* Dịch vụ */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest mb-4 uppercase">
            Dịch vụ của chúng tôi
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/du-an" className="hover:text-white transition-colors">Thiết kế nội ngoại thất</Link></li>
            <li><Link to="/du-an" className="hover:text-white transition-colors">Thi công nội ngoại thất</Link></li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest mb-4 uppercase">
            Hỗ trợ khách hàng
          </h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Chính sách thanh toán</a></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-widest mb-4 uppercase">
            Thông tin liên hệ
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2">
              <Phone size={13} />
              <a href="tel:0357651458" className="hover:text-white transition-colors">0357.651.458</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={13} />
              <a href="mailto:vuluan123@gmail.com" className="hover:text-white transition-colors">
                vuluan123@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 mt-3">
              <a
                href="https://www.facebook.com/vuluan.nguyen.5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-4 border-t border-[#3d342d] text-center text-xs opacity-50">
        Bản quyền © 2025 Nguyễn Vũ Luân. All rights reserved.
      </div>
    </footer>
  );
}
