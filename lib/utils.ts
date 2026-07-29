import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or conditional class objects and merges conflicting Tailwind classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Validates RFC 5322 email string.
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.trim().length === 0) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates Indian 10-digit mobile numbers (starting with 6, 7, 8, or 9).
 */
export function isValidIndianMobile(mobile: string): boolean {
  const digitsOnly = mobile.replace(/\D/g, '');
  // Handle 10-digit number or 12-digit with 91 prefix
  if (digitsOnly.length === 10) {
    return /^[6-9]\d{9}$/.test(digitsOnly);
  }
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digitsOnly.slice(2));
  }
  return false;
}

/**
 * Standardizes mobile number format to +91XXXXXXXXXX
 */
export function formatMobileNumber(mobile: string): string {
  const digitsOnly = mobile.replace(/\D/g, '');
  if (digitsOnly.length === 10) {
    return `+91${digitsOnly}`;
  }
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return `+${digitsOnly}`;
  }
  return mobile.trim();
}
