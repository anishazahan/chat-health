import Image from "next/image";
import CommonBtn from "../CommonBtn";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 sm:px-10 items-center py-4 w-full">
      <Image src="/images/logo.png" width={"57"} height={"60"} className="object-contain " alt="" />
      <CommonBtn>Login/Register</CommonBtn>
    </div>
  );
};

export default Navbar;
