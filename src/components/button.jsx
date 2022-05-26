import { useTranslation } from "react-i18next";
import "i18n";

export const Button = ({ data, className, type }) => {
  const { t } = useTranslation("translations");

  return (
    <button className={className} type={type}>
      {t(data)}
    </button>
  );
};
