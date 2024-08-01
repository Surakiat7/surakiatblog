"use client";

import Image from "next/image";
import ImageSrc from "../../public/img/404-notfound.png";
import GradientButton from "@/component/Button/ActionButton";
import { useNavigate } from "@/utils/navigation";

const NotFound = () => {
  const navigation = useNavigate();

  const handleReturnHome = async () => {
    await navigation.Home();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src={ImageSrc}
        alt="404-notfound"
        width="0"
        height="0"
        sizes="100vw"
        loading="lazy"
        className="object-cover w-[300px] sm:w-[200px] sm:h-[200px] h-[300px]"
      />
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div className="pt-4">
        <GradientButton title="Return Home" onClick={handleReturnHome} />
      </div>
    </div>
  );
};

export default NotFound;
