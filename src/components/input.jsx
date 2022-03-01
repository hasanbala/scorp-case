import { useTranslation } from "react-i18next";
import "../i18n";

export const Input = ({
  className,
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const { t } = useTranslation("translations");
  return (
    <input
      className={className}
      type={type}
      placeholder={t(placeholder)}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
