import React from "react";
import { Button } from "@nextui-org/react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "@/utils/navigation";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Button
        size="md"
        className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
        startContent={<IoChevronBack />}
        onClick={navigate.Back}
      >
        Back
      </Button>
    </div>
  );
}
