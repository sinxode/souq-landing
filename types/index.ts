export type WaitlistTrack = 'patron' | 'merchant';

export interface PatronSubmissionData {
  track: 'patron';
  mobile: string;
}

export interface MerchantSubmissionData {
  track: 'merchant';
  brandName: string;
  whatsapp: string;
  email: string;
}

export type WaitlistSubmissionPayload = PatronSubmissionData | MerchantSubmissionData;

export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}
