"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

const events = [
  {
    title: "Book Launch",
    date: "Mar 1, 2025",
    image: "/assets/event.png",
  },
  {
    title: "In-Person Book Signing",
    date: "Feb 24, 2025",
    image: "/assets/event2.png",
  },
];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const today = new Date();
  const formattedToday = today.toDateString();

  // Determine event status
  const getEventStatus = (eventDate) => {
    const eventDay = new Date(eventDate).toDateString();
    if (eventDay < formattedToday) return "past"; // Event has passed
    if (eventDay === formattedToday) return "current"; // Event is today
    return "upcoming"; // Event is in the future
  };

  // Get dot color based on event status
  const getDotColor = (status) => {
    switch (status) {
      case "past":
        return "bg-red-500";
      case "current":
        return "bg-green-500";
      case "upcoming":
        return "bg-amber-500";
      default:
        return "bg-gray-400";
    }
  };

  // Filtered Events List
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const status = getEventStatus(event.date);
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === "all" || filter === status;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  return (
    <main className="mt-[32px] text-white min-h-screen">
      {/* Header */}
      <header className="px-4 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-normal text-[#1B1816]">Events</h2>
      </header>

      {/* Search & Filter Section */}
      <section className="px-4 md:px-16 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 text-gray-700 px-4 py-2 w-full md:w-[300px] rounded-md focus:ring focus:ring-[#FFA947]"
        />

        {/* Filter Dropdown */}
        <div className="relative w-full md:w-[200px]">
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 text-gray-700 px-4 py-2 w-full rounded-md focus:ring focus:ring-[#FFA947] appearance-none"
        >
            <option value="all">All Events</option>
            <option value="past">Past Events</option>
            <option value="current">Today</option>
            <option value="upcoming">Upcoming Events</option>
        </select>
  <span className="absolute right-4 top-3 text-gray-500 pointer-events-none">▼</span>
</div>

      </section>

      {/* Events Grid */}
      <section className="px-4 md:px-16 py-8">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-[#1B1816]">No events found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => {
              const status = getEventStatus(event.date);
              return (
                <div key={index} className="overflow-hidden bg-white shadow-md rounded-lg">
                  {/* Event Image */}
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600} // Adjust width as needed
                    height={400} // Adjust height as needed
                    className="w-full h-[300px] object-cover"
                    priority={index === 0} // Load first image with priority
                  />

                  {/* Event Details */}
                  <div className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className={`w-3 h-3 ${getDotColor(status)} rounded-full mt-1`}></span>
                      <span className="font-[Roboto-serif] text-[#1B1816] text-[12px] font-medium tracking-[2%] leading-[13px] mt-2">
                        {status === "past" ? "Past Event" : status === "current" ? "Happening Now" : "Upcoming"}
                      </span>
                    </div>
                    <h3 className="text-[#1B1816] text-[20px] font-semibold mt-3">{event.title}</h3>
                    <p className="text-[14px] font-medium text-[#8C8784] mt-2">{event.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default EventsPage;