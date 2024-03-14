import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function RouteButton() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/(routes)/blog/[slug]");
  };
  return (
    <Button
      radius="full"
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      onClick={handleClick}
    >
      Test Slug Single
    </Button>
  );
}
