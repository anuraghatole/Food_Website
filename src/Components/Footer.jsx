function Footer() {
  return (
    <>
      <div className=" w-full bg-black text-white h-64">
        <div className=" flex justify-around mt-8 pt-10">
          <div className="">
            <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
              Best<span className=" font-bold">Eats</span>
            </h1>
            <p className=" text-[18px] mb-1 mt-3 text-[gray]">
              © 2024 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div>
            <p className=" text-2xl font-semibold mb-3 mt-2">Company</p>
            <p className=" text-[18px] mb-1 text-[gray]">About</p>
            <p className=" text-[18px] mb-1 text-[gray]">Careers</p>
            <p className=" text-[18px] mb-1 text-[gray]">Team</p>
          </div>

          <div>
            <p className=" text-2xl font-semibold mt-2 mb-3">Contact us</p>
            <p className=" text-[18px] mb-1 text-[gray]">Help & Support</p>
            <p className=" text-[18px] mb-1 text-[gray]">Partner with Us</p>
            <p className=" text-[18px] mb-1 text-[gray]">Ride with Us</p>
          </div>

          <div>
            <p className=" text-2xl font-semibold mt-2 mb-3">Legal</p>
            <p className=" text-[18px] mb-1 text-[gray]">Terms & Conditions</p>
            <p className=" text-[18px] mb-1 text-[gray]">Cookie Plicy</p>
            <p className=" text-[18px] mb-1 text-[gray]">Privacy Policy</p>
            <p className=" text-[18px] mb-1 text-[gray]">Investor Relatios</p>
          </div>

          <div>
            <p className=" text-2xl font-semibold mt-2 mb-3">We Deliver to:</p>
            <p className=" text-[18px] mb-1 text-[gray]">Banglore</p>
            <p className=" text-[18px] mb-1 text-[gray]">Gurgaon</p>
            <p className=" text-[18px] mb-1 text-[gray]">Delhi</p>
            <p className=" text-[18px] mb-1 text-[gray]">Hydrabad</p>
            <p className=" text-[18px] mb-1 text-[gray]">Nagpur</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
