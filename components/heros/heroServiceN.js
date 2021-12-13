import Image from "next/image";
export default function HeroServiceNardComponent(props) {
  return (
    <>
      <div className="p-2 hover:bg-blue-500 hover:text-white flex justify-between flex-col w-full h-full border border-blue-500">
        
        <div className=" font-serif text-2xl font-bold my-2 text-center">
          {props.title}
        </div>
        <div className=" font-serif-Rubik text-center text-lg text-justify">
          {props.detail}
        </div>
      </div>
    </>
  );
}
