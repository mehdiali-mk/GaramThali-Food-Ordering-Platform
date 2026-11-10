import landingPageImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="px-10 flex flex-col gap-12 mt-0 md:mt-32">
      <div className="relative bg-white rounded-lg pt-8 pb-16 flex flex-col gap-5 text-center -mt-16 overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-orange-500">
          Tap karo,{" "}
          <span className="uppercase inline-block rotate-355 bg-orange-500 text-white py-1 px-2 rounded-lg">
            bhookh
          </span>{" "}
          mitao!!!
        </h1>

        <p className="text-xl text-orange-500 font-bold z-10">
          <span>Fresh</span> and <span>hot</span>{" "}
          <span className="uppercase inline-block rotate-355 bg-orange-500 text-white py-1 px-2 rounded-lg">
            Garam Thali
          </span>{" "}
          ghar mangao.
        </p>

        {/* Smoke-like Wavy Bottom Border */}
        <svg
          className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[80%] md:w-[40%] h-8 sm:h-12 text-orange-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            d="M0,50 C320,120 420,-20 720,50 C1020,120 1120,-20 1440,50"
          />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <img src={landingPageImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the garamThali app for faster ordering and personalized
            recommendations
          </span>
          <a href="https://www.linkedin.com/in/mehdiali-mk" target="_blank">
            <img
              src={appDownloadImage}
              alt="Play Store Download Button"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
