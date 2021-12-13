import cn from "classnames";

export default function SubmitButtonComponent(props) {
  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <div
          disabled={props.disabled}
          className={cn(
            `p-4 rounded-md my-2 ${
              props.disabled ? "bg-gray-400" : "bg-blue-600 cursor-pointer"
            } text-white font-sans font-medium text-center`
          )}
          onClick={props.disabled?()=>{}:props.onClick}
          type="submit"
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
