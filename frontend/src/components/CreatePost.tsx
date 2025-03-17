import "@/styles/facebook.css";
import { FaVideo, FaCamera, FaRegSmile } from 'react-icons/fa';

export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg shadow p-3 mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <input
          type="text"
          placeholder="Anh ơi, bạn đang nghĩ gì thế?"
          className="flex-1 bg-[#F0F2F5] rounded-full px-4 py-2 text-[15px] outline-none cursor-pointer"
        />
      </div>
      
      <div className="flex justify-between mt-3 pt-3 border-t">
        <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
          <FaVideo className="text-[#F3425F] text-xl mr-2" />
          <span className="text-[15px] text-gray-600">Video trực tiếp</span>
        </button>
        <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
          <FaCamera className="text-[#45BD62] text-xl mr-2" />
          <span className="text-[15px] text-gray-600">Ảnh/Video</span>
        </button>
        <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
          <FaRegSmile className="text-[#F7B928] text-xl mr-2" />
          <span className="text-[15px] text-gray-600">Thước phim</span>
        </button>
      </div>
    </div>
  );
} 