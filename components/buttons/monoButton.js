// import Image from "next/image";
// import Link from "next/link";
import { useState, useCallback } from "react";
import cn from "classnames";
export default function MonoButtonComponent(props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptSuccess, setScriptSuccess] = useState(false);

  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "test_pk_zORU2mvuC4P86prCJ7UU",
      onClose: () => console.log("Widget closed"),
      onLoad: () => setScriptLoaded(true),
      onSuccess: ({ code }) => {
        console.log(`Linked successfully: ${code}`,scriptSuccess);
        setScriptSuccess(true);
      },
    });

    monoInstance.setup();
    monoInstance.open();
  }, [scriptSuccess]);

  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <button
          disabled={props.disabled}
          onClick={() => openMonoWidget()}
          className={cn(
            `p-4 rounded-md my-2 ${
              props.disabled ? "bg-gray-400" : "bg-blue-600"
            } text-white font-sans font-medium ${scriptSuccess?'hidden':''}`
          )}
        >
          {props.title}
        </button>
        <div className={` text-green-500 text-medium font-sans text-center justify-center align-middle ${scriptSuccess?'flex':'hidden'}`}>
          Connected Successfully
        </div>
      </div>
    </>
  );
}
