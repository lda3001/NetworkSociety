import "@/styles/facebook.css";
import { FaSearch, FaVideo, FaEllipsisH } from 'react-icons/fa';

export default function RightSidebar() {
  // Contacts list based on image
  const contacts = [
    'Lê Xuân Trường',
    'Nguyễn Anh Dương',
    'Nguyễn Việt Hưng',
    'Hà Việt Tuấn',
    'NguyễnĐoàn Long',
    'Phạm Văn Khánh',
    'Thông Nguyễn',
    'Nguyễn Đăng Long',
    'Vũ Văn Đức',
    'Phạm Tú',
    'Lê Khắc Thịnh',
    'Mai Phước Sang'
  ];

  return (
    <aside className="right-sidebar">
      {/* Sponsored Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-gray-500 text-[17px] mb-3">Được tài trợ</h3>
        
        <div className="space-y-4">
          {/* First ad */}
          <div className="flex items-center space-x-2">
            <div className="w-[112px] h-[112px] bg-gray-200 rounded-lg"></div>
            <div>
              <h4 className="font-medium text-[15px]">Create scenes from scratch</h4>
              <p className="text-[13px] text-gray-500">adobe.com</p>
            </div>
          </div>
          
          {/* Second ad */}
          <div className="flex items-center space-x-2">
            <div className="w-[112px] h-[112px] bg-gray-200 rounded-lg"></div>
            <div>
              <h4 className="font-medium text-[15px]">Đăng ký nhận tư vấn chi tiết (FREE)</h4>
              <p className="text-[13px] text-gray-500">anime.multischool.vn</p>
            </div>
          </div>
        </div>
      </div>

      {/* Birthdays Section */}
      <div className="pt-4 border-t mb-4">
        <h3 className="font-semibold text-gray-500 text-[17px] mb-2">Sinh nhật</h3>
        <div className="flex items-center">
          <div className="w-9 h-9 flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
              </svg>
            </div>
          </div>
          <p className="ml-2 text-[15px]">
            Hôm nay là sinh nhật của <span className="font-semibold">Vũ Minh Quyết</span> và <span className="font-semibold">Việt Khoa</span>
          </p>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="pt-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-500 text-[17px]">Người liên hệ</h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
              <FaVideo className="text-gray-500 text-lg" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
              <FaSearch className="text-gray-500 text-lg" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center">
              <FaEllipsisH className="text-gray-500 text-lg" />
            </button>
          </div>
        </div>

        {/* Contacts list */}
        <div className="space-y-1">
          {contacts.map((name, i) => (
            <div key={i} className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="ml-3 text-[15px]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
} 