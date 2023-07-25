const Navbar2 = () => {
  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-gray-700 box-border h-[69.8px] flex flex-col items-center justify-center text-left text-mini text-white font-inter border-b-[1px] border-solid border-gray-1600">
      <div className="relative w-[1280px] h-[68.8px]">
        <div className="absolute top-[calc(50%_-_16.01px)] left-[0px] flex flex-row items-start justify-start">
          <img
            className="relative w-32 h-8 overflow-hidden shrink-0"
            alt=""
            src="/633b16170a5347c77eee4653-welcomesvg.svg"
          />
        </div>
        <div className="absolute top-[5px] left-[157px] w-[100px] h-[100px] overflow-hidden" />
        <div className="absolute top-[calc(50%_-_34.4px)] left-[452.95px] w-[398.08px] h-[68.8px] flex flex-row py-[23px] px-4 box-border items-center justify-start gap-[32px]">
          <div className="relative leading-[20.8px]">Features</div>
          <div className="relative leading-[20.8px]">Pricing</div>
          <div className="relative leading-[20.8px]">Events</div>
          <div className="relative leading-[20.8px]">About</div>
          <div className="relative leading-[20.8px]">Blog</div>
        </div>
        <div className="absolute top-[10.39px] left-[968px] w-[312px] h-12 flex flex-row items-center justify-start gap-[20px] text-center">
          <div className="relative leading-[16px]">Support</div>
          <div className="relative leading-[16px]">Login</div>
          <div className="rounded-45xl bg-mediumslateblue shadow-[1px_1px_1px_rgba(255,_255,_255,_0.25)_inset] flex flex-row pt-[23px] pb-[25px] pr-[22.78125px] pl-[23px] items-start justify-start text-base">
            <div className="relative">Demo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
