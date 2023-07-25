import BrandCustomizationContainer from "./brand-customization-container";

const WelcomeSectionContainer1 = () => {
  return (
    <div className="absolute top-[4807.41px] left-[0px] bg-black flex flex-row py-0 px-20 items-start justify-start text-left text-25xl text-white font-inter">
      <div className="flex flex-col py-36 px-0 items-start justify-start gap-[80px]">
        <div className="relative w-[1280px] h-[494.39px]">
          <div className="absolute top-[-1px] left-[0px] tracking-[-2px] leading-[40.8px]">
            Powered by
          </div>
          <div className="absolute top-[72.8px] left-[0px] text-217xl tracking-[-10px] leading-[210.8px]">
            Welcome
          </div>
          <div className="absolute top-[283.59px] left-[612.05px] text-214xl tracking-[-10px] leading-[210.8px]">
            Studio
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[64px] text-lg">
          <div className="relative w-[1280px] h-[1058.67px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(41deg,_#96b7cd_27%,_#e68d83)] flex flex-row items-end justify-start gap-[24px] text-black">
              <div className="flex flex-col pt-10 pb-[412.796875px] pr-[55.29998779296875px] pl-10 items-start justify-start gap-[7px]">
                <div className="relative tracking-[-0.2px] leading-[26px]">
                  Drag-n-drop Agenda Builder
                </div>
                <div className="relative text-sm leading-[20.8px] text-gray-800 flex items-center w-[323.36px]">
                  Quickly rearrange your webinar’s sequence of actions and
                  instantly generate an agenda that auto-updates as you move
                  actions around.
                </div>
              </div>
              <div className="rounded-tl-2xl rounded-tr-none rounded-b-none flex flex-row items-start justify-start relative">
                <img
                  className="absolute my-0 mx-[!important] h-[calc(100%_-_353.38px)] w-[calc(100%_-_452.17px)] top-[91.19px] right-[420.17px] bottom-[262.19px] left-[32px] max-w-full overflow-hidden max-h-full object-cover z-[0]"
                  alt=""
                  src="/633b16170a53477d62ee4650-homepoweredimagedeletep500png@2x.png"
                />
                <img
                  className="relative rounded-tl-2xl rounded-tr-none rounded-b-none w-[837.34px] h-[492.8px] object-cover z-[1]"
                  alt=""
                  src="/633b16170a53476e77ee464f-homepoweredagendajpg@2x.png"
                />
                <img
                  className="absolute my-0 mx-[!important] h-[calc(100%_-_345.3px)] top-[145.41px] bottom-[199.89px] left-[252.75px] max-h-full w-[185.5px] object-cover z-[2]"
                  alt=""
                  src="/633b16170a53470651ee468f-homepowered-agendaholderpng@2x.png"
                />
              </div>
            </div>
            <BrandCustomizationContainer
              customizationDescription="Brand customization"
              brandingElements="Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates."
              brandDimensions="/633b16170a53477052ee46e9-studioimage1p800webp@2x.png"
            />
            <div className="absolute top-[572.8px] left-[434.66px] bg-gray-900 w-[410.67px] h-[485.88px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] flex flex-col pt-10 pb-[0.390625px] pr-[61.06561279296875px] pl-10 items-start justify-start gap-[7px]">
                <div className="relative tracking-[-0.2px] leading-[26px]">
                  Stage Kit
                </div>
                <div className="relative text-base leading-[20.8px] text-gray-1500 flex items-center w-[309.61px]">
                  Design branded overlays, lower thirds, and right-side
                  gradients directly in the Welcome platform.
                </div>
              </div>
              <img
                className="absolute top-[calc(50%_-_66.55px)] left-[40px] rounded-xl w-[444.8px] h-[346.44px] object-cover"
                alt=""
                src="/633b16170a534774a3ee46ec-studioimage2p800webp@2x.png"
              />
            </div>
            <BrandCustomizationContainer
              customizationDescription="Green Room"
              brandingElements="Invite speakers to a private waiting room to meet and prep to go on stage."
              brandDimensions="/633d81ddc165e244355b70a3-greenroomjpg@2x.png"
              propLeft="869.33px"
              propWidth="303.39px"
              propTop="calc(50% - 87.34px)"
              propHeight="370.08px"
            />
          </div>
          <div className="rounded-45xl box-border w-[194.59px] h-[50px] flex flex-row py-[13px] px-[21px] items-center justify-end gap-[7px] text-center text-base border-[1px] border-solid border-gray-1200">
            <div className="relative">See all features</div>
            <img className="relative w-6 h-6" alt="" src="/div5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSectionContainer1;
