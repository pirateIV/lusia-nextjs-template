import React from "react";
import Image from "next/image";
import Divider from "@/components/layout/divider";
import { data } from "@/data/about";

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
