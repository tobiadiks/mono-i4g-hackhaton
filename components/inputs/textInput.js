export default function TextInputComponent(props) {
  return (
    <>
      <div className="flex flex-col font-sans my-2">
        <div>{props.label}</div>
        <input
          className="border p-3 md:w-3/4 focus:outline-none text-sm"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={props.type ? props.type : "text"}
          required={props.required}
        />
      </div>
    </>
  );
}
