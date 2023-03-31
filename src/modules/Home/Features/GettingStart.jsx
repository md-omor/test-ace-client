import Image from "next/image";
import appStore from "../../../assets/App store.svg";
import googlePlay from "../../../assets/Google play.svg";
import gettingStart from "../../../assets/gettingStartimg.svg";

const GettingStart = () => {
  return (
    <div className="bg-[#EDF9FF]">
      <div className="flex flex-col justify-center items-center container mx-auto pl-9 pr-8 ">
        <h1 className="bannerTitle font-black lg:w-[695px] lg:text-[56px] lg:leading-[150%] mt-[85px] text-center">
          Getting started is easy, so why wait?
        </h1>
        <p className="text-[#545777] text-base font-semibold mt-4">
          Download Test Ace today and start learning the fun way!
        </p>
        <div className="flex mt-10 space-x-5">
          <button>
            <Image src={appStore} alt="appStore" />
          </button>
          <button>
            <Image src={googlePlay} alt="googlePlay" />
          </button>
        </div>

        <div className="flex w-full justify-center mt-10">
          <Image
            src={gettingStart}
            alt="gettingStart"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStart;
