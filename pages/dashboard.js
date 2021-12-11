// import Image from "next/image";
// import Link from "next/link";
import { useState, useCallback } from "react";
export default function DashboardPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "test_pk_zORU2mvuC4P86prCJ7UU",
      onClose: () => console.log("Widget closed"),
      onLoad: () => setScriptLoaded(true),
      onSuccess: ({ code }) => console.log(`Linked successfully: ${code}`),
    });

    monoInstance.setup();
    monoInstance.open();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div
        className="bg-yellow-300 p-3 rounded-md cursor-pointer"
        onClick={() => openMonoWidget()}
      >
        Link your account
      </div>
    </div>
  );
}
