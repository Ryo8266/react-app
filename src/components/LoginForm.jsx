import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import metaLogo from '../assets/Meta_Platforms_Inc._logo.svg'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const emailHandel = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('')
  const passwordHandel = (e) => {
    setPassword(e.target.value)
  }

  const [errors, setErrors] = useState({})
  const handleSubmitForm = (event) => {
    event.preventDefault()

    let validErrors = {}

    if (!email) {
      validErrors.email = "Email không được để trống"
    }

    if (!password) {
      validErrors.password = "Password không được để trống"
    } else if (password.length < 8) {
      validErrors.password = "Password phải có ít nhất 8 kí tự"
    }

    setErrors(validErrors)
    console.log(email, password)
  }

  return (
    <div className="w-full">
      <h2 className="text-[#1c1e21] text-[1.5rem] font-normal mb-5">Đăng nhập vào Facebook</h2>

      <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
        <div>
          <input
            className="w-full border border-[#ccd0d5] rounded-lg px-3 py-3.5 text-base text-[#1c1e21] placeholder-[#90949c] focus:outline-none focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2]"
            type="email"
            name="email1"
            placeholder="Email hoặc số di động"
            value={email}
            onChange={emailHandel}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            className="w-full border border-[#ccd0d5] rounded-lg px-3 py-3.5 text-base text-[#1c1e21] placeholder-[#90949c] focus:outline-none focus:border-[#1877F2] focus:ring-1 focus:ring-[#1877F2]"
            type="password"
            name="password1"
            placeholder="Mật khẩu"
            value={password}
            onChange={passwordHandel}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1877F2] hover:bg-[#166fe5] active:bg-[#1464d8] text-white font-semibold py-2.5 rounded-full text-sm transition-colors mt-1"
        >
          Đăng nhập
        </button>
      </form>

      <div className="flex justify-center mt-3">
        <a
          href="/"
          className="w-full text-center bg-transparent hover:bg-[#f0f2f5] text-[#1c1e21] font-semibold py-2.5 rounded-full text-sm transition-colors"
        >
          Quên mật khẩu?
        </a>
      </div>

      <div className="border-t border-[#dadde1] my-5" />

      <div className="flex justify-center">
        <Link to="/registry" className="w-full">
          <button className="w-full border border-[#dadde1] text-[#1877F2] font-semibold py-2.5 rounded-full text-sm hover:bg-[#e7f3ff] transition-colors">
            Tạo tài khoản mới
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center mt-6">
        <img src={metaLogo} alt="Meta" className="h-4 object-contain opacity-60" />
      </div>
    </div>
  )
}
