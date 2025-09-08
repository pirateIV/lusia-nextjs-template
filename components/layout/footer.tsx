import React from "react";
import NewsletterSubscription from "../newsletter-subscription";

export default function Footer() {
  return (
    <footer>
      <NewsletterSubscription />
      <div className="py-12.5 px-6">
        <div className="flex items-center justify-center">
          <button className="inline-flex text-sm gap-2.5 items-center text-white justify-center bg-surface-dark py-2.5 px-5 rounded-[100px]">
            <span className="font-semibold">@LUSIA ON INSTAGRAM</span>{" "}
            <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="pt-12.5 px-15">
        <div className="max-w-305 mx-auto flex items-center justify-between py-7.5 border-t border-overlay-dark">
          <p className="text-sm">&copy; {new Date().getFullYear()} Lusia. Theme by Marcframe.</p>
          <button className="inline-flex uppercase text-sm gap-2.5 items-center text-white justify-center bg-surface-dark py-2.5 px-5 rounded-[100px]">
            Use Template
          </button>
        </div>
      </div>
    </footer>
  );
}
