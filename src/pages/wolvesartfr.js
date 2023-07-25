import IllustrationContainer from "../components/illustration-container";
import CardContainer3 from "../components/card-container3";
import CardContainer2 from "../components/card-container2";
import Footer3 from "../components/footer3";

const Wolvesartfr = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[3741.02px] text-center text-[101px] text-gray-300 font-inter">
      <div className="absolute top-[-1px] left-[0px] flex flex-row items-start justify-start">
        <div className="flex flex-row items-start justify-start">
          <div className="w-[1440px] h-[3118.02px] flex flex-col items-center justify-start">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <div className="w-[1440px] h-[810px] flex flex-col items-center justify-start">
                <div className="relative w-[1440px] h-[790px] overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1440px] h-[810px] flex flex-col items-center justify-center">
                    <img
                      className="relative w-[1440px] h-[608px] object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[-512px]">
                  <div className="w-[1420px] h-[127px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="relative leading-[112px] font-extrabold flex items-center justify-center w-[1157.06px] h-[125px] shrink-0">
                      "Il n'y a pas de richesse
                    </div>
                  </div>
                  <div className="w-[1420px] h-[127px] overflow-hidden shrink-0 flex flex-col items-center justify-center text-[100px]">
                    <div className="relative leading-[112px] font-extrabold flex items-center justify-center w-[777.26px] h-[125px] shrink-0">
                      sans créativité"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[295px] flex flex-col items-center justify-center gap-[20px] text-left text-xl text-white font-space-grotesk">
              <IllustrationContainer
                jobTitle="Directrice Artistique"
                imageId="/spanafter.svg"
                designType="Webdesign"
                designIcon="/spanafter1.svg"
                designCategory="Print"
                designIconImageUrl="/spanafter2.svg"
                designImageUrl="Illustration"
              />
              <div className="w-[1440px] h-[131px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                <IllustrationContainer
                  jobTitle="UI design"
                  imageId="/spanafter3.svg"
                  designType="UX design"
                  designIcon="/spanafter4.svg"
                  designCategory="Motion design"
                  designIconImageUrl="/spanafter5.svg"
                  designImageUrl="Interactiv design"
                  propWidth="2159.69px"
                  propLeft="276.73px"
                  propLeft1="334.73px"
                  propLeft2="646.94px"
                  propLeft3="704.94px"
                  propLeft4="1129.89px"
                  propLeft5="1187.89px"
                />
              </div>
              <div className="bg-gray-100 flex flex-row p-2.5 items-start justify-start">
                <div className="w-[158.97px] h-[23px] flex flex-row items-start justify-start gap-[7px]">
                  <div className="relative leading-[20px] font-light">
                    En savoir plus
                  </div>
                  <img
                    className="relative w-5 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/svg7.svg"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-row py-0 px-[60px] items-start justify-start">
              <div className="relative w-[1320px] h-[1813.02px]">
                <img
                  className="absolute top-[calc(50%_-_906.51px)] left-[calc(50%_-_673.59px)] rounded-2xl w-[800px] h-[552.19px] object-cover"
                  alt=""
                  src="/orangehalowebp@2x.png"
                />
                <img
                  className="absolute top-[calc(50%_+_217.51px)] left-[calc(50%_+_77.89px)] rounded-2xl w-[689px] h-[689px] object-cover"
                  alt=""
                  src="/bluehalowebp@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] w-[1320px] h-[1680px]">
                  <CardContainer3
                    projectName="Lazuli"
                    designElementName="Illustration"
                    illustrationCode="/svg8.svg"
                  />
                  <CardContainer2 opentri="Opentri" svg="/svg8.svg" />
                  <CardContainer3
                    projectName="Webisland 2022"
                    designElementName="Identité"
                    illustrationCode="/svg9.svg"
                    propTop="844px"
                    propBottom="136px"
                    propBackgroundImage={`url("/div31@3x.png")`}
                  />
                  <CardContainer2
                    opentri="Launchr"
                    svg="/svg9.svg"
                    propTop="984px"
                    propBottom="-4px"
                    propBackgroundImage={`url("/div32@3x.png")`}
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-4 pb-[8.015625px] pr-[25.59375px] pl-[25px] bg-tomato absolute top-[1750px] left-[calc(50%_-_116.3px)] rounded-2xl flex flex-row items-start justify-start">
                  <div className="relative text-[19.01px] leading-[19.01px] font-light font-space-grotesk text-gray-100 text-left">
                    Voir tous les projets
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer3 />
      <div className="absolute top-[20px] left-[calc(50%_-_660px)] flex flex-row py-0 pr-[25.609375px] pl-0 items-start justify-start gap-[975.39px]">
        <img
          className="relative w-[203px] h-[61px] overflow-hidden shrink-0"
          alt=""
          src="/svg11.svg"
        />
        <img
          className="relative w-[116px] h-[464px] overflow-hidden shrink-0"
          alt=""
          src="/svg12.svg"
        />
      </div>
      <img
        className="absolute top-[315.83px] left-[1386.94px] w-[53.06px] h-[171.34px] overflow-hidden"
        alt=""
        src="/svg13.svg"
      />
    </div>
  );
};

export default Wolvesartfr;
