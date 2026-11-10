export default function Footer() {
  return (
    <div className="bg-orange-500 py-5">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          garamTHALi
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <a
            href="#"
            className="hover:text-black transition duration-150 ease-in"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-black transition duration-150 ease-in"
          >
            Terms of Services
          </a>
        </span>
      </div>
    </div>
  );
}
