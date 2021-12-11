import Image from "next/image";
import Link from "next/link";
export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to  Yaft.
      </h2>

<Link href={'/sign-up'} passHref><h2 className="p-3 text-white mb-3 font-bold bg-blue-600 md:text-2xl">
        Sign up
      </h2></Link>
      
    </div>
  );
}
