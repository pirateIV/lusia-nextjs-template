"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteLinks } from "@/data/nav";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";
import { cx } from "@/utils/cx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-8.5 px-16">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div>
            <Image
              src="/logo.svg"
              width="109"
              height="25"
              sizes="83.48px"
              alt="logo"
            />
          </div>
        </Link>

        <ul className="flex flex-nowrap items-center gap-7.5 transition-all">
          {siteLinks.pages.map((page) => (
            <li key={page.text}>
              <Link
                href={page.url}
                className={cx(
                  pathname === page.url && "line-through",
                  "font-semibold uppercase text-[13px]"
                )}
              >
                {page.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2.5">
          {siteLinks.socials.map((social) => (
            <li
              key={social.name}
              className="inline-flex items-center justify-center"
            >
              <Link
                href={social.url}
                className="group inline-flex items-center gap-1"
              >
                <social.icon />
                <span className="font-montserrat text-xs font-medium w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-[width] origin-left pointer-events-none">
                  {social.name}
                </span>
              </Link>
            </li>
          ))}
          <li className="ml-2.5">
            <button className="inline-flex items-center justify-center border p-1.25 rounded-full">
              <Icons.Magnifier />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
