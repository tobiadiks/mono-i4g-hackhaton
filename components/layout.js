import Header from "./header";
import Footer from "./footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="w-full  mx-auto hidden md:flex md:flex-1">
        {props.children}
      </main>
      <main className="w-full flex-col text-center justify-center  mx-auto flex md:hidden md:flex-1">
      <div className="px-4 mt-2">
          <Image src="/logo.png" alt="logo" width={86} height={40} />
        </div>
        <div className="px-4 mt-8 text-lg font-sans">
          Please switch to desktop for best experience on Yaft
        </div>
        <div className="px-4 text-2xl text-blue-500">
          <FontAwesomeIcon icon={faDesktop} />
        </div>
        
      </main>

      {/* <Footer /> */}
    </div>
  );
}
