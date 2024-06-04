import Event from "./Event";

const Events = () => {
  const events = [
    {
      title: "Parisian Night Market",
      date: "20 July",
      description:
        "Explore a charming night market filled with French delicacies, artisanal crafts, and live music.",
      price: "from $35",
      time: "6:00 PM - 9:00 PM",
      location: "5th Avenue, Paris",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Rock Climbing Competition",
      date: "10 August",
      description:
        "Test your skills or cheer on the climbers at this exciting competition. Free entry for spectators!",
      price: "Free Entry",
      time: "All Day",
      location: "Central Park, New York",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Tokyo Anime Festival",
      date: "15 September",
      description:
        "Immerse yourself in the world of anime, manga, and cosplay at this massive convention.",
      price: "from $20",
      time: "10:00 AM - 8:00 PM",
      location: "Tokyo Convention Center",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Stargazing Night Campout",
      date: "26 October",
      description:
        "Escape the city lights and gaze at the stars under a clear night sky. Camping gear included!",
      price: "from $45",
      time: "Overnight",
      location: "Mount Rainier National Park",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Dia de Muertos Celebration",
      date: "2 November",
      description:
        "Celebrate the Day of the Dead with traditional music, food, and cultural activities.",
      price: "Free Entry",
      time: "All Day",
      location: "Grand Park, Los Angeles",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Holiday Craft Market",
      date: "8 December",
      description:
        "Find unique gifts and decorations at this festive holiday market.",
      price: "Free Entry",
      time: "10:00 AM - 5:00 PM",
      location: "Downtown Plaza, San Francisco",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Venice Film Festival",
      date: "29 August",
      description:
        "Join film enthusiasts and celebrities at the world-renowned Venice Film Festival.",
      price: "from $50",
      time: "12:00 PM - 11:00 PM",
      location: "Venice, Italy",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Munich Oktoberfest",
      date: "17 September",
      description:
        "Experience the world's largest Volksfest with beer tents, amusement rides, and traditional Bavarian music.",
      price: "from $30",
      time: "10:00 AM - 11:30 PM",
      location: "Theresienwiese, Munich",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Sydney New Year's Eve Fireworks",
      date: "31 December",
      description:
        "Ring in the new year with a spectacular fireworks display over Sydney Harbour.",
      price: "Free Entry",
      time: "8:00 PM - 12:30 AM",
      location: "Sydney Harbour, Sydney",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
    {
      title: "Rio Carnival",
      date: "21 February",
      description:
        "Join the world's most famous carnival with samba parades, street parties, and colorful costumes.",
      price: "from $40",
      time: "All Day",
      location: "Sambadrome, Rio de Janeiro",
      image:
        "https://jthemes.net/themes/html/harmony-event/assets/images/event/event-6.jpg",
    },
  ];
  return (
    <div className="container mx-auto max-w-[1200px] mb-20">
      <div className="border-l-4 border-orange-600 pl-2 mx-3 lg:mx-0">
        <h2 className="text-4xl font-serif uppercase">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 mx-3 lg:mx-0">
        {events.slice(0, 4).map((event, i) => (
          <Event key={i} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
