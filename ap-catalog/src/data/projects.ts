export type Category =
  | 'Tất cả'
  | 'Nhà ở'
  | 'Văn phòng'
  | 'Chung cư'
  | 'Cà phê'
  | 'Biệt thự'
  | 'Căn hộ'
  | 'Nhà hàng'
  | 'Khác';

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  thumbnail: string;
  gallery: string[];
  description: string;
  area?: string;
  year?: string;
  location?: string;
}

export const CATEGORIES: Category[] = [
  'Tất cả', 'Nhà ở', 'Văn phòng', 'Chung cư', 'Cà phê', 'Biệt thự', 'Căn hộ', 'Nhà hàng', 'Khác',
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'can-ho-at-sky-garden',
    title: 'Căn hộ A&T Sky Garden',
    subtitle: '1 Phòng Ngủ',
    category: 'Căn hộ',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1782626248495/1782626264567-468702204.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1782626248495/1782626264567-468702204.jpg',
    ],
    description: 'Không gian căn hộ 1 phòng ngủ tại A&T Sky Garden được thiết kế tối giản, hiện đại với tông màu ấm áp, tối ưu diện tích.',
    area: '48m²',
    year: '2024',
    location: 'TP. Hồ Chí Minh',
  },
  {
    id: 2,
    slug: 'akari-binh-tan-3pn',
    title: 'Akari Bình Tân 3 PN',
    subtitle: '3 Phòng Ngủ',
    category: 'Căn hộ',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1780829473508/1780829877896-518174433.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1780829473508/1780829877896-518174433.jpg',
    ],
    description: 'Căn hộ 3 phòng ngủ tại Akari Bình Tân với phong cách Japandi, pha trộn giữa tối giản Nhật Bản và Scandinavian.',
    area: '88m²',
    year: '2024',
    location: 'Bình Tân, TP. HCM',
  },
  {
    id: 3,
    slug: 'the-opus-one-1pn',
    title: 'The Opus One 1 PN+',
    subtitle: '1 Phòng Ngủ +',
    category: 'Căn hộ',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1780763488677/1780763514115-318577647.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1780763488677/1780763514115-318577647.jpg',
    ],
    description: 'Thiết kế nội thất cao cấp tại The Opus One, tối ưu không gian với phong cách hiện đại sang trọng.',
    area: '56m²',
    year: '2024',
    location: 'Quận 9, TP. HCM',
  },
  {
    id: 4,
    slug: 'ca-phe-quan-2',
    title: 'Cà Phê Quận 2',
    subtitle: 'Không gian cà phê',
    category: 'Cà phê',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1780745106391/1780745235048-910340403.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1780745106391/1780745235048-910340403.jpg',
    ],
    description: 'Không gian cà phê tại Quận 2 với thiết kế mộc mạc, warm-tone, tạo cảm giác thân thiện và cuốn hút khách hàng.',
    area: '120m²',
    year: '2023',
    location: 'Quận 2, TP. HCM',
  },
  {
    id: 5,
    slug: 'van-phong-thiet-ke',
    title: 'Văn Phòng Thiết Kế',
    subtitle: 'Office space',
    category: 'Văn phòng',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1780744966502/1780744983961-897750038.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1780744966502/1780744983961-897750038.jpg',
    ],
    description: 'Văn phòng thiết kế với không gian mở, sáng tạo, kết hợp cây xanh và ánh sáng tự nhiên để tăng năng suất làm việc.',
    area: '200m²',
    year: '2023',
    location: 'Quận 1, TP. HCM',
  },
  {
    id: 6,
    slug: 'phong-ngu-nha-pho',
    title: 'Phòng Ngủ Nhà Phố',
    subtitle: 'Bedroom design',
    category: 'Nhà ở',
    thumbnail: 'https://apdesignarch.vn/images/du-an-1780744363279/1780744415058-633193489.jpg',
    gallery: [
      'https://apdesignarch.vn/images/du-an-1780744363279/1780744415058-633193489.jpg',
    ],
    description: 'Phòng ngủ nhà phố thiết kế hiện đại, tối ưu lưu trữ, tạo không gian nghỉ ngơi thư giãn tuyệt vời.',
    area: '25m²',
    year: '2023',
    location: 'TP. Hồ Chí Minh',
  },
];
