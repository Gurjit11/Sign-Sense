import Navbar2 from "./navbar2";

const ContainerHeaderForm = () => {
  return (
    <div className="absolute top-[32px] left-[0px] bg-black w-[1440px] h-[1141.8px] overflow-hidden text-center text-84xl text-white font-inter">
      <img
        className="absolute h-[calc(100%_-_318.06px)] w-[calc(100%_+_560px)] top-[283.81px] right-[-560px] bottom-[34.25px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/633b9211f3a23a857f2a4434-homeheroblurp1600webp@2x.png"
      />
      <div className="absolute top-[16px] left-[80px] w-[1280px] h-[289.38px]">
        <div className="absolute top-[60px] left-[calc(50%_-_473.66px)] tracking-[-2px] leading-[121px]">{`Captivate & Convert`}</div>
        <div className="absolute top-[205px] left-[calc(50%_-_292.25px)] text-5xl leading-[31.2px] text-gray-500 flex items-center justify-center w-[584.7px]">
          A webinar platform designed for marketers to host jaw-dropping
          experiences that drive revenue.
        </div>
        <div className="absolute top-[299.38px] left-[0px] flex flex-row py-0 px-[502.046875px] items-center justify-start gap-[8px] text-base">
          <div className="rounded-45xl bg-mediumslateblue shadow-[1px_1px_1px_rgba(255,_255,_255,_0.25)_inset] flex flex-row pt-[23px] pb-[25px] pr-[22.78125px] pl-[23px] items-start justify-start">
            <div className="relative">Demo</div>
          </div>
          <div className="rounded-45xl box-border w-[177.13px] h-[50px] flex flex-row py-[13px] px-[22.125px] items-center justify-start gap-[8px] border-[1px] border-solid border-gray-1200">
            <img className="relative w-6 h-6" alt="" src="/div1.svg" />
            <div className="relative">How it works</div>
          </div>
        </div>
      </div>
      <img
        className="absolute w-[calc(100%_-_83.2px)] top-[calc(50%_-_167.48px)] right-[41.6px] left-[41.6px] max-w-full overflow-hidden h-[656.34px] object-cover"
        alt=""
        src="/633f0ecf76651e0e17d7f97f-homeheromockupp1600webp@2x.png"
      />
      <div className="absolute w-[calc(100%_-_352px)] right-[179.2px] bottom-[129.15px] left-[172.8px] rounded-2xl bg-gray-600 shadow-[-33px_38px_80px_-1px_rgba(0,_0,_0,_0.6)] box-border h-[606.55px] overflow-hidden border-[1px] border-solid border-gray-1600">
        <img
          className="absolute h-[calc(100%_-_3.4px)] w-[calc(100%_-_3.4px)] top-[1.7px] right-[1.7px] bottom-[1.7px] left-[1.7px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/video96b207d627de3a9d89d3912fec954671video@2x.png"
        />
        <img
          className="absolute h-[calc(100%_+_7.6px)] w-[calc(100%_-_3.4px)] top-[1.7px] right-[1.7px] bottom-[-9.3px] left-[1.7px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/633b44b70bd797329e54fa62-framebgp800png@2x.png"
        />
      </div>
      <Navbar2 />
    </div>
  );
};

export default ContainerHeaderForm;
