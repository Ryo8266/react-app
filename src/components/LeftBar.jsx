import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import EventOutlinedIcon from '@mui/icons-material/EventOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    label: 'Hoàng Long',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center overflow-hidden shrink-0">
        <PersonIcon className="!text-[22px] text-[#65676b] dark:text-[#b0b3b8]" />
      </div>
    ),
    path: '/profile/1',
  },
  {
    label: 'Meta AI',
    icon: (
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shrink-0">
        <AutoAwesomeOutlinedIcon className="!text-[18px] text-white" />
      </div>
    ),
    path: '/meta-ai',
  },
  {
    label: 'Bạn bè',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
        <PeopleAltOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/friends',
  },
  {
    label: 'Trang',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e7242a] flex items-center justify-center shrink-0">
        <FlagOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/pages',
  },
  {
    label: 'Đã lưu',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#7b40bf] flex items-center justify-center shrink-0">
        <BookmarkBorderOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/saved',
  },
  {
    label: 'Nhóm',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
        <GroupsOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/groups',
  },
  {
    label: 'Kỷ niệm',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
        <WatchLaterOutlinedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
      </div>
    ),
    path: '/memories',
  },
  {
    label: 'Thước phim',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
        <OndemandVideoOutlinedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
      </div>
    ),
    path: '/reels',
  },
]

const extraMenuItems = [
  {
    label: 'Bảng feed',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
        <DynamicFeedOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/feed',
  },
  {
    label: 'Chat với AI',
    icon: (
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 flex items-center justify-center shrink-0">
        <SmartToyOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/ai-chat',
  },
  {
    label: 'Chơi game',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#0064d1] flex items-center justify-center shrink-0">
        <SportsEsportsOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/gaming',
  },
  {
    label: 'Đơn đặt hàng và thanh toán',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#2d4d2f] flex items-center justify-center shrink-0">
        <ShoppingBagOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/orders',
  },
  {
    label: 'Hoạt động mới đây với quảng cáo',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
        <CampaignOutlinedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
      </div>
    ),
    path: '/ads-activity',
  },
  {
    label: 'Marketplace',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#0084ff] flex items-center justify-center shrink-0">
        <StorefrontOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/marketplace',
  },
  {
    label: 'Messenger',
    icon: (
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
        <ChatBubbleOutlineOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/messenger',
  },
  {
    label: 'Messenger Kids',
    icon: (
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shrink-0">
        <ChildCareOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/messenger-kids',
  },
  {
    label: 'Sinh nhật',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
        <CakeOutlinedIcon className="!text-[20px] text-[#e91e63]" />
      </div>
    ),
    path: '/birthdays',
  },
  {
    label: 'Sự kiện',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
        <EventOutlinedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
      </div>
    ),
    path: '/events',
  },
  {
    label: 'Trình quản lý quảng cáo',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center shrink-0">
        <BarChartOutlinedIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/ads-manager',
  },
  {
    label: 'Video chơi game',
    icon: (
      <div className="w-9 h-9 rounded-full bg-[#0064d1] flex items-center justify-center shrink-0">
        <SportsEsportsIcon className="!text-[20px] text-white" />
      </div>
    ),
    path: '/gaming-video',
  },
]

const shortcuts = [
  { label: 'Group 1', color: '#1a3c6e' },
  { label: 'Group 2', color: '#4a7c59' },
  { label: 'Group 3', color: '#c0392b' },
  { label: 'Group 4', color: '#1a1a2e' },
  { label: 'Group 5', color: '#e74c3c' },
]

const SHORTCUTS_COLLAPSED_COUNT = 5

export default function LeftBar() {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [shortcutsExpanded, setShortcutsExpanded] = useState(false)

  const visibleShortcuts = shortcutsExpanded ? shortcuts : shortcuts.slice(0, SHORTCUTS_COLLAPSED_COUNT)

  return (
    <div className="flex-2 hidden lg:flex flex-col w-[280px] xl:w-[360px] shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto pb-1 pt-0 px-2 hover-scrollbar">
      <div className="flex flex-col gap-0">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer no-underline text-[#1c1e21] dark:text-[#e4e6eb]"
          >
            {item.icon}
            <span className="text-[14px] font-medium">{item.label}</span>
          </Link>
        ))}

        {menuExpanded && extraMenuItems.map((item, index) => (
          <Link
            key={`extra-${index}`}
            to={item.path}
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer no-underline text-[#1c1e21] dark:text-[#e4e6eb]"
          >
            {item.icon}
            <span className="text-[14px] font-medium">{item.label}</span>
          </Link>
        ))}

        <button
          onClick={() => setMenuExpanded(!menuExpanded)}
          className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer w-full border-none bg-transparent text-left"
        >
          <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
            {menuExpanded
              ? <KeyboardArrowUpRoundedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
              : <KeyboardArrowDownRoundedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
            }
          </div>
          <span className="text-[14px] font-medium text-[#1c1e21] dark:text-[#e4e6eb]">
            {menuExpanded ? 'Ẩn bớt' : 'Xem thêm'}
          </span>
        </button>
      </div>

      <hr className="my-0.5 border-[#ced0d4] dark:border-[#3a3b3c]" />

      <div className="flex flex-col gap-0">
        <p className="text-[15px] font-bold text-[#1c1e21] dark:text-[#e4e6eb] px-2 py-0.5">Lối tắt của bạn</p>

        {visibleShortcuts.map((item, index) => (
          <Link
            key={index}
            to="#"
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer no-underline text-[#1c1e21] dark:text-[#e4e6eb]"
          >
            <div
              className="w-9 h-9 rounded-lg shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[14px] font-medium truncate">{item.label}</span>
          </Link>
        ))}

        <button
          onClick={() => setShortcutsExpanded(!shortcutsExpanded)}
          className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer w-full border-none bg-transparent text-left"
        >
          <div className="w-9 h-9 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center shrink-0">
            {shortcutsExpanded
              ? <KeyboardArrowUpRoundedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
              : <KeyboardArrowDownRoundedIcon className="!text-[20px] text-[#1c1e21] dark:text-[#e4e6eb]" />
            }
          </div>
          <span className="text-[14px] font-medium text-[#1c1e21] dark:text-[#e4e6eb]">
            {shortcutsExpanded ? 'Thu gọn' : 'Xem thêm'}
          </span>
        </button>
      </div>

    </div>
  )
}
