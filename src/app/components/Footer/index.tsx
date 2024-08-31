import Link from "next/link";



const Footer = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="radial-bg hidden lg:block"></div>

      {/* All Rights Reserved */}
      <div className="py-8 px-4 border-t border-t-lightblue">
        <h3 className="text-center text-offwhite">
          CoinStream © 2024 - All Rights Reserved by{" "}
          <Link href="https://adminmart.com/" target="_blank">
            engrahmadaya
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
