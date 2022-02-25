import { useTranslation } from "react-i18next";
import "../i18n";

export const Input = ({ className, type, placeholder, value, onChange }) => {
  const { t } = useTranslation("translations");
  return (
    <input
      className={className}
      type={type}
      placeholder={t(placeholder)}
      value={value}
      onChange={onChange}
    />
  );
};
