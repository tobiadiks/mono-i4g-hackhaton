import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import PrimaryButtonComponent from "./buttons/primaryButton";
import { useRouter } from "next/dist/client/router";
export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const route = useRouter();
  return (
    <header className=" shadow-lg w-full">
      <div className="flex flex-wrap items-center justify-between align-middle my-auto  px-4 py-3 mx-auto md:flex-no-wrap md:px-8">
        <div className="flex">
          <Image
            src="/logo.png"
            width={86}
            height={40}
            priority
            alt="Yaft logo"
          />
          
          <ul
          className={cn(
            "md:flex flex-col md:ml-12  md:flex-row md:items-center md:justify-center text-sm md:text-base w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/" },
            { title: "Service", route: "#" },
            { title: "Pricing", route: "#" },
            { title: "Blog", route: "#" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:mx-6" key={title}>
              <Link href={route}>
                <a className="block text-gray-800">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
          
        </div>

        <div className="flex">
        <ul
          className={cn(
            "md:flex flex-col  md:flex-row md:items-center md:justify-center text-sm md:text-base w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Login", route: "/sign-in" },
            
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:mx-6" key={title}>
              <Link href={route}>
                <a className="block text-gray-800">{title}</a>
              </Link>
            </li>
          ))}
          <PrimaryButtonComponent title="Register" onClick={()=>{route.push('/sign-up')}}/>
        </ul>
          
          </div>
      </div>
    </header>
  );
}
