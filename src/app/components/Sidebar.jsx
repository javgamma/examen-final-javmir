"use client";
import {
  BadgeCheck,
  Building2,
  LucideLayoutTemplate,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex fixed  h-screen flex-col justify-between border bg-white w-[300px] px-4 ">
      <div className="px-4 py-6 flex flex-col  ">
        <span className="flex  text-center items-center h-10 w-[80px]  rounded-full bg-orange-400 text-sm text-white font-bold p-2">
          Examen Final
        </span>

        <ul className="mt-6 flex flex-col ">
          <Link
            href="#"
            className="flex gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
          >
            <LucideLayoutTemplate size={20} />
            <span>Card Generator</span>
          </Link>

          <Link
            href="/digitalclock"
            className="flex gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <Users />
            Digital Clock
          </Link>

          <Link
            href="drilinginfo"
            className="flex gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <BadgeCheck />
            <span> Driling Info</span>
          </Link>

          <Link
            href="#"
            className="flex gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <Building2 />
            <span>Galeria de Cartas</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
