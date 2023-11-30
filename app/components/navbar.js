import Image from "next/image";
import menu from "@/assets/jam_menu_2x.png";
import menuSm from "@/assets/jam_menu.png";
import logo from "@/assets/T.png";
import reserve from "@/assets/reserve.png";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="text-white px-4 py-6 flex justify-between items-center">
          <div className="logo text-lg font-bold flex items-center gap-5">
            <Image src={menu} height={32} width={34} />
            <Image src={logo} height={60} width={60} />
          </div>
          <div className="menu  flex flex-row items-center gap-5">
            <Image src={reserve} height={24} width={65} />
            <Image src={menuSm} height={24} width={24} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
