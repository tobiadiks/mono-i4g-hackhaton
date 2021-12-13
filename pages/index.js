import PrimaryButtonComponent from "@components/buttons/primaryButton";
import SecondaryButtonComponent from "@components/buttons/secondaryButton";
import Header from "@components/header";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import HeroServiceCardComponent from "@components/heros/heroServiceCard";
import HeroServiceNCardComponent from "@components/heros/heroServiceN";
import ServiceRequestComponent from "@components/contact/serviceRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "@components/footer";
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

      <div className="flex flex-col md:flex-col justify-center w-full my-12  px-4 md:px-8">
        <div className="my-8 text-center font-serif font-bold text-2xl md:text-4xl">
          HOW CAN YAFT WORK FOR YOU
        </div>
        <div className="flex flex-col md:flex-row justify-center align-middle">
          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/h1.png"
              alt="h1"
              title="Financial Query Service"
              detail={
                "This service allows business and customers to query another customers account details to know if the customer meets custom defined financial criteria"
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/h2.png"
              alt="h2"
              title="Claiming Service"
              detail={
                "Our claims service allows clients to verify claims they have against each other to resolve any financial disputes in a bi-directional and faster way way"
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/h3.png"
              alt="h3"
              title="Financial Advice Service"
              detail={
                "Our aim is to help you take control and gain more peace of mind about your financial circumstances with access to excellent tailored products and services."
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceCardComponent
              src="/h4.png"
              alt="h4"
              title="Track Income and Expense"
              detail={
                "Looking for the simplest way to track your money? Our income & expense alternative budgeting tool will help you manage your finances with ease. "
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-col justify-center w-full my-12  px-4 md:px-8">
        <ServiceRequestComponent />
      </div>

      <div className="flex flex-col md:flex-col justify-center w-full md:h-screen  px-4 md:px-8">
        <div className="my-8 text-center font-serif font-bold text-2xl md:text-4xl">
          WHY CHOOSE US?
        </div>
        <ul className="flex justify-between font-sans font-semibold">
          <li className=" text-lg">
            <FontAwesomeIcon className="text-blue-500" icon={faCheckDouble} />{" "}
            In-depth guides to help improve finance
          </li>
          <li className=" text-lg">
            <FontAwesomeIcon className="text-blue-500" icon={faCheckDouble} />{" "}
            Tools and calculators to help keep track and plan ahead
          </li>
          <li className=" text-lg">
            <FontAwesomeIcon className="text-blue-500" icon={faCheckDouble} />{" "}
            Support over the phone and online
          </li>
        </ul>
        <div className="mt-6 flex justify-center">
          <Image
            alt="yaft-peeps"
            src="/yaft-peeps.png"
            height={552}
            width={823}
          />
        </div>

        <div className="bg-blue-500 text-white text-4xl my-4 p-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} />{" "}
          <span className=" mx-6 font-serif font-bold">
            Ready to get started?
          </span>{" "}
          <div
            className="border text-lg p-3 rounded-md cursor-pointer"
            onClick={() => {
              route.push("/sign-up");
            }}
          >
            SIGN UP NOW
          </div>
        </div>

        <div className="mt-8 text-center font-serif font-bold text-2xl md:text-4xl">
          3 PILLARS THAT SUPPORT YOUR SUCCESS
        </div>

        <div className="text-xl md:text-xl font-serif-Rubik font-light text-gray-800 md:font-light md:mt-2 text-center">
          We&apos;ve built a system that deliver meaningful financial
          intelligence that you can trust. Let us prove our value to you.
        </div>

        <div className="mt-16 mb-16 flex flex-col md:flex-row justify-center align-middle">
          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceNCardComponent
              title="Experience"
              detail={
                "Our team has designed 3 of the leading consolidated investment reporting platforms, allowing us to identify and fix the functional gaps in the industry"
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceNCardComponent
              title="Technology"
              detail={
                "Our data model delivers on the promise of personalized experiences, making us the gold standard for mass-personalization with global scale."
              }
            />
          </div>

          <div className=" md:w-1/5 my-4 md:my-0 md:mx-1">
            <HeroServiceNCardComponent
              title="Service"
              detail={
                "Our support gives you peace of mind regardless of complexity or financial savvy.Our support model is based on serving the most demanding individuals and businesses"
              }
            />
          </div>
        </div>
        
      </div>
     
    </div>
  );
}
