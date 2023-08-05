import React from "react";
// icons
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-8 bg-accent">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-4 font-semibold">
            Theo dõi chúng tôi
          </h2>
          <p className="text-primary">
            Hãy là người đầu tiên nhận được những tin tức mới nhất về các sản
            phẩm, chương trình khuyến mãi và hơn thế nữa!
          </p>
        </div>
        {/* form */}
        <form
          className="w-full max-w-3xl mx-auto flex flex-col md:flex-row
        gap-5 my-8"
        >
          <input
            type="text"
            placeholder="Nhập địa chỉ email của bạn"
            className="input"
          />
          <button className="btn btn-accent bg-white min-w-[150px]">Gửi</button>
        </form>
        {/* links */}
        <div
          className="text-[15px] sm:text-base text-primary flex gap-x-4 sm:gap-x-6 capitalize
        max-w-max mx-auto mb-6"
        >
          <a href="#" className="hover:text-[#e00] transition-all">
            Chính sách hoàn trả
          </a>
          <a href="#" className="hover:text-[#e00] transition-all">
            Theo dõi đơn hàng
          </a>
          <a href="#" className="hover:text-[#e00] transition-all">
            Vận chuyển & Giao hàng
          </a>
        </div>
        {/* socials */}
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-8">
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div className="py-6 border-t border-t-black/50">
        <div className="container mx-auto">
          <div className="text-center text-sm text-primary">
            <span>&copy; Laptop Shop 2023. Điện thoại: 038 296 0875.</span>
            <br />
            <span>Email: gachip9090@gmail.com.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
