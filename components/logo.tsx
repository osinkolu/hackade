import Image from "next/image";
import logoWhite from "@/assets/logo-white.svg";
import logoBlack from "@/assets/logo-black.svg";

export const Logo = () => {
  return (
    <>
      <Image src={logoWhite} alt="Hackade" className="dark:flex hidden" />
      <Image src={logoBlack} alt="Hackade" className="dark:hidden flex" />
    </>
  );
};
