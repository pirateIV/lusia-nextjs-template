import { sortPostsByDate } from "@/lib/utils";
import { Blog } from "@/types";

export const data = {
  travel: [
    {
      key: "travel-01",
      title:
        "Wanderlust Unleashed: 10 Must-Visit Destinations for Solo Travelers",
      slug: "wanderlust-unleashed-10-must-visit-destinations-for-solo-travelers",
      postDate: new Date("2023-02-25"),
      description:
        "Discover the top destinations perfect for solo adventurers seeking independence and self-discovery.",
    },
    {
      key: "travel-02",
      title:
        "North America Road Trip: From Coast to Coast, Scenic Routes Await",
      slug: "north-america-road-trip-from-coast-to-coast-scenic-routes-await",
      postDate: new Date("2023-02-25"),
      description:
        "Plan your ultimate cross-country adventure with our guide to North America's most breathtaking road trips.",
    },
    {
      key: "travel-03",
      title: "The Art of Slow Travel: Savoring Every Moment Abroad",
      slug: "the-art-of-slow-travel-savoring-every-moment-abroad",
      postDate: new Date("2023-02-21"),
      description:
        "Learn how to embrace slow travel and create more meaningful connections with the places you visit.",
    },
    {
      key: "travel-04",
      title: "Digital Nomad Lifestyle: Working While Exploring the World",
      slug: "digital-nomad-lifestyle-working-while-exploring-the-world",
      postDate: new Date("2023-02-20"),
      description:
        "Everything you need to know about balancing work and travel as a digital nomad.",
    },
    {
      key: "travel-05",
      title: "Hidden Gems: Off-the-Beaten-Path Travel Destinations",
      slug: "hidden-gems-off-the-beaten-path-travel-destinations",
      postDate: new Date("2023-02-16"),
      description:
        "Explore lesser-known destinations that offer unique experiences away from tourist crowds.",
    },
    {
      key: "travel-06",
      title: "Traveling on a Budget: Tips and Tricks for Affordable Adventures",
      slug: "traveling-on-a-budget-tips-and-tricks-for-affordable-adventures",
      postDate: new Date("2023-02-16"),
      description:
        "Smart strategies to make your travel dreams come true without breaking the bank.",
    },
    {
      key: "travel-07",
      title: "Culinary Adventures: Exploring Global Cuisine on Your Travels",
      slug: "culinary-adventures-exploring-global-cuisine-on-your-travels",
      postDate: new Date("2023-02-13"),
      description:
        "A food lover's guide to discovering authentic local flavors around the world.",
    },
    {
      key: "travel-08",
      title: "Packing Hacks: How to Travel Light and Stress-Free",
      slug: "packing-hacks-how-to-travel-light-and-stress-free",
      postDate: new Date("2023-02-13"),
      description:
        "Expert tips to pack efficiently and make your journeys more comfortable.",
    },
    {
      key: "travel-09",
      title: "Solo Female Travel: Empowering Journeys and Safety Tips",
      slug: "solo-female-travel-empowering-journeys-and-safety-tips",
      postDate: new Date("2023-02-08"),
      description:
        "Essential advice for women traveling alone to ensure safe and empowering experiences.",
    },
  ],
  lifestyle: [
    {
      key: "lifestyle-01",
      title: "Mental Health Matters: Traveling and Coping with Anxiety",
      slug: "mental-health-matters-traveling-and-coping-with-anxiety",
      postDate: new Date("2023-02-27"),
      description:
        "Strategies to manage anxiety while traveling and maintain mental wellness on the road.",
    },
    {
      key: "lifestyle-02",
      title: "Mindful Living: Finding Peace and Serenity in Everyday Chaos",
      slug: "mindful-living-finding-peace-and-serenity-in-everyday-chaos",
      postDate: new Date("2023-02-12"),
      description:
        "Practical mindfulness techniques to bring calm and presence to your daily life.",
    },
    {
      key: "lifestyle-03",
      title: "Sustainable Living: Eco-Friendly Choices for a Greener Life",
      slug: "sustainable-living-eco-friendly-choices-for-a-greener-life",
      postDate: new Date("2023-02-12"),
      description:
        "Simple changes you can make to reduce your environmental impact and live more sustainably.",
    },
    {
      key: "lifestyle-04",
      title: "The Art of Hygge: Cozy Living in a Fast-Paced World",
      slug: "the-art-of-hygge-cozy-living-in-a-fast-paced-world",
      postDate: new Date("2023-02-11"),
      description:
        "Embrace the Danish concept of hygge to create warmth, comfort, and contentment in your home.",
    },
    {
      key: "lifestyle-05",
      title: "Adventure Travel: Thrill-Seeker's Guide to Extreme Experiences 2",
      slug: "adventure-travel-thrill-seeker-s-guide-to-extreme-experiences-2",
      postDate: new Date("2023-02-09"),
      description:
        "Part two of our guide to the world's most exhilarating adventure travel experiences.",
    },
    {
      key: "lifestyle-06",
      title: "Adventure Travel: Thrill-Seeker's Guide to Extreme Experiences",
      slug: "adventure-travel-thrill-seeker-s-guide-to-extreme-experiences",
      postDate: new Date("2023-02-08"),
      description:
        "Discover heart-pounding adventures for those who crave excitement and challenge.",
    },
    {
      key: "lifestyle-07",
      title:
        "Northern Lights Adventures: Chasing Aurora Borealis in Scandinavia",
      slug: "northern-lights-adventures-chasing-aurora-borealis-in-scandinavia",
      postDate: new Date("2023-02-08"),
      description:
        "Your complete guide to witnessing the magical Northern Lights in Scandinavia.",
    },
    {
      key: "lifestyle-08",
      title: "Digital Detox Retreats: Reconnect with Nature and Yourself",
      slug: "digital-detox-retreats-reconnect-with-nature-and-yourself",
      postDate: new Date("2023-02-06"),
      description:
        "Discover retreats that help you unplug from technology and reconnect with the natural world.",
    },
    {
      key: "lifestyle-09",
      title: "Traveling with Pets: Tips for a Stress-Free Journey",
      slug: "traveling-with-pets-tips-for-a-stress-free-journey",
      postDate: new Date("2023-02-06"),
      description:
        "Essential advice for making travel with your furry companions safe and enjoyable.",
    },
    {
      key: "lifestyle-10",
      title: "Minimalist Lifestyle: Decluttering Your Life for More Freedom",
      slug: "minimalist-lifestyle-decluttering-your-life-for-more-freedom",
      postDate: new Date("2023-02-06"),
      description:
        "How embracing minimalism can create space for what truly matters in your life.",
    },
    {
      key: "lifestyle-11",
      title: "Healthy Habits for Travelers: Staying Fit on the Road",
      slug: "healthy-habits-for-travelers-staying-fit-on-the-road",
      postDate: new Date("2023-02-06"),
      description:
        "Practical tips to maintain your health and wellness while traveling.",
    },
  ],
  destination: [
    {
      key: "destination-01",
      title:
        "North America Road Trip: From Coast to Coast, Scenic Routes Await",
      slug: "north-america-road-trip-from-coast-to-coast-scenic-routes-await",
      postDate: new Date("2023-02-25"),
      description:
        "Explore the diverse landscapes and cultures of North America on an epic road trip adventure.",
    },
    {
      key: "destination-02",
      title: "Australia and New Zealand: Down Under Delights and Adventures",
      slug: "australia-and-new-zealand-down-under-delights-and-adventures",
      postDate: new Date("2023-02-25"),
      description:
        "Discover the natural wonders and unique experiences awaiting in Australia and New Zealand.",
    },
    {
      key: "destination-03",
      title: "Exploring Europe's Cultural Tapestry: Must-See Cities and Towns",
      slug: "exploring-europe-s-cultural-tapestry-must-see-cities-and-towns",
      postDate: new Date("2023-02-21"),
      description:
        "Immerse yourself in Europe's rich history, architecture, and diverse cultural heritage.",
    },
    {
      key: "destination-04",
      title: "South American Escapades: From Machu Picchu to the Amazon",
      slug: "south-american-escapades-from-machu-picchu-to-the-amazon",
      postDate: new Date("2023-02-19"),
      description:
        "Journey through South America's most iconic landscapes and ancient civilizations.",
    },
    {
      key: "destination-05",
      title: "Middle Eastern Marvels: Ancient History and Modern Splendor",
      slug: "middle-eastern-marvels-ancient-history-and-modern-splendor",
      postDate: new Date("2023-02-10"),
      description:
        "Explore the fascinating blend of ancient traditions and contemporary innovation in the Middle East.",
    },
    {
      key: "destination-06",
      title: "Island Paradise: Your Guide to Tropical Getaways in the Maldives",
      slug: "island-paradise-your-guide-to-tropical-getaways-in-the-maldives",
      postDate: new Date("2023-02-10"),
      description:
        "Experience ultimate luxury and natural beauty in the stunning Maldives archipelago.",
    },
    {
      key: "destination-07",
      title: "Caribbean Dreams: Sun, Sand, and Sea on a Tropical Escape",
      slug: "caribbean-dreams-sun-sand-and-sea-on-a-tropical-escape",
      postDate: new Date("2023-02-08"),
      description:
        "Your comprehensive guide to planning the perfect Caribbean vacation.",
    },
    {
      key: "destination-08",
      title: "African Safari: Wildlife Encounters in the Heart of the Savanna",
      slug: "african-safari-wildlife-encounters-in-the-heart-of-the-savanna",
      postDate: new Date("2023-02-06"),
      description:
        "Embark on an unforgettable safari adventure to witness Africa's incredible wildlife.",
    },
    {
      key: "destination-09",
      title:
        "The Wonders of Asia: Unforgettable Adventures Across the Continent",
      slug: "the-wonders-of-asia-unforgettable-adventures-across-the-continent",
      postDate: new Date("2023-02-06"),
      description:
        "Discover the diverse cultures, landscapes, and experiences that make Asia a traveler's paradise.",
    },
  ],
};

export const descriptions = {
  travel:
    "In our Travel category, we embark on a journey of exploration, sharing personal experiences, tips, and stories from globetrotters passionate about traversing the world's diverse landscapes and cultures.",
  lifestyle:
    "Discover the essence of a traveler's lifestyle in this category, where we delve into personal stories, insights, and recommendations from a seasoned globetrotter's perspective. Explore the world of travel, fashion, cuisine, and more through the lens of a dedicated explorer.",
  destination:
    "Explore the essence of a traveler's lifestyle in our Destination category, where we delve into personal stories, insights, and recommendations from a seasoned globetrotter's perspective. Discover the world of travel, fashion, cuisine, and more through the lens of a dedicated explorer.",
};

export const blogs: Blog[] = sortPostsByDate([
  ...data.travel,
  ...data.lifestyle,
  ...data.destination,
]);
