import React from "react";
import Image from "next/image";
import Divider from "@/components/layout/divider";

const data = {
  author: "Lusia Bierhoff",
  about:
    "I'm a traveler, wanderer, explorer, and adventurer of life's great journey.",
  quote:
    "Embrace the unknown; it's where life's most beautiful adventures unfold.",
  summary:
    "Ever since I can recall, I've been captivated by the allure of travel. I've consistently been the one who perpetually daydreamed about far-off places and diverse cultures. Crafting itineraries that pushed my boundaries, allowing me to grasp a profound insight into the world.",
  paragraphs: [
    "Ever since I can recall, I've been captivated by the allure of travel. I've consistently been the one who perpetually daydreamed about far-off places and diverse cultures. Crafting itineraries that pushed my boundaries, allowing me to grasp a profound insight into the world.",
    "Anticipate the presence of a train at any moment. Trains operate around the clock on various tracks and directions. Don't be deceived by a train's proximity and speed. Estimating the distance and speed of a train can be challenging, especially at night. If you spot a train, exercise caution and wait.",
    "Be aware that trains cannot stop or change direction abruptly. When required to yield, expect a significant stopping distance. A loaded freight train traveling at 55 miles per hour, for instance, necessitates over a mile to come to a halt. When crossing gates are lowered or lights are flashing, come to a stop and patiently wait. Only proceed once the gates are raised, and the red lights have ceased flashing. Additionally, remember that when on foot, it's both illegal and perilous to be on or near railroad cars and tracks.",
    "These safety recommendations originate from Voith Turbo's experts in York, PA, a company that specializes in developing braking systems to enhance train travel. The innovative railcar, designed to save time and potentially lives, is gaining traction. These versatile Diesel Multiple Units (DMUs) enable seamless travel from suburban stations to city stations without the need to switch locomotives. According to Colorado Railcar Manufacturing, the company behind these cars, each DMU combines propulsion systems with passenger accommodations, accommodating 90 passengers and pulling additional motorized coaches.",
  ],
};

export default function Page() {
  return (
    <div className="max-sm:px-3 px-7 pb-7.5 md:px-7 md:pb-10 lg:px-15">
      <div className="w-full max-w-304 mx-auto">
        <div className="relative">
          <div className="aspect-[2/1] md:aspect-[3.6/1]"></div>
          <div className="absolute top-0 inset-x-0 aspect-[1.4/1] md:aspect-[2.5/1] lg:aspect-[2.7/1] overflow-hidden">
            <Image
              src="/images/portrait.jpg"
              sizes="min(max(100vw - 120px, 1px), 1220px)"
              className="size-full object-cover"
              width="6000"
              height="4000"
              alt="forest"
              priority
            />
          </div>
          <div className="relative flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/author.png"
              width="800"
              height="800"
              className="rounded-full size-37.5 md:size-45 lg:size-50"
              alt="author's profile picture"
            />
            <div className="space-y-2.5 text-center w-full md:w-[45%] lg:w-[35%]">
              <h2 className="text-3xl font-semibold">{data.author}</h2>
              <p>{data.about}</p>
            </div>
          </div>
          <Divider />
          <div className="px-5 py-7.5 text-center max-sm:p-0">
            <h3 className="text-2xl text-balance">"{data.quote}"</h3>
          </div>
          <Divider />
          <div className="text-sm">
            <p>{data.summary}</p>
            <div></div>
            <div className="space-y-2.5">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
