import { useMemo } from "react";

const CardContainer2 = ({
  opentri,
  svg,
  propTop,
  propBottom,
  propBackgroundImage,
}) => {
  const div4Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const div5Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="absolute h-[calc(100%_-_980px)] w-[calc(100%_-_720px)] top-[144px] right-[0px] bottom-[836px] left-[720px] rounded-11xl [background:linear-gradient(180deg,_rgba(68,_62,_56,_0),_rgba(17,_17,_21,_0.5))] flex flex-col items-center justify-center text-left text-13xl text-white font-space-grotesk"
      style={div4Style}
    >
      <div
        className="rounded-11xl w-[600px] h-[700px] flex flex-col py-5 px-0 box-border items-center justify-end bg-[url(/public/div30@3x.png)] bg-cover bg-no-repeat bg-[top]"
        style={div5Style}
      >
        <div className="w-[560px] h-[100.39px] flex flex-row items-center justify-start gap-[15px]">
          <div className="flex flex-col pt-2 pb-0 pr-[366px] pl-0 items-start justify-start gap-[11.39px]">
            <div className="relative leading-[38.4px] font-light">
              {opentri}
            </div>
            <button className="cursor-pointer pt-2 pb-2.5 pr-[16.09375px] pl-[17px] bg-[transparent] rounded-81xl flex flex-row items-start justify-start border-[1px] border-solid border-white">
              <div className="relative text-base leading-[24px] font-light font-space-grotesk text-white text-left">
                Identité
              </div>
            </button>
          </div>
          <div className="rounded-81xl bg-white flex flex-row py-[13px] px-5 items-start justify-start">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src={svg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer2;
