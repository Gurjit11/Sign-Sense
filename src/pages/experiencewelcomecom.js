import ContainerHeaderForm from "../components/container-header-form";
import WelcomeSectionContainer from "../components/welcome-section-container";
import InteractiveOverlayContainer2 from "../components/interactive-overlay-container2";
import WelcomeSectionContainer1 from "../components/welcome-section-container1";
import DriveForm1 from "../components/drive-form1";
import ContainerSectionHowitworks from "../components/container-section-howitworks";
import IntegrateDataFormContainer1 from "../components/integrate-data-form-container1";
import LovedAndTrustedContainer1 from "../components/loved-and-trusted-container1";
import EndlessSectionContainer from "../components/endless-section-container";
import RecentArticlesContainer from "../components/recent-articles-container";
import JoinUsContainer1 from "../components/join-us-container1";
import NewsletterSignupForm from "../components/newsletter-signup-form";
import ExperienceWelcomeContainer1 from "../components/experience-welcome-container1";
import Footer2 from "../components/footer2";
import BottomFooter from "../components/bottom-footer";

const Experiencewelcomecom = () => {
  return (
    <div className="relative bg-black w-full flex flex-col items-center justify-center text-center text-[13.2px] text-gray-400 font-inter">
      <div className="relative w-[1440px] h-[15582.08px]">
        <div className="absolute top-[calc(50%_-_7731.04px)] left-[calc(50%_-_80.91px)] rounded-45xl flex flex-row pt-[15px] pb-[17px] pr-[20.796875px] pl-5 items-start justify-start bg-[url(/public/a@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="relative">
            <span>Signup for</span>
            <span className="text-white"> The Drip</span>
          </div>
        </div>
        <ContainerHeaderForm />
        <WelcomeSectionContainer />
        <InteractiveOverlayContainer2 />
        <div className="absolute top-[3905.22px] left-[0px] flex flex-row pt-[304px] pb-[305px] pr-[720px] pl-20 items-start justify-start bg-[url(/public/section@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-37xl text-white">
          <div className="w-[640px] h-[293.19px] flex flex-col items-start justify-start gap-[39px]">
            <div className="relative tracking-[-2px] leading-[66px] flex items-center w-[582.37px]">
              “Makes other platforms look like the 1990’s”
            </div>
            <div className="relative text-3xl leading-[31.2px] text-gray-1500">
              -Nate Skinner, CMO at Onfido
            </div>
            <div className="rounded-45xl flex flex-row pt-6 pb-[26px] pr-[20.765625px] pl-5 items-start justify-start text-center text-base border-[1px] border-solid border-gray-1200">
              <div className="relative">Read customer stories</div>
            </div>
          </div>
        </div>
        <WelcomeSectionContainer1 />
        <DriveForm1 />
        <ContainerSectionHowitworks />
        <IntegrateDataFormContainer1 />
        <LovedAndTrustedContainer1 />
        <EndlessSectionContainer />
        <RecentArticlesContainer />
        <JoinUsContainer1 />
        <NewsletterSignupForm />
        <ExperienceWelcomeContainer1 />
        <div className="absolute top-[15046.89px] left-[0px] bg-black flex flex-col pt-28 px-0 pb-0 items-center justify-start gap-[192px]">
          <Footer2 />
          <BottomFooter />
        </div>
      </div>
    </div>
  );
};

export default Experiencewelcomecom;
