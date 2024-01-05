import Link from "next/link";

const NavbarItem = ({ name, Icon, linkhref }) => {
  return (
    <Link href={`/${linkhref}`}>
      <div
        className="text-[#fff] flex items-center gap-3 text-[18px] font-semibold 
      cursor-pointer hover:underline underline-offset-8 mb-2 ">
        <Icon />
        <h2 className="text-[#ffff] ">{name}</h2>
      </div>
    </Link>
  );
};

export default NavbarItem;
