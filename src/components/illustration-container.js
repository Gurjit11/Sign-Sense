import { useMemo } from "react";

const IllustrationContainer = ({
  jobTitle,
  imageId,
  designType,
  designIcon,
  designCategory,
  designIconImageUrl,
  designImageUrl,
  propWidth,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
  propLeft5,
}) => {
  const div1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const spanStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const webdesignStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const span1Style = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const printStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const span2Style = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const illustrationStyle = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  return (
    <div className="relative w-[1440px] h-[81px] overflow-hidden shrink-0 text-left text-35xl text-darkslategray font-space-grotesk">
      <div
        className="absolute top-[0px] left-[0px] w-[2234.28px] h-[81px]"
        style={div1Style}
      >
        <div className="absolute top-[0px] left-[0px] leading-[81px] font-light">
          {jobTitle}
        </div>
        <div
          className="absolute top-[6px] left-[562.02px] w-[34px] h-[69px]"
          style={spanStyle}
        >
          <img
            className="absolute top-[19px] left-[0px] w-[35px] h-9"
            alt=""
            src={imageId}
          />
          <div className="absolute top-[-4px] left-[0px] leading-[81px] font-light" />
        </div>
        <div
          className="absolute top-[0px] left-[620.02px] leading-[81px] font-light"
          style={webdesignStyle}
        >
          {designType}
        </div>
        <div
          className="absolute top-[6px] left-[960.73px] w-[34px] h-[69px]"
          style={span1Style}
        >
          <img
            className="absolute top-[19px] left-[0px] w-[35px] h-9"
            alt=""
            src={designIcon}
          />
          <div className="absolute top-[-4px] left-[0px] leading-[81px] font-light" />
        </div>
        <div
          className="absolute top-[0px] left-[1018.73px] leading-[81px] font-light"
          style={printStyle}
        >
          {designCategory}
        </div>
        <div
          className="absolute top-[6px] left-[1192.92px] w-[34px] h-[69px]"
          style={span2Style}
        >
          <img
            className="absolute top-[19px] left-[0px] w-[35px] h-9"
            alt=""
            src={designIconImageUrl}
          />
          <div className="absolute top-[-4px] left-[0px] leading-[81px] font-light" />
        </div>
        <div
          className="absolute top-[0px] left-[1250.92px] leading-[81px] font-light"
          style={illustrationStyle}
        >
          {designImageUrl}
        </div>
      </div>
    </div>
  );
};

export default IllustrationContainer;
