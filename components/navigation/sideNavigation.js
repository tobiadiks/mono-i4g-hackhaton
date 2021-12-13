import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMoneyBill,
  faScrewdriver,
  faTable,
  faFileExcel,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link'

import { faKeybase } from "@fortawesome/free-brands-svg-icons";
export default function SideNavigationComponent() {
  return (
    <Link className="md:flex flex-col md:h-screen w-full hidden bg-white">
      
      <div className="pl-6 mt-4">
      <Link href='/dashboard' passHref><Image
          alt="logo-small"
          src={"/logo-small.png"}
          height={37}
          width={44}
        /></Link>
      </div>
      
      <ul className=" list-none font-sans font-medium  mt-16 pl-6">
        <Link href='/dashboard' passHref>
        <li className="my-4 cursor-pointer">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faTable} />
            &nbsp;
          </span>{" "}
          Dashboard
        </li>
        </Link>
        <Link href='/income' passHref>
        <li className="my-4 cursor-pointer">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faDollarSign} />
            &nbsp;
          </span>{" "}
          Income
        </li>
        </Link>
        <li className="my-4">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faMoneyBill} />
            &nbsp;
          </span>{" "}
          Expense
        </li>
        <li className="my-4">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faFileExcel} />
            &nbsp;
          </span>{" "}
          Financial query
        </li>
        <li className="my-4">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faKeybase} />
            &nbsp;
          </span>{" "}
          Dispute
        </li>
        <div className="w-full  "><hr></hr></div>

        <li className="mt-8">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faScrewdriver} />
            &nbsp;
          </span>{" "}
          Settings
        </li>
        <li className="my-4">
          <span className="text-white">
            <FontAwesomeIcon icon={faCircle} />
            &nbsp;
          </span>
          Pending requests
        </li>
      </ul>
    </div>
  );
}
