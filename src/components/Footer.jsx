import React from 'react'

export default function Footer() {
	return (
		<div>
			<footer className="border-t border-[#dadde1] py-4 px-10 mt-2 text-center">
				<div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-3">
					{['Tiếng Việt', 'English (UK)', '中文(台灣)', '한국어', '日本語', 'Français (France)', 'ภาษาไทย', 'Ngôn ngữ khác...'].map((lang) => (
						<a key={lang} href="#" className="text-[#8a8d91] text-xs hover:underline">{lang}</a>
					))}
				</div>

				<div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-1">
					{['Đăng ký', 'Đăng nhập', 'Messenger', 'Facebook Lite', 'Video', 'Meta Pay', 'Cửa hàng trên Meta', 'Meta Quest', 'Ray-Ban Meta', 'Meta AI', 'Instagram', 'Threads'].map((item) => (
						<a key={item} href="#" className="text-[#8a8d91] text-xs hover:underline">{item}</a>
					))}
				</div>

				<div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-1">
					{['Chính sách quyền riêng tư', 'Trung tâm quyền riêng tư', 'Giới thiệu', 'Tạo quảng cáo', 'Tạo Trang', 'Nhà phát triển', 'Tuyển dụng', 'Cookie', 'Lựa chọn quảng cáo'].map((item) => (
						<a key={item} href="#" className="text-[#8a8d91] text-xs hover:underline">{item}</a>
					))}
				</div>

				<div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-2">
					{['Điều khoản', 'Trợ giúp', 'Tải thông tin liên hệ lên & đối tượng không phải người dùng'].map((item) => (
						<a key={item} href="#" className="text-[#8a8d91] text-xs hover:underline">{item}</a>
					))}
				</div>

				<p className="text-[#8a8d91] text-xs">Meta © 2026</p>
			</footer>
		</div>
	)
}
