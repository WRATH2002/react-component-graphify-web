import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { shortDescription } from "./utils/constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Files01Icon, GridIcon } from "@hugeicons/core-free-icons";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Copied to clipboard!", {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        color="#00D390"
        strokeWidth={3}
        fill="none"
      >
        <path
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
          stroke="currentColor"
          stroke-width="1.5"
        ></path>
        <path
          d="M8 12.5L10.5 15L16 9"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ),
    style: {
      borderRadius: "6px",
      background: "#28303a",
      color: "#fff",
      fontFamily: "ir",
      fontSize: "14px",
    },
  });

function App() {
  const [count, setCount] = useState(0);

  function highlightBacktickStrings(text) {
    return text.replace(
      /`([^`]+)`/g,
      '<span style="background-color: #292c35;color: #dbdfea; padding:2px 8px; border-radius: 5px; margin-right : 2px;">$1</span>'
    );
  }

  function copyTextToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full h-[100svh] bg-[#1D232A] flex justify-center items-center text-[white] font-[ir] text-[14px] ">
        {/* <div className="w-[250px] h-full"></div> */}
        <div class="h-full w-[0px] md:w-[0px] lg:w-[225px] bg-[#1D232A] bg-[repeating-linear-gradient(-45deg,#28303a_0_1.5px,transparent_2px_8px)] border-x-[1.5px] border-[#28303a]"></div>
        <div className="w-full md:w-full lg:w-[calc(100%-450px)]  h-full flex flex-col justify-start items-start pr-[4px] overflow-y-scroll snippetScrollDark ">
          <div className="w-full h-auto flex flex-col p-[40px] md:p-[150px] lg:p-[150px] pr-[46px] md:pr-[146px] lg:pr-[146px] justify-start items-start ">
            <div className="uppercase font-[jetm] text-[13px] tracking-widest text-[#808491]">
              About
            </div>
            <div className="font-[im] text-[32px] mt-[10px] mb-[20px]">
              Get Started with React-Component-Graphify
            </div>
            <pre
              className=" text-[#808491] font-[ir] whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: highlightBacktickStrings(shortDescription),
              }}
            >
              {/* {highlightBacktickStrings(shortDescription)} */}
            </pre>
            <div className="min-w-full border-t-[1.5px] border-[#242c36] my-[70px]"></div>
            <div className="uppercase font-[jetm] text-[13px] tracking-widest text-[#808491] mb-[10px]">
              Installation
            </div>
            <div className="font-[im] text-[32px] mt-[10px] mb-[20px]">
              Follow the steps to set up the NPM Package
            </div>
            <div className="text-[#808491] mb-[30px]">
              Using React Component Graphify in a React project is the most
              seamless way to visualize your component hierarchy and imports —
              all with minimal configuration.
            </div>
            <div className=" font-[im] text-[16px] tracking-widest text-[#ffffff] mb-[20px] mt-[10px] flex justify-start items-center upp">
              <HugeiconsIcon
                className="text-[#5c5f69] mr-[15px]"
                icon={GridIcon}
                size={14}
                strokeWidth={2.8}
              />{" "}
              Create your project
            </div>
            <div className="text-[#808491] mb-[30px] ">
              Start by creating a new Vite project if you don’t have one set up
              already. The most common approach is to use
              <a
                className="mx-[6px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px] cursor-pointer font-mono whitespace-nowrap"
                href="https://vite.dev/guide/#scaffolding-your-first-vite-project"
                target="_blank"
              >
                Create Vite
              </a>
              .
            </div>
            <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`npm create vite@latest my-project
cd my-project`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre data-prefix="$" className="text-warning ">
                <code>npm create vite@latest my-project</code>
              </pre>
              <pre data-prefix="$" className="text-warning ">
                <code>cd my-project</code>
              </pre>
            </div>

            {/* <div className="w-full rounded-xl border-[1.5px] border-[#1d2131] flex flex-col justify-start items-start mb-[0px] overflow-hidden min-h-[100px] h-auto">
              <div className="min-h-[40px] w-full flex justify-between items-center px-[20px] text-[#808491] border-b-[1.5px] border-[#1d2131] bg-[#121521] pr-[5px] text-[13px]">
                npm
                <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer hover:text-[white]">
                  <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
                </div>
              </div>
              <pre className="min-h-[40px] w-full flex justify-start items-center px-[20px]">
                <pre className="text-[#ffffff]">
                  npm create vite@latest my-project
                </pre>
              </pre>
              <pre className="min-h-[40px] mt-[-20px] w-full flex justify-start items-center px-[20px]">
                <pre className="text-[#ffffff]">cd my-project</pre>
              </pre>
            </div> */}
            <div className=" font-[im] text-[14px] tracking-widest text-[#ffffff] mb-[20px] mt-[60px] flex justify-start items-center upp">
              <HugeiconsIcon
                className="text-[#5c5f69] mr-[10px]"
                icon={GridIcon}
                size={14}
                strokeWidth={2.8}
              />{" "}
              Install the npm package
            </div>
            <div className="text-[#808491] mb-[30px] ">
              Install{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                react-component-graphify
              </code>{" "}
              via npm
            </div>
            {/* <div className="w-full rounded-xl border-[1.5px] border-[#1d2131] flex flex-col justify-start items-start mb-[0px] overflow-hidden min-h-[80px]">
              <div className="h-[40px] w-full flex justify-between items-center px-[20px] text-[#808491] border-b-[1.5px] border-[#1d2131] bg-[#121521] pr-[5px] text-[13px]">
                npm
                <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer hover:text-[white]">
                  <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
                </div>
              </div>
              <pre className="h-[40px] w-full flex justify-start items-center px-[20px]">
                <pre className="text-[#ffffff]">npm</pre>{" "}
                <pre className="text-[#ffffff] ml-[4px]">
                  i react-component-graphify
                </pre>
              </pre>
            </div> */}
            <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`npm i react-component-graphify`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre data-prefix="$" className="text-warning ">
                <code>npm i react-component-graphify</code>
              </pre>
            </div>
            <div className=" font-[im] text-[14px] tracking-widest text-[#ffffff] mb-[20px] mt-[60px] flex justify-start items-center upp">
              <HugeiconsIcon
                className="text-[#5c5f69] mr-[10px]"
                icon={GridIcon}
                size={14}
                strokeWidth={2.8}
              />{" "}
              Run the NPM package
            </div>
            <div className="text-[#808491] mb-[30px] ">
              Now you can run the tool. It will instantly scan your React
              project's{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                src/ folder
              </code>{" "}
              and will generate a beautifully structured{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                componentsTree.txt
              </code>
              file inside:
            </div>

            {/* <div className="w-full rounded-xl border-[1.5px] border-[#1d2131] flex flex-col justify-start items-start mb-[0px] overflow-hidden min-h-[80px]">
              <div className="h-[40px] w-full flex justify-between items-center px-[20px] text-[#808491] border-b-[1.5px] border-[#1d2131] bg-[#121521] pr-[5px] text-[13px]">
                npm
                <div className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer hover:text-[white]">
                  <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
                </div>
              </div>
              <pre className="h-[40px] w-full flex justify-start items-center px-[20px]">
                <pre className="text-[#ffffff]">npm</pre>{" "}
                <pre className="text-[#ffffff] ml-[4px]">
                  i react-component-graphify
                </pre>
              </pre>
            </div> */}
            <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`npx react-component-graphify`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre data-prefix="$" className="text-warning ">
                <code>npx react-component-graphify</code>
              </pre>
            </div>
            <div className=" font-[im] text-[14px] tracking-widest text-[#ffffff] mb-[20px] mt-[60px] flex justify-start items-center upp">
              <HugeiconsIcon
                className="text-[#5c5f69] mr-[10px]"
                icon={GridIcon}
                size={14}
                strokeWidth={2.8}
              />{" "}
              Additional: Auto Run on Project Start
            </div>
            <div className="text-[#808491] mb-[30px] ">
              To automatically run Graphify every time you start your React
              project, first install the npm package {"-> "}
              <code className="mx-[4px] whitespace-nowrap text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                concurrently
              </code>
              . This package allows you to run multiple commands in parallel
              (cross-platform).
            </div>

            <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`npm i concurrently --save-dev`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre data-prefix="$" className=" text-warning ">
                <code>{`npm i concurrently --save-dev`}</code>
              </pre>
            </div>

            {/* ------------------------- */}

            <div className="text-[#808491] mb-[30px] mt-[30px] ">
              Then simply add this script in your{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                package.json
              </code>
              file
            </div>

            <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`"scripts": {
      "start": "concurrently \\"vite\" \\"npx react-component-graphify\\""
      // your other code...
}`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre data-prefix="$" className=" text-warning ">
                <code>{`"scripts": {`}</code>
              </pre>
              <div className="w-full border-l-[2px] border-[#FCB700]">
                <pre
                  data-prefix="$"
                  className="text-warning bg-[#fcb9002e]  ml-[-2px] "
                >
                  <code>{`      "start": "concurrently \\"vite\" \\"npx react-component-graphify\\""`}</code>
                </pre>
              </div>
              <pre data-prefix="$" className=" text-[#919191] ">
                <code>{`      // your other code...`}</code>
              </pre>
              <pre data-prefix="$" className=" text-warning ">
                <code>{`}`}</code>
              </pre>
            </div>
            <div className="text-[#808491] mb-[30px] mt-[30px] ">
              Replace
              <code className="mx-[4px] whitespace-nowrap text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                vite
              </code>
              with
              <code className="mx-[4px] whitespace-nowrap text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                "react-scripts start"
              </code>
              or whatever your React app uses to run, if you're not using Vite.
            </div>
            <div className=" font-[im] text-[14px] tracking-widest text-[#ffffff] mb-[20px] mt-[60px] flex justify-start items-center upp">
              <HugeiconsIcon
                className="text-[#5c5f69] mr-[10px]"
                icon={GridIcon}
                size={14}
                strokeWidth={2.8}
              />{" "}
              Output of the tool
            </div>
            <div className="text-[#808491] mb-[30px] ">
              After you run the tool, it will instantly scan your React
              project's{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                src
              </code>{" "}
              folder and will generate a beautifully structured{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                componentsTree.txt
              </code>
              file at{" "}
              <code className="mx-[4px] text-[#d3d3d3] bg-[#283039] px-[7px] py-[2.5px] rounded-[4px]">
                src/graphify/componentsTree.txt
              </code>
            </div>

            {/* <div className="w-full flex justify-end items-center mb-[-50px] h-[50px] z-10 p-[10px] ">
              <div
                className="w-[30px] h-[30px] rounded-lg flex justify-center items-center cursor-pointer text-[#808491] hover:text-[white]"
                onClick={() => {
                  copyTextToClipboard(`npx react-component-graphify`);
                  notify();
                }}
              >
                <HugeiconsIcon className="" icon={Copy01Icon} size={16} />
              </div>
            </div> */}
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre className="pl-[4px]   ">
                <code>{`your-project/`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`├── src/`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`├── public/`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`├── node_modules/`}</code>
              </pre>
              <div className="w-full border-l-[2px] border-[#FCB700]">
                <pre className="pl-[4px] text-warning bg-[#fcb9002e]  ml-[-2px] ">
                  <code>{`├── graphify/                        <-- 📁 Output folder`}</code>
                </pre>
              </div>
              <div className="w-full border-l-[2px] border-[#FCB700]">
                <pre className="pl-[4px] text-warning bg-[#fcb9002e]  ml-[-2px] ">
                  <code>{`│   └── componentsTree.txt           <-- 📄 Main output file`}</code>
                </pre>
              </div>
              <pre className="pl-[4px]   ">
                <code>{`├── package.json`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`└── ...`}</code>
              </pre>
            </div>
            <div className="text-[#808491] mb-[30px] mt-[30px]">
              And the output structure will look like this where you can see the
              component hierarchy and their imports with exact line numbers
              where they are imported excluding the commented components import.
            </div>
            <div className="mockup-code w-full bg-[#0e1216]">
              <pre className="pl-[4px]   ">
                <code>{`└── 📁 src`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`    ├── 📦 App.jsx`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`    │   ├── Header.jsx           ← line 3`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`    │   └── Footer.jsx           ← line 10`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`    │`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`    └── 📁 components`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`        |`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`        ├── 📦 Header.jsx`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`        ├── 📦 Footer.jsx`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`        └── 📦 Sidebar.jsx`}</code>
              </pre>
              <pre className="pl-[4px]   ">
                <code>{`            └── Navigation.jsx   ← line 5`}</code>
              </pre>
            </div>
            <div className="min-h-[200px] w-full"></div>
          </div>
        </div>
        <div class="h-screen w-[0px] md:w-[0px] lg:w-[225px] bg-[#1D232A] bg-[repeating-linear-gradient(-45deg,#28303a_0_1.5px,transparent_2px_8px)] border-x-[1.5px] border-[#28303a]"></div>
      </div>
    </>
  );
}

export default App;
