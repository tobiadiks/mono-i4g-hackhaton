

export default function SubmitButtonComponent(props) {
    return (
      <>
        <div className="flex flex-col font-sans my-2">
          <button className="p-4 rounded-md my-2 bg-blue-600 text-white font-sans font-bold" type="submit">{props.title}</button>
        </div>
      </>
    );
  }
  