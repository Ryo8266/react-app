import React, { useState, useRef, useEffect } from 'react'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import facebookLogo from '../assets/Facebook_f_logo_(2019).svg';
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const navItems = [
  { icon: <HomeFilledIcon className="!text-[26px]" />, path: '/' },
  { icon: <PeopleAltOutlinedIcon className="!text-[26px]" />, path: '/friends' },
  { icon: <OndemandVideoOutlinedIcon className="!text-[26px]" />, path: '/watch' },
  { icon: <StorefrontOutlinedIcon className="!text-[26px]" />, path: '/marketplace' },
  { icon: <SportsEsportsOutlinedIcon className="!text-[26px]" />, path: '/gaming' },
];

export default function NavBar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-[#242526] shadow-md dark:shadow-none dark:border-b dark:border-[#3a3b3c] h-14 flex items-center justify-between px-3 gap-2">

      <div className="flex items-center gap-2 flex-1">
        <Link to="/"><img src={facebookLogo} alt="Facebook" className="w-10 h-10" /></Link>

        <div className="hidden lg:flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#3a3b3c] rounded-full px-3 py-2 cursor-pointer">
          <SearchIcon className="!text-[18px] text-[#65676b] dark:text-[#b0b3b8]" />
          <input
            type="text"
            placeholder="Tìm kiếm trên Facebook"
            className="bg-transparent border-none outline-none text-sm text-[#1c1e21] dark:text-[#e4e6eb] w-44 placeholder:text-[#65676b] dark:placeholder:text-[#b0b3b8]"
          />
        </div>

        <div className="flex lg:hidden items-center justify-center bg-[#f0f2f5] dark:bg-[#3a3b3c] rounded-full w-10 h-10 cursor-pointer hover:bg-[#d8dadf] dark:hover:bg-[#4a4b4c] transition-colors">
          <SearchIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
        </div>
      </div>

      <div className="flex items-center justify-center shrink-0 gap-1">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`
                relative flex items-center justify-center h-12 rounded-lg transition-colors
                w-10 sm:w-12 md:w-16 lg:w-20
                ${index >= 3 ? 'hidden sm:flex' : 'flex'}
                ${isActive
                  ? 'text-[#1877f2]'
                  : 'text-[#65676b] dark:text-[#b0b3b8] hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c]'
                }
              `}
            >
              {item.icon}
              {isActive && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1877f2] rounded-t-sm" />}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 flex-1 justify-end">

        <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-[#d8dadf] dark:hover:bg-[#4a4b4c] transition-colors text-[#1c1e21] dark:text-[#e4e6eb] border-none cursor-pointer">
          <AppsRoundedIcon className="!text-[20px]" />
        </button>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-[#d8dadf] dark:hover:bg-[#4a4b4c] transition-colors text-[#1c1e21] dark:text-[#e4e6eb] border-none cursor-pointer">
          <ChatBubbleRoundedIcon className="!text-[20px]" />
        </button>

        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-[#d8dadf] dark:hover:bg-[#4a4b4c] transition-colors text-[#1c1e21] dark:text-[#e4e6eb] border-none cursor-pointer">
          <NotificationsRoundedIcon className="!text-[20px]" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <div className="flex items-center gap-0.5 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center overflow-hidden">
              <PersonIcon className="!text-[24px] text-[#65676b] dark:text-[#b0b3b8]" />
            </div>
            <ArrowDropDownIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
          </div>

          {dropdownOpen && <NavDropdown onClose={() => setDropdownOpen(false)} />}
        </div>
      </div>
    </div>
  );
}
