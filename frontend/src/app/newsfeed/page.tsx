'use client';
import { FaFacebook, FaSearch, FaHome, FaVideo, FaStore, FaGamepad, FaUsers } from 'react-icons/fa';
import { BsMessenger, BsBell, BsGrid3X3Gap } from 'react-icons/bs';
import { CreatePost, Stories, Post, LeftSidebar, RightSidebar } from '@/components';
import AuthCheck from '@/components/AuthCheck';

export default function NewsFeed() {
  return (
    <AuthCheck>
      <div className="min-h-screen bg-[#F0F2F5]">
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-1">
            {/* Left Section */}
            <div className="flex items-center">
              <FaFacebook className="text-blue-500 text-4xl" />
              <div className="ml-2 flex items-center bg-[#F0F2F5] rounded-full px-3 py-2">
                <FaSearch className="text-gray-600 text-lg" />
                <input
                  type="text"
                  placeholder="Tìm kiếm trên Facebook"
                  className="ml-2 bg-transparent outline-none w-60"
                />
              </div>
            </div>

            {/* Center Section - Navigation Icons */}
            <div className="flex -ml-32">
              <div className="px-10 py-1 border-b-4 border-blue-500">
                <FaHome className="text-blue-500 text-[28px]" />
              </div>
              <div className="px-10 py-1">
                <FaVideo className="text-gray-500 text-[28px]" />
              </div>
              <div className="px-10 py-1">
                <FaStore className="text-gray-500 text-[28px]" />
              </div>
              <div className="px-10 py-1">
                <FaUsers className="text-gray-500 text-[28px]" />
              </div>
              <div className="px-10 py-1">
                <FaGamepad className="text-gray-500 text-[28px]" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full bg-[#E4E6EB] flex items-center justify-center hover:bg-gray-200">
                <BsGrid3X3Gap className="text-xl" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#E4E6EB] flex items-center justify-center hover:bg-gray-200">
                <BsMessenger className="text-xl" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#E4E6EB] flex items-center justify-center hover:bg-gray-200">
                <BsBell className="text-xl" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                {/* Profile Picture */}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-14 flex">
          {/* Left Sidebar */}
          <div className="w-[360px] fixed h-screen overflow-y-auto">
            <LeftSidebar />
          </div>

          {/* Main Feed */}
          <div className="flex-1 ml-[360px] mr-[360px]">
            <div className="max-w-[590px] mx-auto pt-4 px-4">
              {/* Stories */}
              <Stories />

              {/* Create Post */}
              <CreatePost />

              {/* Posts */}
              <Post
                userName="Đại Học Vinh"
                timeAgo="3 giờ"
                content="Anh chị em bên đồ cường nhớ bạn cùng góp ý này ra nhé❤️ scam, nghèo cả họ thực đấy, cái vụ nè."
                imageUrl="/images/church-post.jpg"
              />

              <Post
                userName="Vũ Văn Đức"
                timeAgo="5 giờ"
                content="Hôm nay là một ngày tuyệt vời! 🎉"
                reactions={14}
              />

              <Post
                userName="Lê Xuân Trường"
                timeAgo="12 giờ"
                content="Mọi người ơi, ai có kinh nghiệm về chủ đề này không ạ? Cho mình xin ý kiến với."
                reactions={5}
              />

              <Post
                userName="Nguyễn Việt Hưng"
                timeAgo="1 ngày"
                content="Chuyến đi du lịch cuối tuần vừa rồi thật tuyệt!"
                imageUrl="/images/travel.jpg"
                reactions={32}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-[360px] fixed right-0 h-screen overflow-y-auto">
            <RightSidebar />
          </div>
        </div>
      </div>
    </AuthCheck>
  );
} 