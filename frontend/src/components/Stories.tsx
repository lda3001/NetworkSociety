import "@/styles/facebook.css";
import { FaPlus } from "react-icons/fa";

export default function Stories() {
  // Story data with names matching the image
  const stories = [
    { name: "Hà Việt Tuấn" },
    { name: "Doanh" },
    { name: "Võ Thị Linh" },
    { name: "Linh Đoàn" },
    { name: "Thu Đoàn" }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex space-x-2 overflow-x-auto">
        {/* Create Story */}
        <div className="flex-shrink-0 w-[112px] h-[200px] rounded-lg overflow-hidden cursor-pointer bg-white shadow border relative">
          <div className="h-2/3 bg-gray-100">
            <div className="h-full flex items-end justify-center pb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="h-1/3 flex items-center justify-center flex-col">
            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-white">
              <FaPlus className="text-white text-xs" />
            </div>
            <p className="text-sm font-medium text-center mt-4">Tạo tin</p>
          </div>
        </div>

        {/* Stories */}
        {stories.map((story, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[112px] h-[200px] rounded-lg bg-gray-200 relative cursor-pointer overflow-hidden"
          >
            <div className="absolute top-2 left-2 w-9 h-9 rounded-full border-4 border-blue-500 bg-gray-300 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-sm font-medium">{story.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 