import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src={heroImage}
        alt="Burger Image with French Fries"
        className="w-fit h-100 object-cover block md:w-full md:max-h-100"
      />
      <p className="absolute inset-0 flex flex-col items-center mt-6 text-white font-black text-3xl text-center w-full md:inset-auto md:flex-none md:block md:top-10 md:left-10 md:text-left md:text-5xl md:w-[40%] md:leading-16">
        Order your <span className="text-5xl md:text-7xl"> FOOD!</span>
      </p>
      <p className="absolute bottom-10 right-4 hidden md:flex flex-col items-center text-center font-black text-orange-500 md:bottom-[15%] md:right-[5%] lg:bottom-20 lg:right-10 text-4xl lg:text-5xl leading-tight">
        Taste Your
        <span className="mt-2 whitespace-nowrap text-6xl uppercase lg:text-7xl">
          Desire <span className="inline-block rotate-180">!</span>
        </span>
      </p>
    </div>
  );
}
