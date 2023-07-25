import CardContainer from "./card-container";

const RecentArticlesContainer = () => {
  return (
    <div className="absolute top-[11687.86px] left-[0px] bg-white flex flex-row py-0 px-20 items-start justify-start text-center text-26xl text-black font-inter">
      <div className="w-[1280px] h-[821.53px] flex flex-col py-[79px] px-0 box-border items-center justify-center gap-[48px]">
        <div className="relative tracking-[-2px] leading-[52.8px]">
          Recent articles
        </div>
        <div className="flex flex-col items-center justify-start gap-[64px] text-left text-smi text-gray-1400">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <CardContainer
              contentTitle="/div15@2x.png"
              webinarContentImageUrl="8 Creative Ways to Repurpose Your Webinar Content"
            />
            <CardContainer
              contentTitle="/div16@2x.png"
              webinarContentImageUrl="Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About"
              propWidth="392.43px"
              propTop="421.91px"
              propLeft="calc(50% - 202.66px)"
            />
            <CardContainer
              contentTitle="/div17@2x.png"
              webinarContentImageUrl="How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps"
              propWidth="369.09px"
              propTop="395.91px"
              propLeft="calc(50% - 202.67px)"
            />
          </div>
          <div className="rounded-45xl bg-mediumslateblue shadow-[1px_1px_1px_rgba(255,_255,_255,_0.25)_inset] flex flex-row pt-[23px] pb-[25px] pr-[20.78125px] pl-5 items-start justify-start text-center text-base text-white">
            <div className="relative">Read the blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentArticlesContainer;
