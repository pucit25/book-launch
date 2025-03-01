const Locations = () => {
    return (
      <section className="bg-[#FEF9F5] pt-[-100px] px-4 md:px-12">
        {/* Section Label */}
        <div className="flex items-center space-x-2 mb-[20px]">
          <span className="w-2 h-2 bg-[#FFA947] rounded-full mt-4"></span>
          <span className="font-[Roboto-serif] text-[#1B1816] text-[20px] mt-4 font-semibold tracking-[2%] leading-[23px]">
            Our Locations
          </span>
        </div>
  
        {/* Section Title */}
        <h2 className="text-3xl md:text-[40px] font-serif font-normal text-[#1B1816] leading-[40px] mt-3 mb-[50px]">
          Where to Find Our Books
        </h2>
  
        {/* Library Locations */}
        <div className="mt-6 space-y-8">
          {/* PUC Lagos */}
          <div className="border-l border-[#FFA947] pl-4">
            <h3 className="text-lg font-bold text-[#3D3C42]">PUC Lagos</h3>
            <p className="text-[#3D3C42]">PUC Tower, Plot 999c, 7th Floor, Danmole Street, PO Box 71605, Victoria Island, Lagos.</p>
          </div>
          <div className="border-l border-[#FFA947] pl-4">
            <h3 className="text-lg font-bold text-[#3D3C42]">PUC Abuja</h3>
            <p className="text-[#3D3C42]">Abia house, Central Business District, Abuja, Nigeria.</p>
          </div>
          <div className="border-l border-[#FFA947] pl-4">
            <h3 className="text-lg font-bold text-[#3D3C42]">PUC Uyo</h3>
            <p className="text-[#3D3C42]">1st Floor, Left wing, APICO House, Abak road, PO Box 2212 Uyo, Akwa Ibom state, Nigeria.</p>
          </div>
  
          {/* Main Library */}
          <div className="border-l border-[#FFA947] pl-4">
            <h3 className="text-lg font-bold text-[#3D3C42]">Unilag Bookstore</h3>
            <p className="text-[#3D3C42]">University of Lagos, Nigeria.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Locations;
  