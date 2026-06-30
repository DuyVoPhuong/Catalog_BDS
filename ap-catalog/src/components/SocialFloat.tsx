// Floating social buttons (Facebook, Zalo, Messenger)
export default function SocialFloat() {
  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      <a
        href="https://www.facebook.com/vuluan.nguyen.5"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="w-9 h-9 bg-[#1877f2] rounded flex items-center justify-center hover:scale-110 transition-transform shadow-md"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
      </a>
      <a
        href="tel:0357651458"
        title="Gọi điện"
        className="w-9 h-9 bg-[#25d366] rounded flex items-center justify-center hover:scale-110 transition-transform shadow-md"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>
      <a
        href="mailto:vuluan123@gmail.com"
        title="Email"
        className="w-9 h-9 bg-[#8b7355] rounded flex items-center justify-center hover:scale-110 transition-transform shadow-md"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
    </div>
  );
}
