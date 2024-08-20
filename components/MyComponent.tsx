'use client';
import { useTranslation } from 'next-i18next';

interface MyComponentProps {}

const MyComponent: React.FC<MyComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hello')}</h1>
    </div>
  );
};

export default MyComponent;