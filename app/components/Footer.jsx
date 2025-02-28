export default function Footer() {
  return (
    <footer className="mt-32 text-left bg-[#FDF7F3] text-[#1B1816] border border-[#E0E0E0] border-opacity-10 w-full">
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-x divide-[#E0E0E0]">
        {/* Menu Links */}
        <div className="py-6">
          <h3 className="text-[#54504D] font-medium mb-2 text-lg">Menu</h3>
          <ul className="space-y-2">
            {["About", "Books", "Events", "Contact Us"].map((item, index) => (
              <li key={index}>
                <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#CC342B] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="py-4 md:pl-6 md:pt-4">
          <h3 className="text-[#54504D] font-medium mb-2 text-lg">Follow Us</h3>
          <ul className="space-y-2">
            {["Facebook", "LinkedIn", "Twitter"].map((platform, index) => (
              <li key={index}>
                <a href="#" className="hover:text-[#CC342B] transition">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="pt-6 space-y-2 md:pl-6">
          <h3 className="text-[#54504D] font-medium text-lg mb-2">Get In Touch</h3>
          <p className="text-[#1B1816]">info@paulusoro.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <h4 className="bg-[#5C3100] text-[#FDF7F3] text-center text-sm py-3">
        © 2025, Mfon Usoro
      </h4>
    </footer>
  );
}
