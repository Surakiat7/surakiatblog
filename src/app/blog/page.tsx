"use client";

import CustomButton from "@/component/CustomButton/CustomButton";
import RouteButton from "@/component/CustomButton/RouteButton";
import ModalComponent from "@/component/Modal/Modal";
import React from "react";
import { anuphan, poppins } from "../fonts";

type Props = {};

export default function Blog({}: Props) {
  return (
    <main className="w-full flex flex-col gap-6 items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4 text-xl">
        <p className={anuphan.className}>สวัสดีชาวโลก</p>
        <p className={`${poppins.className} font-weight-100`}>
          Hello world (Weight: 100)
        </p>
        <p className={`${poppins.className} font-weight-500`}>
          Hello world (Weight: 500)
        </p>
      </div>
      <div className="flex w-full justify-center gap-3 items-center">
        <CustomButton />
        <ModalComponent />
        <RouteButton />
      </div>
    </main>
  );
}
