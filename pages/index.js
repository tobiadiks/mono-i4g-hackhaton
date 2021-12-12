import PrimaryButtonComponent from "@components/buttons/primaryButton";
import SecondaryButtonComponent from "@components/buttons/secondaryButton";
import Header from "@components/header";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import HeroServiceCardComponent from "@components/heros/heroServiceCard";
import ServiceRequestComponent from "@components/contact/serviceRequest";
export default function IndexPage() {
  const route = useRouter();
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-col md:flex-row w-full md:h-screen mt-6 px-4 md:px-8">
        <div className="md:w-1/2 w-full">
          <div className="text-3xl md:text-6xl font-serif font-bold md:mt-20">
            Experience a fresh way to track your{" "}
            <span className="text-blue-500">Income</span> and{" "}
            <span className="text-blue-500">Expense</span>
          </div>
          <div className="text-xl md:text-xl font-serif-Rubik font-light text-gray-500 md:font-light md:mt-4">
            Manage your clients, quotes, invoices and payments all in one place.
            Try it for free today!
          </div>

          <div className=" md:flex font-sans  md:mt-4">
            <div className="md:mr-6">
              <PrimaryButtonComponent
                onClick={() => {
                  route.push("/sign-up");
                }}
                title="CREATE A FREE ACCOUNT"
              />
            </div>
            <div>
              <SecondaryButtonComponent title="LEARN MORE" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full relative">
          <Image
            src="/hero-1.png"
            alt="hero-1"
            layout="fill"
            className=" cursor-pointer"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-col justify-center w-full md:h-screen  px-4 md:px-8">
        <div className="my-8 text-center font-serif font-bold text-2xl md:text-4xl">
          HOW YAFT CAN YAFT WORK FOR YOU
        </div>
        <div className="flex flex-col md:flex-row justify-center align-middle">
          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/logo.png"
              title="Financial Query Service"
              detail={
                "This service allows business and customers to query another customers account details to know if the customer meets custom defined financial criteria"
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/logo.png"
              title="Claiming Service"
              detail={
                "Our claims service allows clients to verify claims they have against each other to resolve any financial disputes in a bi-directional and faster way way"
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/logo.png"
              title="Financial Advice Service"
              detail={
                "Our aim is to help you take control and gain more peace of mind about your financial circumstances with access to excellent tailored products and services."
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/logo.png"
              title="Track Income and Expense"
              detail={
                "Looking for the simplest way to track your money? Our income & expense alternative budgeting tool will help you manage your finances with ease. "
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col justify-center w-full md:h-screen  px-4 md:px-8">
        <ServiceRequestComponent />
      </div>
    </div>
  );
}
