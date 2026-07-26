export type WaitlistTrack = 'patron' | 'merchant';

export interface PatronSubmissionData {
  track: 'patron';
  email: string;
}

export interface MerchantSubmissionData {
  track: 'merchant';
  email: string;
  businessName: string;
  category: string;
}

export type WaitlistSubmissionPayload = PatronSubmissionData | MerchantSubmissionData;

export interface WaitlistState {
  track: WaitlistTrack;
  email: string;
  businessName: string;
  category: string;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
  queuePosition: number | null;
}

export interface ComponentBaseProps {
  className?: string;
  children?: React.ReactNode;
}
