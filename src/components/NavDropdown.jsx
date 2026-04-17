import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDarkMode } from '../hooks/useDarkMode.jsx';

const dropdownMenuItems = [
  { icon: <SettingsOutlinedIcon className="!text-[20px]" />, label: 'Cài đặt và quyền riêng tư', hasArrow: true },
  { icon: <HelpOutlineOutlinedIcon className="!text-[20px]" />, label: 'Trợ giúp và hỗ trợ', hasArrow: true },
  { icon: <DarkModeOutlinedIcon className="!text-[20px]" />, label: 'Màn hình và trợ năng', hasArrow: true, page: 'display' },
  { icon: <FeedbackOutlinedIcon className="!text-[20px]" />, label: 'Đóng góp ý kiến', sublabel: 'CTRL B', hasArrow: false },
  { icon: <LogoutOutlinedIcon className="!text-[20px]" />, label: 'Đăng xuất', hasArrow: false },
];

export default function NavDropdown({ onClose }) {
  const [dropdownPage, setDropdownPage] = useState('main');
  const { mode: darkMode, setMode: setDarkMode } = useDarkMode();

  return (
    <div className="absolute right-0 top-[calc(100%+8px)] w-[320px] bg-white dark:bg-[#242526] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden z-50">
      
      {dropdownPage === 'main' && (
        <>
          <div className="p-2">
            <Link
              to="/profile/1"
              className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors no-underline"
              onClick={onClose}
            >
              <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center overflow-hidden shrink-0">
                <PersonIcon className="!text-[22px] text-[#65676b] dark:text-[#b0b3b8]" />
              </div>
              <span className="text-[15px] font-semibold text-[#1c1e21] dark:text-[#e4e6eb]">Hoàng Long</span>
            </Link>

            <hr className="my-1 border-[#ced0d4] dark:border-[#3a3b3c]" />

            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#f0f2f5] dark:bg-[#3a3b3c] hover:bg-[#e4e6eb] dark:hover:bg-[#4a4b4c] transition-colors border-none cursor-pointer text-[#1877f2] font-medium text-[14px]">
              <ManageAccountsOutlinedIcon className="!text-[18px]" />
              Xem tất cả trang cá nhân
            </button>
          </div>

          <hr className="border-[#ced0d4] dark:border-[#3a3b3c] mx-2" />

          <div className="p-2 flex flex-col gap-0.5">
            {dropdownMenuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors border-none bg-transparent cursor-pointer text-left"
                onClick={() => { item.page ? setDropdownPage(item.page) : onClose(); }}
              >
                <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0 text-[#1c1e21] dark:text-[#e4e6eb]">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-[#1c1e21] dark:text-[#e4e6eb] leading-tight">{item.label}</p>
                  {item.sublabel && <p className="text-[12px] text-[#65676b] dark:text-[#b0b3b8]">{item.sublabel}</p>}
                </div>
                {item.hasArrow && <ChevronRightIcon className="!text-[20px] text-[#65676b] dark:text-[#b0b3b8] shrink-0" />}
              </button>
            ))}
          </div>

          <hr className="border-[#ced0d4] dark:border-[#3a3b3c] mx-2" />

          <div className="px-4 py-3">
            <p className="text-[11px] text-[#65676b] dark:text-[#b0b3b8] leading-relaxed">
              Quyền riêng tư · Điều khoản · Quảng cáo · Lựa chọn quảng cáo ▶ · Cookie · Xem thêm
            </p>
            <p className="text-[11px] text-[#65676b] dark:text-[#b0b3b8] mt-0.5">Meta © 2025</p>
          </div>
        </>
      )}

      {dropdownPage === 'display' && (
        <>
          <div className="flex items-center gap-2 px-2 pt-3 pb-1">
            <button
              onClick={() => setDropdownPage('main')}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#e4e6eb] dark:hover:bg-[#3a3b3c] transition-colors border-none bg-transparent cursor-pointer shrink-0"
            >
              <ArrowBackIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
            </button>
            <h2 className="text-[17px] font-bold text-[#1c1e21] dark:text-[#e4e6eb] m-0">Màn hình và trợ năng</h2>
          </div>

          <div className="px-4 py-3">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
                <DarkModeOutlinedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
              </div>
              <p className="text-[15px] font-bold text-[#1c1e21] dark:text-[#e4e6eb]">Chế độ tối</p>
            </div>
            <p className="text-[13px] text-[#65676b] dark:text-[#b0b3b8] mb-3 leading-snug">
              Điều chỉnh giao diện của Facebook để giảm độ chói và cho đôi mắt được nghỉ ngơi.
            </p>

            <hr className="border-[#ced0d4] dark:border-[#3a3b3c] mb-3" />

            {[
              { value: 'off', label: 'Tắt' },
              { value: 'on', label: 'Bật' },
              { value: 'auto', label: 'Tự động', desc: 'Chúng tôi sẽ tự động điều chỉnh màn hình theo cài đặt hệ thống trên thiết bị của bạn.' },
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDarkMode(opt.value)}
                className="w-full flex items-center justify-between px-1 py-2.5 border-none bg-transparent cursor-pointer text-left hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-lg transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-[#1c1e21] dark:text-[#e4e6eb]">{opt.label}</p>
                  {opt.desc && <p className="text-[13px] text-[#65676b] dark:text-[#b0b3b8] leading-snug mt-0.5">{opt.desc}</p>}
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                  darkMode === opt.value
                    ? 'border-[#1877f2] bg-[#1877f2]'
                    : 'border-[#65676b] dark:border-[#b0b3b8] bg-white dark:bg-[#3a3b3c]'
                }`}>
                  {darkMode === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
