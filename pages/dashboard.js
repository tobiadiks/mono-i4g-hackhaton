// import Image from "next/image";
// import Link from "next/link";
import SideNavigationComponent from "@components/navigation/sideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDollarSign,
  faFileExcel,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import WidgetContainerComponent from "@components/widgets/widgetContainer";
import OverallSummaryItemComponent from "@components/widgets/overallSummary";
import { faKeybase } from "@fortawesome/free-brands-svg-icons";
import { VictoryStack, VictoryBar, VictoryChart } from "victory";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { GetOverallSummary,GetSpendSummary } from "endpoints/dashboard";
export default function DashboardPage() {
  const route = useRouter();
  const [user, setUsername] = useState('');
  const [overallSpending, setOverallSpending] = useState('');
  const [overallSummary, setOverallSummary] = useState('');
  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser===null||undefined) {
      route.push("/sign-in");
    } else {
      setUsername(JSON.parse(localUser));
    }
  }, [ route]);

  const FetchOverallSummary = useCallback(async()=>{
    
    const response = await GetOverallSummary(user.id)
    console.log((response) );
    if(response){
      setOverallSummary(response)
    }
    else{
      alert('Something went wrong')
    }
  },[user.id])
  
  useEffect(() => {
    FetchOverallSummary()
  },[FetchOverallSummary])

  const FetchSpendSummary = useCallback(async()=>{
    
    const response = await GetSpendSummary(user.id)
    console.log((response) );
    if(response){
      setOverallSpending(response)
    }
    else{
      alert('Something went wrong')
    }
  },[user.id])
  
  useEffect(() => {
    FetchSpendSummary()
  },[FetchSpendSummary])

  
    
  

  if(user)
    {return (
      <div className="flex flex-col md:flex-row w-full  px-4 md:px-0 bg-gray-100 md:h-screen">
        <div className=" md:w-1/5 hidden md:block">
          <SideNavigationComponent />
        </div>
        <div className=" md:w-4/5 w-full pl-4 pr-8 mt-4 md:h-screen overflow-x-scroll">
          <div className="flex w-full justify-end">
            <div className=" text-base md:mx-16">{user.username}</div>
  
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
  
          <div className="flex w-full justify-start text-3xl mt-6">Dashboard</div>
          <div className="flex w-full justify-start text-xl md:font-extralight my-4">
            Welcome, {user.username}! Here&apos;s how to get the most out of yaft.
          </div>
          {/* charts */}
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-1/2 px-2 ">
              <WidgetContainerComponent title={"Spend summary"}>
                <div className="py-4 px-2">
                  <VictoryStack
                    containerComponent={<VictoryChart />}
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                    colorScale={["#a9adff", "#1652f0"]}
                  >
                    <VictoryBar
                      data={[
                        { x: "2000", y: 8 },
                        { x: "2001", y: 3 },
                        { x: "2002", y: 4 },
                        { x: "2003", y: 2 },
                        { x: "2004", y: 9 },
                        { x: "2005", y: 12 },
                      ]}
                    />
                    <VictoryBar
                      data={[
                        { x: "2000", y: 8 },
                        { x: "2001", y: 3 },
                        { x: "2002", y: 4 },
                        { x: "2003", y: 2 },
                        { x: "2004", y: 9 },
                        { x: "2005", y: 12 },
                      ]}
                    />
                  </VictoryStack>
                </div>
              </WidgetContainerComponent>
            </div>
            <div className="w-1/2 px-2 ">
              <WidgetContainerComponent title={"Overall summary"}>
                <div className="pl-16 py-12">
                  <OverallSummaryItemComponent
                    item="Total Expense"
                    value={'NGN '+parseFloat(overallSummary.totalExpense/100) }
                    icon={faMoneyBill}
                  />
  
                  <OverallSummaryItemComponent
                    item="Total Income"
                    value={'NGN '+parseFloat(overallSummary.totalIncome/100) }
                    icon={faDollarSign}
                  />
  
                  <OverallSummaryItemComponent
                    item="Total Query"
                    value={parseInt(overallSummary.totalQuery) }
                    icon={faFileExcel}
                  />
  
                  <OverallSummaryItemComponent
                    item="Total Disputes"
                    value={parseInt(overallSummary.totalDisputes) }
                    icon={faKeybase}
                  />
                </div>
              </WidgetContainerComponent>
            </div>
  
            <div className="w-1/2 px-2 ">
              <WidgetContainerComponent title={"Pending Queries"}>
                <div className="px-16 py-12">
                  <div className=" w-full text-lg font-light text-gray-400 text-center">
                    No pending queries
                  </div>
                </div>
              </WidgetContainerComponent>
            </div>
            <div className="w-1/2 px-2 ">
              <WidgetContainerComponent title={"Pending Disputes"}>
                <div className="px-16 py-12">
                  <div className=" w-full text-lg font-light text-gray-400 text-center">
                    No pending disputes
                  </div>
                </div>
              </WidgetContainerComponent>
            </div>
          </div>
        </div>
      </div>
    );}
    else{return null}
  }
  
