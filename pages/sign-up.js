import TextInputComponent from "@components/inputs/textInput";
import PasswordInputComponent from "@components/inputs/passwordInput";
import PhoneInputComponent from "@components/inputs/phoneInput";
import SubmitButtonComponent from "@components/buttons/submitButton";
import MonoButtonComponent from "@components/buttons/monoButton";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState, useCallback } from "react";
import { Signup } from "endpoints/auth";
import { useRouter } from "next/dist/client/router";
export default function SignUpPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptSuccess, setScriptSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mono_id, setMonoId] = useState("");
  const route = useRouter();
  async function CreateUser() {
    const response = await Signup({
      username,
      email,
      password,
      mono_id,
    });
    console.log(typeof(response) );
    if (response.id && response.username) {
      localStorage.setItem("user", JSON.stringify(response));
      route.push('/dashboard')
    } else {
      alert("Something went wrong");
    }
  }
  const openMonoWidget = useCallback(async () => {
    const MonoConnect = (await import("@mono.co/connect.js")).default;

    const monoInstance = new MonoConnect({
      key: "test_pk_sMl03p8pyjXLtewvwUxx",
      onClose: () => console.log("Widget closed"),
      onLoad: () => setScriptLoaded(true),
      onSuccess: ({ code }) => {
        console.log(`Linked successfully: ${code}`, scriptSuccess);
        setMonoId(code);
        setScriptSuccess(true);
      },
    });

    monoInstance.setup();
    monoInstance.open();
  }, [scriptSuccess]);

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div className="w-full md:w-1/2 lg:w-1/2 md:h-screen lg:h-screen relative">
          <Image
            src="/analytics-frame.png"
            alt="Analytics-frame"
            layout="fill"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 md:overflow-y-scroll md:h-screen">
          <Link href={"/"} passHref>
            <div className="flex text-center justify-center align-middle">
              <Image
                src="/logo.png"
                alt="logo"
                height={56}
                width={124}
                className=" cursor-pointer"
                priority
              />
            </div>
          </Link>
          <div>
            <h2 className="p-3 md:pl-12 text-center md:text-left font-sans font-medium text-lg md:text-2xl">
              Sign up
            </h2>

            <form className="p-3 md:pl-12">
              <TextInputComponent
                label="Email address"
                placeholder="Enter your email address"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
              />
              <TextInputComponent
                label="Username"
                placeholder="Enter your username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                required
              />
              <PasswordInputComponent
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              {/* <PasswordInputComponent
                label="Confirm password"
                placeholder="Confirm your password"
                required
              /> */}
              <div className="flex flex-row justify-between md:w-3/4">
                <input className="mr-1" type={"checkbox"} />
                <div className="text-xs">
                  Creating an account means you are okay with our{" "}
                  <a className="text-blue-500" href="#">
                    Terms of Use
                  </a>{" "}
                  and have read our{" "}
                  <a className="text-blue-500" href="#">
                    Privacy Policy
                  </a>
                  .
                </div>
              </div>

              <div className="md:w-3/4">
                <MonoButtonComponent
                  scriptSuccess={scriptSuccess}
                  onClick={() => openMonoWidget()}
                  title="Connect your bank account"
                />
              </div>
              <div className="md:w-3/4">
                <SubmitButtonComponent
                  onClick={() => CreateUser()}
                  disabled={!scriptSuccess}
                  title="Create an account"
                />
              </div>

              <div className=" md:w-3/4 text-xs text-center ">
                Have an account?&nbsp;
                <Link href={"sign-in"} passHref>
                  <a className="text-blue-500" href="#">
                    Login here
                  </a>
                </Link>
                .
              </div>

              {/* <div className="flex flex-col justify-center align-middle md:w-3/4 text-xs font-bold mt-4 mb-4">
                <div className="text-center mx-auto">or sign up with:</div>
                <div className="text-center mx-auto text-2xl">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                  &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
