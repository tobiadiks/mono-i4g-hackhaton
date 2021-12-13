import Image from "next/image";
export default function WidgetContainerComponent(props) {
  return (
    <>
      <div className="w-full font-sans my-4">
        <div className="w-full bg-gray-200 p-4 flex justify-between">
          <div className="text-2xl">{props.title}</div>
          <div className="text-lg">
            <select className=" bg-none">
              <option>This year</option>
            </select>
          </div>
        </div>
        <div className="w-full h-full bg-white">{props.children}</div>
      </div>
    </>
  );
}
