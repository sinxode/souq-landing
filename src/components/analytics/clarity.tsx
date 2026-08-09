'use client';

import React, { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '';

export const ClarityAnalytics: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && CLARITY_PROJECT_ID) {
      try {
        Clarity.init(CLARITY_PROJECT_ID);
      } catch (err) {
        console.error('[Microsoft Clarity] Initialization error:', err);
      }
    }
  }, []);

  return null;
};

export function trackClarityEvent(eventName: string): void {
  if (typeof window !== 'undefined') {
    try {
      Clarity.event(eventName);
    } catch (err) {
      console.warn(`[Microsoft Clarity] Event tracking error (${eventName}):`, err);
    }
  }
}

export function setClarityTag(key: string, value: string | string[]): void {
  if (typeof window !== 'undefined') {
    try {
      Clarity.setTag(key, value);
    } catch (err) {
      console.warn(`[Microsoft Clarity] Tag error (${key}):`, err);
    }
  }
}

export function identifyClarityUser(
  customId: string,
  customSessionId?: string,
  customPageId?: string,
  friendlyName?: string
): void {
  if (typeof window !== 'undefined') {
    try {
      Clarity.identify(customId, customSessionId, customPageId, friendlyName);
    } catch (err) {
      console.warn(`[Microsoft Clarity] Identify error:`, err);
    }
  }
}
