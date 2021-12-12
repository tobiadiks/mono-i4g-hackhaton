import TextInputComponent from "@components/inputs/textInput";
import PasswordInputComponent from "@components/inputs/passwordInput";
import SubmitButtonComponent from "@components/buttons/submitButton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function ServiceRequestComponent() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse shadow-2xl  justify-between w-full">
        <div className="w-full md:w-1/2 lg:w-1/2 md:h-screen lg:h-screen relative">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-2xl md:text-6xl">
              Have questions in your mind?
            </h2>
          </div>
          <div className="p-3 md:pl-12 text-center md:mt-8 md:text-left font-serif-Rubik font-light text-medium text-gray-500 md:text-xl">
            If you have questions or need assistance, please do not hesitate and
            contact us by email at{" "}
            <span className="text-blue-500">support@yaft.com</span> or via{" "}
            <span className="text-blue-500">Whatsapp</span>
          </div>

          <div className="p-3 md:pl-12 text-center md:mt-8 md:text-left font-serif-Rubik font-light text-medium text-gray-500 md:text-xl">
            Feel free to contact us here 
            <p className="text-black">
            Call: 234 8062 853 067
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2  md:h-screen">
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-serif font-bold text-2xl md:text-2xl">
              Find out how our service works.
            </h2>
            <div className="px-3 md:pl-12 text-center md:text-left font-serif-Rubik font-light text-gray-500 text-medium md:text-2xl">
              Secure a 30 minute session with one of our staff members.
            </div>

            <form className="p-3 md:pl-12">
              <TextInputComponent
                label="Email address"
                placeholder=""
                type="email"
                required
              />

              <div className="md:w-3/4">
                <SubmitButtonComponent title="SEND REQUEST" />
              </div>

              <div className=" md:w-3/4 text-xs text-center  text-gray-500">
                We respond within 48 hours
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
