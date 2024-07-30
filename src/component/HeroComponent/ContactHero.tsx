"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Input, Textarea, Button } from "@nextui-org/react";
import Phone3D from "../3D/FloatingPhone";
import { useState, ChangeEvent } from "react";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";

  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1 className="text-center font-bold text-4xl md:text-6xl max-w-xl">
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
            <h2 className="text-base font-medium">Subject of Contact</h2>
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
              <h2 className="text-base font-medium">Name</h2>
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
              <h2 className="text-base font-medium">Username</h2>
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
              <h2 className="text-base font-medium">Phone</h2>
              <Input
                type="text"
                label="Phone"
                variant="flat"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => handleInputChange(e, setPhone)}
                className="w-full"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <h2 className="text-base font-medium">Email</h2>
              <Input
                type="email"
                label="Email"
                variant="flat"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <h2 className="text-base font-medium">Message</h2>
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
              radius="md"
              className="bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
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
