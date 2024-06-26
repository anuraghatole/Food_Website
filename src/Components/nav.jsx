function Nav() {
  return (
    <>
      <div className="bg-black text-white min-h-screen bg-[url('Images/Image.png')] bg-center bg-cover px-4 md:px-28 py-5 relative">
        <nav className="flex items-center flex-wrap justify-between">
          <img
            src="Images/logo.png"
            alt="Logo"
            className="w-24 md:w-40 cursor-pointer mb-4 md:mb-0"
          />
          <ul className="flex-1 text-center mb-4 md:mb-0 md:flex md:justify-center">
            <li className="list-none inline-block px-2 mx-2">
              <a href="">Home</a>
            </li>
            <li className="list-none inline-block px-2 mx-2">
              <a href="">About</a>
            </li>
            <li className="list-none inline-block px-2 mx-2">
              <a href="">Features</a>
            </li>
            <li className="list-none inline-block px-2 mx-2">
              <a href="">Contact us</a>
            </li>
            <li className="list-none inline-block px-2 mx-2">
              <a href="">More</a>
            </li>
          </ul>
          <img
            src="Images/cart.png"
            alt="Cart"
            className="w-6 md:w-8 cursor-pointer"
          />
        </nav>

        <div className="mt-20 md:mt-40 max-w-full md:max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-normal">
            Groceries <br />
            delivered in <span className="font-light">15 minutes</span>
          </h1>
          <p className="mt-4 md:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis,
            voluptas rem natus exercitationem veritatis delectus, perferendis
            quaerat magnam libero dignissimos ratione eligendi magni iste ea,
            accusantium dolores molestiae quod!
          </p>

          <div className="mt-6 md:mt-10 flex flex-wrap">
            <a
              className="bg-yellow-300 rounded-3xl py-2 px-4 md:py-3 md:px-8 font-medium inline-block mr-4 md:mr-8 text-black hover:bg-transparent hover:border-yellow-300 hover:text-white hover:border mb-4 md:mb-0"
              href=""
            >
              Order Now
            </a>
            <a
              className="bg-yellow-300 rounded-3xl py-2 px-4 md:py-3 md:px-8 font-medium text-black hover:bg-transparent hover:border-yellow-300 hover:text-white hover:border"
              href=""
            >
              Download App <span></span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src="Images/grocery-image.png"
            className="w-full md:w-3/4 xl:w-1/2 xl:absolute bottom-0 right-0 md:right-20"
            alt="Grocery"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
