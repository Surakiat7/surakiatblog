import React from "react";
import { Button } from "@nextui-org/react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "@/utils/navigation";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate.Back();
  };

  return (
    <div className="flex">
      <Button
        size="md"
        className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
        startContent={<IoChevronBack data-testid="chevron-back-icon" />}
        onClick={handleBackClick}
      >
        Back
      </Button>
    </div>
  );
};

export default BackButton;
