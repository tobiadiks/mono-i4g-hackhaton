import cn from "classnames";
export default function PrimaryButtonComponent(props) {
  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <button
          className={cn(
            `p-4 rounded-md my-2 ${ props.disabled ? "bg-gray-400" : "bg-blue-600"} text-white font-sans font-medium`,
           
          )}
          onClick={props.onClick}
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
