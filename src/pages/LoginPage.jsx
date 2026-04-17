import React from 'react'
import LoginForm from '../components/LoginForm'
import pannel from '../assets/U45qBJmWVHU.webp'
import facebookLogo from '../assets/Facebook_f_logo_(2019).svg'
import Footer from '../components/Footer'

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-white flex flex-col">
			<div className="flex flex-1">
				<div className="flex-1 relative overflow-hidden">
					<img src={facebookLogo} alt="Facebook" className="w-14 h-14 absolute top-10 left-12 z-10" />

					<h1 className="absolute bottom-16 left-12 z-10 text-[3.5rem] font-black text-[#1c1e21] leading-[1.08] max-w-[420px]">
						Khám phá những điều{' '}
						<span className="text-[#1877F2]">bạn yêu thích.</span>
					</h1>

					<img
						src={pannel}
						alt="Facebook collage"
						className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 max-w-[700px] object-contain"
					/>
				</div>

				<div className="w-px bg-gray-200 self-stretch my-8" />

				<div className="w-[600px] shrink-0 flex items-center justify-center px-12 py-10">
					<LoginForm />
				</div>
			</div>

			<Footer />
		</div>
	)
}
