import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { useCallback, useEffect, useState } from 'react';

// This component for testing ErrorBoundary
export function BugButton() {
  const { t } = useTranslation();

  const [isError, setError] = useState(false);

  const onThrow = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return <Button onClick={onThrow}>{t('throw-error')}</Button>;
}
