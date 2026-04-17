import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import { Link } from 'react-router-dom'

const friendRequests = [
  { id: 1, name: 'Friend 1', time: '23 giờ' },
]

const contacts = [
  { id: 1, name: 'Meta AI', isMetaAI: true, online: true },
  { id: 2, name: 'Friend 1', online: true },
  { id: 3, name: 'Friend 2', online: false },
  { id: 4, name: 'Friend 3', online: false },
  { id: 5, name: 'Friend 4', online: false },
  { id: 6, name: 'Friend 5', online: false },
  { id: 7, name: 'Friend 6', online: false },
  { id: 8, name: 'Friend 7', online: false },
  { id: 9, name: 'Friend 8', online: false },
  { id: 10, name: 'Friend 9', online: false },
  { id: 11, name: 'Friend 10', online: false },
  { id: 12, name: 'Friend 11', online: false },
  { id: 13, name: 'Friend 12', online: false },
  { id: 14, name: 'Friend 13', online: false },
  { id: 15, name: 'Friend 14', online: false },
]

function Avatar({ name, isMetaAI, size = 'md' }) {
  const sizeClass = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10'
  const iconSize = size === 'sm' ? '!text-[18px]' : '!text-[22px]'

  if (isMetaAI) {
    return (
      <div className={`${sizeClass} rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shrink-0`}>
        <AutoAwesomeOutlinedIcon className={`${iconSize} text-white`} />
      </div>
    )
  }

  return (
    <div className={`${sizeClass} rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center overflow-hidden shrink-0`}>
      <PersonIcon className={`${iconSize} text-[#65676b] dark:text-[#b0b3b8]`} />
    </div>
  )
}

export default function RightBar() {
  return (
    <div className="flex-2 hidden xl:flex flex-col w-[280px] 2xl:w-[340px] shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto pb-4 pt-3 px-3 hover-scrollbar">

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 px-2">
          <span className="text-[17px] font-bold text-[#1c1e21] dark:text-[#e4e6eb]">Lời mời kết bạn</span>
          <Link to="/friends" className="text-[15px] font-medium text-[#1877f2] hover:underline no-underline">
            Xem tất cả
          </Link>
        </div>

        {friendRequests.map((req) => (
          <div key={req.id} className="rounded-lg p-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center overflow-hidden shrink-0">
                <PersonIcon className="!text-[32px] text-[#65676b] dark:text-[#b0b3b8]" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-semibold text-[#1c1e21] dark:text-[#e4e6eb]">{req.name}</p>
                  <span className="text-[12px] text-[#65676b] dark:text-[#b0b3b8]">{req.time}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 rounded-lg bg-[#1877f2] text-white text-[14px] font-medium hover:bg-[#166fe5] transition-colors border-none cursor-pointer">
                    Xác nhận
                  </button>
                  <button className="flex-1 py-1.5 rounded-lg bg-[#e4e6eb] dark:bg-[#3a3b3c] text-[#1c1e21] dark:text-[#e4e6eb] text-[14px] font-medium hover:bg-[#d8dadf] dark:hover:bg-[#4a4b4c] transition-colors border-none cursor-pointer">
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-1 px-2">
          <span className="text-[17px] font-bold text-[#1c1e21] dark:text-[#e4e6eb]">Người liên hệ</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#e4e6eb] dark:hover:bg-[#3a3b3c] transition-colors border-none bg-transparent cursor-pointer">
              <SearchOutlinedIcon className="!text-[18px] text-[#65676b] dark:text-[#b0b3b8]" />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#e4e6eb] dark:hover:bg-[#3a3b3c] transition-colors border-none bg-transparent cursor-pointer">
              <MoreHorizOutlinedIcon className="!text-[18px] text-[#65676b] dark:text-[#b0b3b8]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer"
            >
              <div className="relative shrink-0">
                <Avatar name={contact.name} isMetaAI={contact.isMetaAI} size="md" />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#31a24c] rounded-full border-2 border-white dark:border-[#18191a]" />
                )}
              </div>
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[15px] font-medium text-[#1c1e21] dark:text-[#e4e6eb] truncate">{contact.name}</span>
                {contact.isMetaAI && (
                  <span className="text-[#1877f2] text-[14px] shrink-0">✔</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
