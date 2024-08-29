import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaPinterestP, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div>
      <div className="absolute bottom-0 h-16 w-full text-center">
        <footer className="bg-[#3C3D37] p-5 mt-auto text-white flex justify-around">
          <div className="text-[12px]">
            <h1 className="text-xl mb-5">Information</h1>
            <p className="mb-3">T&Cs</p>
            <p className="mb-3">Shipping Policy</p>
            <p className="mb-3">Private Policy</p>
            <p className="mb-3">Exchange/Return</p>
            <p className="mb-3">Dilivery</p>
            <p className="mb-3">FQAs</p>
            <p className="mb-3">Help</p>
            <p className="mb-3">1-345-23456-345</p>
            <p>1-5436-34-23542</p>
          </div>
          <div className="text-[12px]">
            <h1 className="text-xl mb-5">Product</h1>
            <p className="mb-3">Men</p>
            <p className="mb-3">Women</p>
            <p className="mb-3">Electronic</p>
            <p>Jewelleris</p>
          </div>
          <div className="text-3xl">
            <h1 className="text-xl mb-5">Follow us</h1>
            <p className="flex justify-around">
              <BiLogoInstagram />
              <BiLogoFacebook />
              <FaXTwitter />
              <FaPinterestP />
              <BiLogoTiktok />
              <BiLogoYoutube />
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-3">Stay in touch with us</h1>
            <input
              type="text"
              placeholder="Your Email"
              className="pl-2 mb-8 bg-transparent border-[1px] border-white rounded-lg"
            />
            <div className="text-[#dedede]">
              &copy; 2024 GoTo, Inc. All Rights Reserved. Terms, Privacy &
              Accessibility
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
