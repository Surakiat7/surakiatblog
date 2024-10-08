import { Button } from '@nextui-org/react';
import Phone3D from '../3D/FloatingPhone';
import { useState, ChangeEvent, useEffect } from 'react';
import { SendContact } from '@/api/contact';
import { SendContactRequest, ConfettiOptions } from '@/types';
import confetti from 'canvas-confetti';
import ModalNotification from '../Modal/Contact';
import axios from 'axios';
import TurnstileWidget from '../../../third-parties/TurnstileWidget';
import { useThemeColors } from '@/@core/utils/themeColorClass';
import InputSpotlightBorder from '../Input/InputSpotlightBorder';

type TurnstileStatus = 'success' | 'error' | 'expired' | 'required';

const Contact: React.FC = () => {
  const { bgColorClass, TitleLinearColor } = useThemeColors();
  const [title, setTitle] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [displayPhone, setDisplayPhone] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [modalTitle, setModalTitle] = useState<string>('');
  const [turnstileStatus, setTurnstileStatus] =
    useState<TurnstileStatus>('required');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handlePhoneOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target instanceof HTMLInputElement) {
      let { value } = event.target;
      value = value.replace(/\D/g, '').slice(0, 10);

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
        value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(
          6,
          10
        )}`;
      }

      setDisplayPhone(value);
      setPhone(value.replace(/-/g, ''));
    }
  };

  const handleEmailOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target instanceof HTMLInputElement) {
      const { value } = event.target;

      const isValidEmail = value
        .toLowerCase()
        .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

      if (value === '') {
        setIsEmailError(false);
      } else if (isValidEmail) {
        setIsEmailError(false);
      } else {
        setIsEmailError(true);
      }

      setEmail(value);
    }
  };

  const isButtonDisabled =
    !title ||
    !name ||
    !surname ||
    !phone ||
    !email ||
    !message ||
    isPhoneError ||
    isEmailError ||
    turnstileStatus !== 'success';

  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  useEffect(() => {
    setIsFormComplete(
      Boolean(title) &&
        Boolean(name) &&
        Boolean(surname) &&
        Boolean(phone) &&
        Boolean(email) &&
        Boolean(message) &&
        !isPhoneError &&
        !isEmailError
    );
  }, [title, name, surname, phone, email, message, isPhoneError, isEmailError]);

  const resetFormFields = () => {
    setTitle('');
    setName('');
    setSurname('');
    setPhone('');
    setEmail('');
    setMessage('');
    setDisplayPhone('');
    setIsPhoneError(false);
    setIsEmailError(false);
    setTurnstileStatus('required');
  };

  const handleSubmit = async () => {
    if (turnstileStatus !== 'success') {
      setModalTitle('Error');
      setModalMessage('Please complete the Turnstile verification.');
      setIsModalOpen(true);
      return;
    }

    const ContactData: SendContactRequest = {
      title,
      firstName: name || '',
      lastName: surname || '',
      phoneNumber: phone,
      email,
      message,
    };

    try {
      setIsLoading(true);
      const response = await SendContact(ContactData);
      const { messageEN } = response;
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4EDFE7', '#00597B'],
        zIndex: 9999,
        disableForReducedMotion: true,
        useWorker: true,
        duration: 6000,
      } as ConfettiOptions);
      setModalTitle('Success');
      setModalMessage(messageEN);
      resetFormFields();
    } catch (error) {
      console.error('Error sending contact:', error);
      setModalTitle('Error');
      if (axios.isAxiosError(error)) {
        setModalMessage(
          error.response?.data?.messageEN ||
            'Failed to send your message. Please try again.'
        );
      } else {
        setModalMessage('An unexpected error occurred. Please try again.');
      }
      resetFormFields();
    } finally {
      setIsLoading(false);
    }
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 6000);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      {/* Start Modal */}
      <ModalNotification
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message={modalMessage}
        title={modalTitle}
      />
      {/* End Modal */}
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
            <InputSpotlightBorder
              title="Enter your title"
              value={title}
              onChange={(e) => handleInputChange(e, setTitle)}
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                Name<span className="text-[#FD7573]"> *</span>
              </label>
              <InputSpotlightBorder
                title="Enter your name"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                Surname<span className="text-[#FD7573]"> *</span>
              </label>
              <InputSpotlightBorder
                title="Enter your surname"
                value={surname}
                onChange={(e) => handleInputChange(e, setSurname)}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full gap-1">
              <label className="text-base font-medium">
                PhoneNumber<span className="text-[#FD7573]"> *</span>
              </label>
              <InputSpotlightBorder
                title="Enter your phone"
                value={displayPhone}
                onChange={handlePhoneOnChange}
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
              <InputSpotlightBorder
                title="Enter your email"
                value={email}
                onChange={handleEmailOnChange}
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
            <InputSpotlightBorder
              title="Enter your message"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
            />
          </div>
          {/* Start Turnstile widget */}
          {isFormComplete && (
            <TurnstileWidget
              isFormComplete={isFormComplete}
              setTurnstileStatus={setTurnstileStatus}
              setError={setError}
            />
          )}
          {/* End Turnstile widget */}
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
