"use client";

import CustomButton from "@/component/CustomButton/CustomButton";
import RouteButton from "@/component/CustomButton/RouteButton";
import ModalComponent from "@/component/Modal/Modal";
import React from "react";
import { anuphan, poppins } from "../fonts";
import { DatePicker } from "@nextui-org/react";
import { DateValue, now, parseAbsoluteToLocal } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { RangeCalendar } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";

type Props = {};

export default function Blog({}: Props) {
  let [date, setDate] = React.useState<DateValue>(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );

  return (
    <main className="w-full flex flex-col gap-6 items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center justify-center gap-4 text-xl">
        <p className={anuphan.className}>สวัสดีชาวโลก</p>
        <p className={`${poppins.className} font-weight-100`}>
          Hello world (Weight: 100)
        </p>
        <p className={`${poppins.className} font-weight-500`}>
          Hello world (Weight: 500)
        </p>
      </div>
      <div className="flex w-full justify-centeritems-center">
        <CustomButton />
        <ModalComponent />
        <RouteButton />
        <div className="w-full max-w-xl flex flex-col items-start gap-4">
          <DatePicker
            className="max-w-md"
            granularity="second"
            label="Date and time"
            value={date}
            onChange={setDate}
          />
          <DatePicker
            className="max-w-md"
            granularity="day"
            label="Date"
            value={date}
            onChange={setDate}
          />
          <DatePicker
            className="max-w-md"
            granularity="second"
            label="Event date"
          />
          <DatePicker
            className="max-w-full"
            granularity="second"
            label="Event date"
            placeholderValue={now("America/New_York")}
          />
        </div>
        <I18nProvider locale="th">
          <RangeCalendar aria-label="วันที่ (ปฏิทินช่วงระหว่าง)" />
        </I18nProvider>
      </div>
    </main>
  );
}
