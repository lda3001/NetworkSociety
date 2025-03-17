import "@/styles/facebook.css";
import { FaGlobe, FaEllipsisH, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

interface PostProps {
  userName: string;
  timeAgo: string;
  content: string;
  imageUrl?: string;
  reactions?: number;
}

export default function Post({ userName, timeAgo, content, imageUrl, reactions }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-4">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="ml-2">
              <div className="font-semibold text-[15px]">{userName}</div>
              <div className="flex items-center text-[13px] text-gray-500">
                <span>{timeAgo}</span>
                <span className="mx-1">·</span>
                <FaGlobe className="text-xs" />
              </div>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <FaEllipsisH className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-[15px]">{content}</p>
      </div>

      {/* Post Image */}
      {imageUrl && (
        <div className="mb-2">
          <img src={imageUrl} alt="Post content" className="w-full" />
        </div>
      )}

      {/* Reactions Count */}
      {reactions && (
        <div className="px-4 py-2 flex items-center border-t">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <FaThumbsUp className="text-white text-xs" />
          </div>
          <span className="text-[13px] text-gray-500 ml-2">{reactions}</span>
        </div>
      )}

      {/* Post Actions */}
      <div className="px-4 pb-2">
        <div className="flex items-center border-t pt-1">
          <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
            <FaThumbsUp className="text-gray-500 mr-2" />
            <span className="text-[15px] text-gray-600">Thích</span>
          </button>
          <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
            <FaComment className="text-gray-500 mr-2" />
            <span className="text-[15px] text-gray-600">Bình luận</span>
          </button>
          <button className="flex items-center justify-center flex-1 hover:bg-gray-100 py-2 rounded-lg">
            <FaShare className="text-gray-500 mr-2" />
            <span className="text-[15px] text-gray-600">Chia sẻ</span>
          </button>
        </div>
      </div>
    </div>
  );
} 