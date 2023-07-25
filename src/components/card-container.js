import { useMemo } from "react";

const CardContainer = ({
  contentTitle,
  webinarContentImageUrl,
  propWidth,
  propTop,
  propLeft,
}) => {
  const creativeWaysToStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const readStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="relative w-[405.33px] h-[448.73px] text-left text-smi text-gray-1400 font-inter">
      <img
        className="absolute h-[calc(100%_-_181.22px)] w-full top-[0px] right-[0px] bottom-[181.22px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={contentTitle}
      />
      <div className="absolute top-[283.52px] left-[0px] rounded-13xl flex flex-row pt-1 pb-[5.390625px] pr-[12.8125px] pl-[13px] items-start justify-start border-[1px] border-solid border-gray-1100">
        <div className="relative leading-[15.4px] font-semibold">
          Inspiration
        </div>
      </div>
      <div
        className="absolute top-[324.91px] left-[0px] text-xl tracking-[-0.2px] leading-[26px] text-black flex items-center w-[383.18px]"
        style={creativeWaysToStyle}
      >
        {webinarContentImageUrl}
      </div>
      <div
        className="absolute top-[395.91px] left-[calc(50%_-_202.66px)] text-[18.84px] tracking-[-0.2px] leading-[21.82px] text-mediumslateblue text-center"
        style={readStyle}
      >
        Read
      </div>
    </div>
  );
};

export default CardContainer;
