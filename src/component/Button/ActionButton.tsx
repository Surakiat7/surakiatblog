import React from "react";
import { Button } from "@nextui-org/react";

interface GradientButtonProps {
  title: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ title, onClick }) => {
  return (
    <Button
      radius="full"
      className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B] py-2 text-zinc-50 ring-2 ring-[#4EDFE7]/50 ring-offset-2 ring-offset-zinc-50 shadow-lg"
      onClick={onClick}
      size="lg"
    >
      {title}
    </Button>
  );
};

export default GradientButton;
