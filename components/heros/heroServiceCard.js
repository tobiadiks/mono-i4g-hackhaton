import Image from "next/image";
export default function HeroServiceCardComponent(props) {
  return (
    <>
      <div className="p-2 hover:bg-blue-500 hover:text-white flex justify-between flex-col w-full h-full border border-blue-500">
        <Image alt={props.alt} src={props.src} height={50} width={50} />
        <div className=" font-serif font-bold my-2 text-center">
          {props.title}
        </div>
        <div className=" font-serif-Rubik text-center text-sm">
          {props.detail}
        </div>
      </div>
    </>
  );
}
