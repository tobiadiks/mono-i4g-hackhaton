 import Image from "next/image";
// import Link from "next/link";
import PrimaryButtonComponent from "@components/buttons/primaryButton";
import SideNavigationComponent from "@components/navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import WidgetContainerComponent from "@components/widgets/widgetContainer";

import { VictoryBar, VictoryChart } from "victory";
export default function ExpensePage() {
  

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

        <div className="flex w-full justify-start text-3xl mt-6">Financial query</div>

        {/* charts */}
        <div className="w-full flex flex-col  justify-center">
          <div className="w-1/2 px-2  mx-auto mt-16 relative">
            <Image
            height={333}
            width={425}
            alt="empty"
            src={'/empty.png'}/>
            <div className="text-center text-2xl text-gray-500 font-sans">You have no query</div>
            <PrimaryButtonComponent title="Create a new query" onClick={()=>{}}/>
          </div>

          <div className="w-full px-2">{/* Table */}
          
          
</div>
        </div>
      </div>
    </div>
  );
}
