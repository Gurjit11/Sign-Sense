import { useMemo } from "react";

const BrandCustomizationContainer = ({
  customizationDescription,
  brandingElements,
  brandDimensions,
  propLeft,
  propWidth,
  propTop,
  propHeight,
}) => {
  const divwNodeF037abf7E12d0a40Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const brandTheEntireStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const b16170a53477052ee46e9StudioIIconStyle = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div
      className="absolute top-[572.8px] left-[0px] bg-gray-900 w-[410.66px] h-[485.88px] overflow-hidden text-left text-lgi text-white font-inter"
      style={divwNodeF037abf7E12d0a40Style}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col pt-10 pb-[1.1875px] pr-[53.67498779296875px] pl-10 items-start justify-start gap-[6px]">
        <div className="relative tracking-[-0.2px] leading-[26px]">
          {customizationDescription}
        </div>
        <div
          className="relative text-base leading-[20.8px] text-gray-1500 flex items-center w-[316.98px]"
          style={brandTheEntireStyle}
        >
          {brandingElements}
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_45.75px)] left-[40px] rounded-xl w-[444.78px] h-[346.42px] object-cover"
        alt=""
        src={brandDimensions}
        style={b16170a53477052ee46e9StudioIIconStyle}
      />
    </div>
  );
};

export default BrandCustomizationContainer;
