import React from "react";

export default function NewsletterSubscription() {
  return (
    <div className="py-12.5 px-15 bg-background-light">
      <div className="max-w-305 mx-auto">
        <div className="w-[35%] mx-auto flex flex-1 flex-col gap-10 text-center">
          <div>
            <p className="font-medium text-accent-orange text-sm">Join My Newsletter</p>
            <h3 className="text-[28px]/[1.2em] font-playfair font-semibold">
              Get the best blog stories into your inbox!
            </h3>
          </div>
          <form className="flex flex-col gap-2.5">
            <input
              type="email"
              className="p-3.75 bg-[#ebebeb] text-sm rounded-lg"
              placeholder="name@email.com"
            />
            <button className="p-3.75 font-semibold text-white text-sm bg-background-dark rounded-lg cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
