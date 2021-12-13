// import Image from "next/image";
// import Link from "next/link";

import SideNavigationComponent from "@components/navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import WidgetContainerComponent from "@components/widgets/widgetContainer";

import { VictoryBar, VictoryChart } from "victory";
export default function IncomePage() {
  

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

        <div className="flex w-full justify-start text-3xl mt-6">Income</div>

        {/* charts */}
        <div className="w-full flex flex-col  justify-center">
          <div className="w-1/2 px-2  mx-auto">
            <WidgetContainerComponent title={"Income summary"}>
              <div className="py-4 px-2">
                <VictoryChart
                  domainPadding={10}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                  }}
                >
                  <VictoryBar
                    style={{ data: { fill: "#1652f0" } }}
                    data={[
                      { x: "2000", y: 8 },
                      { x: "2001", y: 3 },
                      { x: "2002", y: 4 },
                      { x: "2003", y: 2 },
                      { x: "2004", y: 9 },
                      { x: "2005", y: 12 },
                    ]}
                  />
                </VictoryChart>
              </div>
            </WidgetContainerComponent>
          </div>

          <div className="w-full px-2">{/* Table */}
          
          
</div>
        </div>
      </div>
    </div>
  );
}
