import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names or conditional class objects and merges conflicting Tailwind classes.
 * @param inputs Array of class values
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Basic RFC 5322 compliant email validator.
 * @param email Candidate email string
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.trim().length === 0) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}
