import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsClipboard2Check } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
import { LuBarChart2 } from "react-icons/lu";

interface DropdownItem {
  title: string;
  isOpen: boolean;
  rotation: number;
  submenu: string[];
  icon: React.ReactNode;
}

export default function SidebarElement({ isOpen }: { isOpen: boolean }) {
  const [dropdownData, setDropdownData] = useState<DropdownItem[]>([
    {
      title: "บันทึกข้อมูล",
      submenu: [
        "คดียาเสพติด",
      ],
      isOpen: false,
      rotation: 0,
      icon: <LuFileSignature size={30} />,
    },
    {
      title: "อนุมัติข้อมูล",
      submenu: [
        "คดียาเสพติด",
      ],
      isOpen: false,
      rotation: 0,
      icon: <BsClipboard2Check size={30} />,
    },
    {
      title: "รายงานผลข้อมูล",
      submenu: [
        "คดียาเสพติด",
      ],
      isOpen: false,
      rotation: 0,
      icon: <LuBarChart2 size={30} />,
    },
  ]);

  const [openedDropdownIndex, setOpenedDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setDropdownData((prevData: DropdownItem[]) =>
      prevData.map((item: DropdownItem, i: number) => {
        if (i === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
            rotation: item.isOpen ? 0 : 180,
          };
        } else {
          return {
            ...item,
            isOpen: false,
            rotation: 0,
          };
        }
      })
    );

    setOpenedDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main
      className="bg-black text-white fixed left-0 z-60 w-64 h-screen border-sky-900 border-r"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div
        className={`flex flex-col px-6 flex-grow h-full ${
          dropdownData.some((item) => item.isOpen)
            ? "overflow-y-auto pb-28 custom-scrollbar"
            : ""
        }`}
      >
        <div className="flex mt-3 md:p-2">
          <div className="relative flex flex-col items-center">
            <Image
              className="relative"
              src="/logo-nsb-main.png"
              alt="Next.js Logo"
              width={120}
              height={27}
            />
            <p className="text-center text-xs text-sky-600 mt-2">
              ระบบบริหารจัดการงาน บช.ปส. Narcotics Suppression Bureau
            </p>
          </div>
        </div>
        {dropdownData.map((item, index) => (
          <div className="py-2 mt-4 cursor-pointer flex flex-col" key={index}>
            <div
              className="flex w-full items-center justify-between gap-4 flex-shrink-0"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                {item.title}
              </div>
              <div className="flex items-center">
                <RiArrowDropDownLine
                  size={30}
                  style={{
                    transform: `rotate(${item.rotation}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>
            {item.isOpen && (
              <div className="py-2 space-y-2 flex flex-col items-center cursor-pointer">
                {item.submenu.map((sub, subIndex) => (
                  <p
                    key={subIndex}
                    className="text-md text-center flex rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {sub}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
