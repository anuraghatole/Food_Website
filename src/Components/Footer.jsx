function Footer() {
  return (
    <>
      <div className="w-full bg-black text-white py-8">
        <div className="flex flex-wrap justify-around md:justify-between mt-8 pt-10">
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              Best<span className="font-bold">Eats</span>
            </h1>
            <p className="text-[18px] mb-1 mt-3 text-gray-400">
              © 2024 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-semibold mb-3 mt-2">Company</p>
            <p className="text-[18px] mb-1 text-gray-400">About</p>
            <p className="text-[18px] mb-1 text-gray-400">Careers</p>
            <p className="text-[18px] mb-1 text-gray-400">Team</p>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-semibold mt-2 mb-3">Contact us</p>
            <p className="text-[18px] mb-1 text-gray-400">Help & Support</p>
            <p className="text-[18px] mb-1 text-gray-400">Partner with Us</p>
            <p className="text-[18px] mb-1 text-gray-400">Ride with Us</p>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-semibold mt-2 mb-3">Legal</p>
            <p className="text-[18px] mb-1 text-gray-400">Terms & Conditions</p>
            <p className="text-[18px] mb-1 text-gray-400">Cookie Policy</p>
            <p className="text-[18px] mb-1 text-gray-400">Privacy Policy</p>
            <p className="text-[18px] mb-1 text-gray-400">Investor Relations</p>
          </div>

          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-semibold mt-2 mb-3">We Deliver to:</p>
            <p className="text-[18px] mb-1 text-gray-400">Bangalore</p>
            <p className="text-[18px] mb-1 text-gray-400">Gurgaon</p>
            <p className="text-[18px] mb-1 text-gray-400">Delhi</p>
            <p className="text-[18px] mb-1 text-gray-400">Hyderabad</p>
            <p className="text-[18px] mb-1 text-gray-400">Nagpur</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
