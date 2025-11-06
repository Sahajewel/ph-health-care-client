"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { reverse } from "dns";
// import { toast } from "sonner";

export const File = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  return (
    <div>
      <label
        htmlFor="File"
        className="block rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6"
      >
        {" "}
        <div className="flex items-center justify-center gap-4">
          {" "}
          <span className="font-medium"> Upload your file(s) </span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            ></path>{" "}
          </svg>{" "}
        </div>{" "}
        <input multiple type="file" id="File" className="sr-only" />
      </label>
      {/* <Button
        variant="default"
        onClick={() =>
          toast.success("Be at the area 10 minutes before the event time", {
            style: {
              background: "#000",
              color: "#fff",
            },
          })
        }
      >
        Info
      </Button> */}
      <Button
        variant="default"
        onClick={() =>
          toast.success("React host toast", {
            style: {
              background: "#000",
              color: "#fff",
            },
          })
        }
      >
        Host toast
      </Button>
      <motion.div
        style={box}
        animate={{
          rotate: 360,
          scale: 1.5,
          borderRadius: "50%",
        }}
        transition={{
          duration: 1,
        }}
      />
    </div>
  );
};
