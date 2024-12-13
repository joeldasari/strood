import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col gap-8 flex-1 items-center justify-center">
      <form className="flex flex-col items-center w-[300px] gap-4">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input
          className="outline-none border border-gray-400 px-4 py-2 w-full rounded-full"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="outline-none border border-gray-400 px-4 py-2 w-full rounded-full"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-blue-600 w-full text-white hover:bg-blue-500"
        >
          Login
        </button>
        <p>Or</p>
        <button
          type="button"
          className="px-4 flex items-center justify-center gap-4 py-2 rounded-full w-full bg-white border border-gray-400"
        >
          <Image
            src="/google-icon.jpg"
            alt="google_icon"
            width={30}
            height={30}
          />
          <span>Continue with Google</span>
        </button>
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <span className="text-blue-600">Sign up</span>
      </p>
    </div>
  );
}
