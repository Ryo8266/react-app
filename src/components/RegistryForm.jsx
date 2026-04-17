import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MetaLogo from '../assets/Meta_Platforms_Inc._logo.svg'

export default function RegistryForm() {
  const [form, setForm] = useState({
    ho: '',
    ten: '',
    ngay: '',
    thang: '',
    nam: '',
    gioiTinh: '',
    lienHe: '',
    matKhau: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!form.ho) newErrors.ho = 'Vui lòng nhập họ'
    if (!form.ten) newErrors.ten = 'Vui lòng nhập tên'
    if (!form.ngay || !form.thang || !form.nam) newErrors.ngaySinh = 'Vui lòng chọn ngày sinh'
    if (!form.gioiTinh) newErrors.gioiTinh = 'Vui lòng chọn giới tính'
    if (!form.lienHe) newErrors.lienHe = 'Vui lòng nhập số điện thoại hoặc email'
    if (!form.matKhau) newErrors.matKhau = 'Vui lòng nhập mật khẩu'
    else if (form.matKhau.length < 8) newErrors.matKhau = 'Mật khẩu phải có ít nhất 8 ký tự'
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted', form)
    }
  }

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 px-4">
      <div className="w-full max-w-md">
        <button className="text-gray-500 mb-4 text-lg" onClick={() => window.history.back()}>&#8592;</button>

        <div className="mb-4">
          <img src={MetaLogo} alt="Meta" className="h-7" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Bắt đầu trên Facebook</h1>
        <p className="text-sm text-gray-600 mb-5">
          Hãy tạo tài khoản để kết nối với bạn bè, người thân và cộng đồng có chung sở thích.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Tên</label>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  name="ho"
                  placeholder="Họ"
                  value={form.ho}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                {errors.ho && <p className="text-red-500 text-xs mt-1">{errors.ho}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="ten"
                  placeholder="Tên"
                  value={form.ten}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
                {errors.ten && <p className="text-red-500 text-xs mt-1">{errors.ten}</p>}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-1 text-sm font-semibold text-gray-800 mb-1">
              Ngày sinh
            </label>
            <div className="flex gap-2">
              <select
                name="ngay"
                value={form.ngay}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-500 focus:outline-none focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Ngày</option>
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select
                name="thang"
                value={form.thang}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-500 focus:outline-none focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Tháng</option>
                {months.map(m => <option key={m} value={m}>Tháng {m}</option>)}
              </select>
              <select
                name="nam"
                value={form.nam}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-500 focus:outline-none focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Năm</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            {errors.ngaySinh && <p className="text-red-500 text-xs mt-1">{errors.ngaySinh}</p>}
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-1 text-sm font-semibold text-gray-800 mb-1">
              Giới tính
            </label>
            <div className="relative">
              <select
                name="gioiTinh"
                value={form.gioiTinh}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-500 focus:outline-none focus:border-blue-500 appearance-none bg-white"
              >
                <option value="">Chọn giới tính</option>
                <option value="nu">Nữ</option>
                <option value="nam">Nam</option>
                <option value="khac">Khác</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">&#8964;</span>
            </div>
            {errors.gioiTinh && <p className="text-red-500 text-xs mt-1">{errors.gioiTinh}</p>}
          </div>

          <div className="mb-1">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Số di động hoặc email</label>
            <input
              type="text"
              name="lienHe"
              placeholder="Số di động hoặc email"
              value={form.lienHe}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
            />
            {errors.lienHe && <p className="text-red-500 text-xs mt-1">{errors.lienHe}</p>}
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Bạn có thể nhận được thông báo của chúng tôi.{' '}
            <a href="#" className="text-blue-500 hover:underline">Tìm hiểu vì sao chúng tôi yêu cầu thông tin liên hệ của bạn</a>
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              placeholder="Mật khẩu"
              value={form.matKhau}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-blue-500"
            />
            {errors.matKhau && <p className="text-red-500 text-xs mt-1">{errors.matKhau}</p>}
          </div>

          <p className="text-xs text-gray-500 mb-4">
            Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.{' '}
            <a href="#" className="text-blue-500 hover:underline">Tìm hiểu thêm.</a>
          </p>
          <p className="text-xs text-gray-500 mb-5">
            Bằng việc nhấn vào Gửi, bạn đồng ý tạo tài khoản cũng như chấp thuận{' '}
            <a href="#" className="text-blue-500 hover:underline">Điều khoản</a>,{' '}
            <a href="#" className="text-blue-500 hover:underline">Chính sách quyền riêng tư</a> và{' '}
            <a href="#" className="text-blue-500 hover:underline">Chính sách cookie</a> của Facebook.
          </p>
          <p className="text-xs text-gray-500 mb-6">
            <a href="#" className="text-blue-500 hover:underline">Chính sách quyền riêng tư</a> mô tả các cách chúng tôi có thể dùng thông tin thu thập được khi bạn tạo tài khoản. Chẳng hạn, chúng tôi sử dụng thông tin này để cung cấp, cá nhân hóa và cải thiện các sản phẩm của mình, bao gồm quảng cáo.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-base transition-colors mb-3"
          >
            Gửi
          </button>
          <Link to="/login">
            <button
              type="button"
              className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-full text-base transition-colors"
            >
              Tôi có tài khoản rồi
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}
