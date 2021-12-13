import TextInputComponent from "@components/inputs/textInput";
import PasswordInputComponent from "@components/inputs/passwordInput";
import SubmitButtonComponent from "@components/buttons/submitButton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState, useCallback } from "react";
import { Signin } from "endpoints/auth";
import { useRouter } from "next/dist/client/router";

export default function SignInPage() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const route = useRouter();
  async function LoginUser(){
    const response = await Signin({
username,
password,
    })
    console.log(typeof(response) );
    if(response.id && response.username){
      localStorage.setItem('user',JSON.stringify(response))
      route.push('/dashboard')
    }
    else{
      alert('Something went wrong')
    }
  }

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
              Welcome back!
            </h2>

            <form className="p-3 md:pl-12">
              <TextInputComponent
                label="Username"
                placeholder="Enter your username"
                type="text"
                onChange={(e)=>{setUsername(e.target.value)}}
                value={username}
                required
              />

              <PasswordInputComponent
                label="Password"
                placeholder="Enter your password"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                required
              />

              <div className="md:w-3/4">
                <SubmitButtonComponent title="Login to account" onClick={LoginUser} />
              </div>

              <div className=" md:w-3/4 text-xs text-center ">
                Don&apos;t have an account?&nbsp;
                <Link href={"/sign-up"} passHref>
                  <a className="text-blue-500" href="#">
                    Signup here
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
