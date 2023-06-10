import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useGameSetupPlayersNameSchema = (players) => {
  const { t } = useTranslation();

  const schemaObject = players.reduce((acc, player, index) => {
    acc[index + 1] = yup
      .string()
      .required('Обов\'язкове поле')
      .min(2, t('gameSetupPlayersName:min'))
      .max(20, t('gameSetupPlayersName:max'));
    return acc;
  }, {});

  return yup
    .object(schemaObject);
};
