import React from "react";
import {
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

interface ModalNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title: string;
}

const ModalNotification: React.FC<ModalNotificationProps> = ({
  isOpen,
  onClose,
  message,
  title,
}) => {
  const isSuccess = title.toLowerCase() === "success";

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      placement={"center"}
      onClose={onClose}
      radius="lg"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#00597B]/50 backdrop-opacity-40",
        base: "border-[#00597B] text-white",
        header: `border-b-[1px] ${isSuccess ? 'border-teal-500' : 'border-red-500'}`,
        footer: `border-t-[1px] ${isSuccess ? 'border-teal-500' : 'border-red-500'}`,
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center items-center gap-2">
              <div className="shrink-0">
                <svg
                  className={`shrink-0 size-8 ${
                    isSuccess ? "text-teal-500" : "text-red-500"
                  } mt-0.5`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  {isSuccess ? (
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  ) : (
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  )}
                </svg>
              </div>
              {title}
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center p-4 w-full">
                <p className="text-sm dark:text-neutral-400">{message}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalNotification;