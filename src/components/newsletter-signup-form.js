const NewsletterSignupForm = () => {
  return (
    <div className="absolute top-[13444.58px] left-[0px] flex flex-row p-20 items-start justify-start bg-[url(/public/section1@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-40xl text-white font-inter">
      <div className="flex flex-col items-start justify-start gap-[63.78px]">
        <div className="relative tracking-[-2px] leading-[70.4px] flex items-center w-[372.59px]">
          Signup for the newsletter
        </div>
        <div className="w-[1280px] h-[116px] flex flex-row items-end justify-start gap-[516px] text-3xl">
          <div className="relative leading-[31.2px]">Stay connected</div>
          <div className="flex flex-col items-start justify-start gap-[28px] text-lg text-gray-1300">
            <div className="box-border w-[600px] h-11 flex flex-col py-[7.203125px] px-0 items-center justify-start border-b-[2px] border-solid border-white">
              <div className="overflow-hidden flex flex-row py-0.5 pr-[510px] pl-0 items-start justify-start">
                <div className="relative">First name</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start relative text-lgi">
              <div className="box-border w-[600px] h-11 flex flex-col py-[7.203125px] px-0 items-center justify-start z-[0] border-b-[2px] border-solid border-white">
                <div className="overflow-hidden flex flex-row pt-0.5 pb-px pr-[552px] pl-0 items-start justify-start">
                  <div className="relative">Email</div>
                </div>
              </div>
              <img
                className="absolute my-0 mx-[!important] right-[0px] bottom-[0px] rounded-45xl w-14 h-14 z-[1]"
                alt=""
                src="/input.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupForm;
