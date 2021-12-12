import cn from "classnames";

export default function SubmitButtonComponent(props) {
  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <button
        disabled={props.disabled}
          className={cn(
            `p-4 rounded-md my-2 ${ props.disabled ? "bg-gray-400" : "bg-blue-600"} text-white font-sans font-medium`,
           
          )}
          type="submit"
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
