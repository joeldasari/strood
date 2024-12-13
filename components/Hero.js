import { Fugaz_One } from "next/font/google";
import Calender from "./Calender";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <div className="py-4 md:py-8 flex flex-col gap-4 sm:gap-8">
      <h1 className={`${fugaz.className} text-center text-6xl sm:text-7xl`}>
        <span className="text-blue-600">Strood</span> helps you track your{" "}
        <span className="text-blue-600">daily</span> mood!
      </h1>
      <p
        className={`w-full max-w-[300px] sm:max-w-[500px] mx-auto text-base sm:text-lg md:text-xl text-center`}
      >
        Create your mood record and see how you feel on{" "}
        <span className="font-semibold">each day of the year.</span>
      </p>
      <div className="flex justify-center items-center gap-4">
        <button className="btn lightBtn">Sign up</button>
        <button className="btn darkBtn">Login</button>
      </div>
      <Calender />
    </div>
  );
}
