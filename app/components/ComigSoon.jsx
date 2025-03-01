import Locations from "./OurLocations";

const ComingSoon = () => {
  return (
    <section className="pt-6 md:pt-16 flex flex-col md:flex-row w-full min-h-[600px]">
      {/* Left - Coming Soon with Background Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-white text-4xl font-serif font-bold bg-cover bg-center relative min-h-[300px] md:min-h-[500px] bg-black bg-opacity-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/soon.webp')" }}
        ></div>
        {/* <div className="relative z-10 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <span>Coming Soon</span>
        </div> */}
      </div>

      {/* Right - Where to Find Our Books */}
      <div className="pt-6">
        <Locations />
      </div>
    </section>
  );
};

export default ComingSoon;