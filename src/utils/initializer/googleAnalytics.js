import ReactGA from 'react-ga4';
import { GA_TRACKING_KEY } from '@/config';

export function initializeGA() {
  if (GA_TRACKING_KEY) {
    ReactGA.initialize(GA_TRACKING_KEY);
  }
}

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */

export const EventBehavior = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
