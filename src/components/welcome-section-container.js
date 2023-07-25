const WelcomeSectionContainer = () => {
  return (
    <div className="absolute top-[1173.8px] left-[0px] bg-black flex flex-row py-0 px-20 items-start justify-start text-left text-26xl text-white font-inter">
      <div className="flex flex-row py-0 pr-[864px] pl-0 items-start justify-start relative">
        <div className="relative w-[416px] h-[460.38px] z-[0]">
          <div className="absolute top-[23px] left-[0px] tracking-[-2px] leading-[52.8px] flex items-center w-[365.28px]">
            World-class teams are upgrading to Welcome
          </div>
          <div className="absolute top-[196.39px] left-[0px] text-mini leading-[20.8px] text-gray-1500 flex items-center w-[404.58px]">
            Companies are ditching legacy platforms for the ability to deliver
            an engaging experience at every level.
          </div>
          <div className="absolute top-[303.98px] left-[0px] flex flex-col pt-0 px-0 pb-[0.59375px] items-start justify-start text-10xl">
            <div className="flex flex-row py-0 pr-[94px] pl-0 items-start justify-start">
              <div className="flex flex-row pt-0 px-0 pb-[4.796875px] items-start justify-start">
                <img
                  className="relative w-10 h-10 overflow-hidden shrink-0"
                  alt=""
                  src="/svg6.svg"
                />
              </div>
              <div className="relative tracking-[-0.25px] leading-[38.4px]">
                <span>{`66% `}</span>
                <span className="text-gray-1300">attendance rate</span>
              </div>
            </div>
            <div className="relative text-2xs leading-[15.6px] text-gray-1500 mt-[-1px]">
              avg attendance for Welcome customers
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] h-[calc(100%_+_32px)] w-[calc(100%_-_924.5px)] top-[-32px] right-[144px] bottom-[0px] left-[780.5px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/div2.svg"
        />
      </div>
    </div>
  );
};

export default WelcomeSectionContainer;
