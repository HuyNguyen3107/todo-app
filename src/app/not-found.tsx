import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-gray-200 -z-10 blur-sm">
            404
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative">
          <div className="absolute -top-20 -left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
          <div
            className="absolute -top-16 -right-8 w-12 h-12 bg-purple-200 rounded-full opacity-50 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute -bottom-10 -left-6 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 relative z-10">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Trang không tồn tại
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Có vẻ như bạn đã lạc đường. Trang bạn đang tìm kiếm không thể được
            tìm thấy.
          </p>

          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-6xl animate-bounce">🔍</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span className="relative z-10">🏠 Về trang chủ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Additional Help Text */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Cần trợ giúp?
            </h3>
            <p className="text-gray-600 text-sm">
              Nếu bạn nghĩ đây là lỗi, vui lòng liên hệ với chúng tôi hoặc thử
              lại sau.
            </p>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
