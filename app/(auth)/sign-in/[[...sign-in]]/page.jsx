import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-black dark:bg-gray-900"> {/* Adjust this value */}
      <div className="flex justify-center min-h-[calc(100vh-84px)]">

        {/* Background Image (Visible on medium and larger screens) */}
        {/* <div
          className="hidden md:block lg:w-2/5 mt-1 mb-1 w-full  "
          style={{
            backgroundImage: "url('/login.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div> */}

        {/* SignIn Form Container */}
        <div className="flex items-center  max-w-5xl p-4 ">
          <div className="w-full">

            <div > 
            <SignIn hideBranding={true}/>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}