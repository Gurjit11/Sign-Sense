import { useMemo } from "react";

const CardContainer1 = ({
  dimensionCode,
  productDimensions,
  brandName,
  serviceName,
  contentCategory,
  brandContentImageUrl,
  propWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex flex-col pt-[0.0000625000029685907px] pb-0 pr-0 pl-[0.0000625000029685907px] items-start justify-start text-left text-lg text-gainsboro-100 font-inter">
      <div className="w-[623.05px] h-[493.63px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
        <img
          className="relative w-[623.05px] h-[444.44px] object-cover"
          alt=""
          src={dimensionCode}
        />
        <div className="relative w-[190.45px] h-[25.19px]" style={divStyle}>
          <div className="absolute top-[0px] left-[0px] flex flex-row py-[4.09375px] px-0 items-start justify-start">
            <img
              className="relative w-4 h-[17px] overflow-hidden shrink-0"
              alt=""
              src={productDimensions}
            />
          </div>
          <div className="absolute top-[-1px] left-[28px] leading-[25.2px] uppercase font-black">
            {brandName}
          </div>
        </div>
      </div>
      <div className="w-[623.05px] h-[20.8px] flex flex-row items-center justify-start gap-[8px] text-xs text-black">
        <div className="rounded-sm bg-gainsboro-100 flex flex-row pt-0.5 pb-[1.796875px] pr-[13.828125px] pl-1 items-start justify-start">
          <div className="relative leading-[16.8px] lowercase">
            {serviceName}
          </div>
        </div>
        <div className="rounded-sm bg-gainsboro-100 flex flex-row pt-0.5 pb-[1.796875px] pr-[19.890625px] pl-1 items-start justify-start">
          <div className="relative leading-[16.8px] lowercase">
            {contentCategory}
          </div>
        </div>
        <div className="rounded-sm bg-gainsboro-100 flex flex-row pt-0.5 pb-[1.796875px] pr-[13.890625px] pl-1 items-start justify-start">
          <div className="relative leading-[16.8px] lowercase">
            {brandContentImageUrl}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
