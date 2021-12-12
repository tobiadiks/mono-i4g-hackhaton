// import Image from "next/image";
// import Link from "next/link";
import SideNavigationComponent from "@components/navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState, useCallback } from "react";
export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row w-full  px-4 md:px-0 bg-gray-100 md:h-screen">
      <div className=" md:w-1/5 hidden md:block">
        <SideNavigationComponent />
      </div>
      <div className=" md:w-4/5 w-full pl-4 pr-8 mt-4 md:h-screen overflow-x-scroll">
        <div className="flex w-full justify-end">
          <div className=" text-base md:mx-16">Kosi Olabanji</div>
          <div>
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>

        <div className="flex w-full justify-start text-3xl mt-6">Dashboard</div>
        <div className="flex w-full justify-start text-xl md:font-extralight mt-4">
          Welcome, Kosi! Here&apos;s how to get the most out of yaft.
        </div>
      </div>
    </div>
  );
}
