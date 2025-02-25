import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../utils/firebase';

/**
 * Hook to track screen views with Firebase Analytics
 */
export const useFirebaseTracking = () => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'screen_view', {
      screen_name: location.pathname,
    });
  }, [location.pathname]);
};
