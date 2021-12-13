// import Image from "next/image";
// import Link from "next/link";

import cn from "classnames";
export default function MonoButtonComponent(props) {
 

  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <button
          disabled={props.disabled}
          onClick={props.onClick}
          className={
            `p-4 rounded-md my-2 ${
              props.disabled ? "bg-gray-400" : "bg-blue-600"
            } text-white font-sans font-medium ${props.scriptSuccess?'hidden':''}`
          }
        >
          {props.title}
        </button>
        <div className={` text-green-500 text-medium font-sans text-center justify-center align-middle ${props.scriptSuccess?'flex':'hidden'}`}>
          Connected Successfully
        </div>
      </div>
    </>
  );
}
