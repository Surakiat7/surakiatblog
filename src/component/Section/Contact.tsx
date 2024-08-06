"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Input, Textarea, Button } from "@nextui-org/react";
import Phone3D from "../3D/FloatingPhone";
import { useState, ChangeEvent } from "react";
import { SendContact, SendContactRequest } from "@/api/contact";
import confetti from "canvas-confetti";
import Toast from "../Notification/ToastContact";

interface ConfettiOptions extends confetti.Options {
  useWorker?: boolean;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";
  const TitleLinearColor =
    theme === "dark"
      ? "bg-gradient-to-b from-[#fff] to-[#adadad] inline-block text-transparent bg-clip-text"
      : "bg-gradient-to-b from-[#555] to-[#000] inline-block text-transparent bg-clip-text";

  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [displayPhone, setDisplayPhone] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handlePhoneOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/\D/g, "").slice(0, 10);

    if (value.length === 0) {
      setIsPhoneError(false);
    } else if (value.length !== 10) {
      setIsPhoneError(true);
    } else {
      setIsPhoneError(false);
    }

    if (value.length > 3 && value.length <= 6) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 6) {
      value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }

    setDisplayPhone(value);
    setPhone(value.replace(/-/g, ""));
  };

  const handleEmailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const isValidEmail = value
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (value === "") {
      setIsEmailError(false);
    } else if (isValidEmail) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }

    setEmail(value);
  };

  const isButtonDisabled =
    !title ||
    !name ||
    !username ||
    !phone ||
    !email ||
    !message ||
    isPhoneError ||
    isEmailError;

  const handleSubmit = async () => {
    const ContactData: SendContactRequest = {
      title,
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1] || "",
      phoneNumber: phone,
      email,
      message,
    };

    try {
      setIsLoading(true);
      const response = await SendContact(ContactData);
      console.log("Sending Contact Successfully:", response);
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f7c948", "#d4a000"],
        zIndex: 9999,
        disableForReducedMotion: true,
        useWorker: true,
        duration: 6000,
      } as ConfettiOptions);
      setToast({
        type: "success",
        message: "Your message was sent successfully!",
      });
    } catch (error) {
      console.error("Error sending contact:", error);
      setToast({
        type: "error",
        message: "Failed to send your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <>
        {toast && (
          <div className="fixed bottom-4 right-4 z-50">
            <Toast type={toast.type} message={toast.message} />
          </div>
        )}
      </>
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1
          className={`text-center font-bold text-4xl md:text-6xl max-w-xl ${TitleLinearColor}`}
        >
          Contact
        </h1>
        <p className="text-center font-normal text-md max-w-2xl pt-4">
          Feel free to reach out to me directly for any inquiries or
          collaborations. This contact form is for personal communication only
          and not associated with any company.
        </p>
      </div>
      <div className="flex sm:flex-col-reverse sm:items-center sm:pt-6 sm:gap-6 w-full gap-24 px-12 sm:px-6">
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col w-full gap-1">
            <label className="text-base font-medium">
              Subject of Contact<span className="text-[#FD7573]"> *</span>
            </label>
            <Input
              type="text"
              label="Subject of Contact"
              variant="flat"
              placeholder="Enter your subject of contact"
              value={title}
              onChange={(e) => handleInputChange(e, setTitle)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                Name<span className="text-[#FD7573]"> *</span>
              </label>
              <Input
                type="text"
                label="Name"
                variant="flat"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                Username<span className="text-[#FD7573]"> *</span>
              </label>
              <Input
                type="text"
                label="Username"
                variant="flat"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                PhoneNumber<span className="text-[#FD7573]"> *</span>
              </label>
              <Input
                type="text"
                label="PhoneNumber"
                variant="flat"
                placeholder="Enter your phone number"
                value={displayPhone}
                onChange={handlePhoneOnChange}
                className="w-full"
              />
              {isPhoneError && (
                <p className="text-red-500 text-sm">
                  Please enter a 10-digit phone number
                </p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                Email<span className="text-[#FD7573]"> *</span>
              </label>
              <Input
                type="email"
                label="Email"
                variant="flat"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailOnChange}
                className="w-full"
              />
              {isEmailError && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email address
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-base font-medium">
              Message<span className="text-[#FD7573]"> *</span>
            </label>
            <Textarea
              type="text"
              label="Message"
              variant="flat"
              placeholder="Please type your message here"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
              className="w-full"
            />
          </div>
          <div className="w-20 h-auto pt-2">
            <Button
              isDisabled={isButtonDisabled}
              isLoading={isLoading}
              radius="md"
              size="lg"
              className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </div>
        <div className="flex w-fit justify-center">
          <Phone3D />
        </div>
      </div>
    </section>
  );
};

export default Contact;
