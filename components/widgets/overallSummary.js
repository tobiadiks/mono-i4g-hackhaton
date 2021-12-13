import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverallSummaryItemComponent(props) {
  return (
    <>
      <div className="flex font-sans items-center my-2">
        <div className="text-blue-500 text-xl">
          <FontAwesomeIcon icon={props.icon} />
        </div>&nbsp;
        <div>
            <div className=" font-extralight">{props.item}
            </div>
            <div className="font-bold">{props.value}
            </div>
        </div>
      </div>
    </>
  );
}
