import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useGameSetupPlayersCOuntSchema = () => {
  const { t } = useTranslation();

  return yup
    .object({
      playersCount: yup
        .number()
        .typeError(t('playersCountPage.errors.number'))
        .max(20, t('playersCountPage.errors.max'))
        .min(5, t('playersCountPage.errors.min'))
        .required(t('playersCountPage.errors.required')),
    })
    .required();
};
