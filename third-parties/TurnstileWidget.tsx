import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

type TurnstileStatus = 'success' | 'error' | 'expired' | 'required';

interface TurnstileWidgetProps {
  isFormComplete: boolean;
  setTurnstileStatus: React.Dispatch<React.SetStateAction<TurnstileStatus>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({
  isFormComplete,
  setTurnstileStatus,
  setError,
}) => {
  if (!isFormComplete) return null;

  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onError={() => setTurnstileStatus('error')}
      onExpire={() => setTurnstileStatus('expired')}
      onSuccess={() => {
        setTurnstileStatus('success');
        setError(null);
      }}
    />
  );
};

export default TurnstileWidget;
