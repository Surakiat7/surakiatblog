"use client";

import Image from "next/image";
import GradientButton from "@/component/Button/ActionButton";
import { useNavigate } from "@/utils/navigation";

const imageUrl = `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/404-notfound.png`;

const NotFound = () => {
  const navigation = useNavigate();

  const handleReturnHome = async () => {
    await navigation.Home();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-6">
      <Image
        src={imageUrl}
        alt="404 Not Found Image"
        width={300}
        height={300}
        layout="intrinsic"
        className="object-contain"
      />
      <h1 className="text-3xl font-bold mt-4">Page Not Found</h1>
      <p className="text-lg mt-2 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="pt-4">
        <GradientButton
          title="Return Home"
          onClick={handleReturnHome}
          ariaLabel="Return home button"
        />
      </div>
    </div>
  );
};

export default NotFound;
