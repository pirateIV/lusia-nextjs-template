"use client";

import React from "react";
import NewsletterSubscription from "./newsletter-subscription";
import { usePathname } from "next/navigation";
import ButtonLink from "../button-link";

export default function Footer() {
  const pathname = usePathname();

  const is404Page = pathname !== "/404";

  console.log(pathname, is404Page);

  return (
    <footer>
      {is404Page && <NewsletterSubscription />}
      <div className="py-12.5 px-6">
        <div className="flex items-center justify-center">
          <button className="inline-flex text-sm gap-2.5 items-center text-white justify-center bg-surface-dark py-2.5 px-5 rounded-[100px]">
            <span className="font-semibold text-nowrap">
              @LUSIA ON INSTAGRAM
            </span>{" "}
            <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="px-4 py-7.5 md:pt-12.5 md:px-15">
        <div className="max-w-305 mx-auto flex items-center justify-between py-7.5 border-t border-overlay-dark max-md:gap-3.75 max-md:flex-col">
          <p className="text-sm">
            {/* &copy; {new Date().getFullYear()} Lusia. Theme by Marcframe. */}
          </p>
          <ButtonLink href="/">Use Template</ButtonLink>
        </div>
      </div>
    </footer>
  );
}
