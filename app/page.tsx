import Link from "next/link";
import React from "react";
import { IoLogoWebComponent } from "react-icons/io5";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import { auth } from "@clerk/nextjs/server";

function page() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
      <Features />
    </div>
  );
}

function Features() {
  const features = [
    {
      id: 1,
      name: "Centralized Component Library",
      icon: <StorageRoundedIcon className="text-sky-500 text-[32px]" />,
      description: `Organize all your React components in a centralized library. Easily browse, search, and access your saved components whenever you need them`,
    },
    {
      id: 2,
      name: "Reusable Components",
      icon: <CodeRoundedIcon className="text-sky-500 text-[32px]" />,
      description: `Create and edit your React components directly within our intuitive editor. Write JSX code with syntax highlighter and instant preveiws`,
    },
    {
      id: 3,
      name: "Version Control & History",
      icon: <ChangeHistoryRoundedIcon className="text-sky-500 text-[32px]" />,
      description: `Create and edit your React components directly within our intuitive editor. Write JSX code with syntax highlighter and instant preveiws`,
    },
  ];
  return (
    <section className=" py-12 bg-slate-50 mt-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center">Key Features</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-sky-500 text-center">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Manage & Create Your React Components
        <span className={`text-sky-500`}>Effortlessly</span>
      </h2>

      <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        veritatis eius inventore, quia incidunt quasi magnam temporibus in
        excepturi? Eum?
      </p>
      <button
        className={`bg-sky-500 rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-sky-600`}
        type="button"
      >{`Let's get started:`}</button>
    </div>
  );
}
function Navbar() {
  return (
    <nav className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      {/* // Icon COntainer  */}
      <div className="bg-sky-500 flex items-center justify-center p-[6px] rounded-md">
        {/* Icon  */}
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <IoLogoWebComponent className="text-white text-[22px]" />
        </div>
      </div>

      {/* App Name  */}
      <div className="flex gap-1 text-[22px]">
        <span className={`font-bold text-sky-500`}>Comp</span>
        <span className="text-slate-600">Shelf</span>
      </div>
    </div>
  );
}

function Buttons() {
  const { userId } = auth();
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      {!userId ? (
        <>
          <Link href="/sign-in">
            <button
              className={`max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md hover:bg-sky-600`}
            >
              Sign In
            </button>
          </Link>
          <Link href="sign-up">
            <button
              className={`max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md hover:bg-sky-600`}
            >
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <Link href="/dashboard">
          <button
            className={`max-sm:w-full text-sm border border-sky-500 text-white bg-sky-500 p-[8px] px-6 rounded-md hover:bg-sky-600`}
          >
            Dashboard
          </button>
        </Link>
      )}
    </div>
  );
}

export default page;
