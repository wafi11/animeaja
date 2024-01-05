const Header = ({ title }) => {
  return (
    <div className=" mx-3 ">
      <h1 className="mt-[20px] text-3xl font-bold text-[#f3f3f3] px-5 py-5">
        {title}
      </h1>
    </div>
  );
};

export default Header;
