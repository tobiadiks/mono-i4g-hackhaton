export default function SecondaryButtonComponent(props) {
  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <button
          className="p-4 rounded-md my-2 border border-gray-800 text-gray-800 font-sans font-medium"
          onClick={props.onClick}
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
