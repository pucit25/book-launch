const ContactPage = () => {
    return (
      <main className="mt-[64px] min-h-screen">
        {/* Header */}
        <header className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-normal text-[#1B1816]">
            Contact Us
          </h1>
          <p className="text-[#8C8784] text-[14px] md:text-[20px] font-normal mt-2">
            We Look Forward to Hearing from You
          </p>
        </header>
  
        {/* Contact Form Section */}
        <section className="bg-[#4F2B04] py-16 px-6 flex justify-center">
          <div className="bg-[#FEFBF6] p-8 md:p-12 w-full max-w-2xl shadow-lg">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="text-[#1B1816] block font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-[#8C8784] p-3 mt-1 rounded-md"
                />
              </div>
  
              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#1B1816] block font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-[#8C8784] p-3 mt-1 rounded-md"
                  />
                </div>
                <div>
                  <label className="text-[#1B1816] block font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-[#8C8784] p-3 mt-1 rounded-md"
                  />
                </div>
              </div>
  
              {/* Message Input */}
              <div>
                <label className="text-[#1B1816] block font-medium">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full border border-[#8C8784] p-3 mt-1 rounded-md h-32"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#FFCC99] text-black w-full py-3 mt-4 font-medium hover:bg-[#F5B97A] transition rounded-md"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  };
  
  export default ContactPage;