import { useTranslation } from "react-i18next";
import "../styles/content.css";

export const Content = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="about-us">
      <h1>Lorem Ipsum</h1>
      <div>
        <h3>{t("content.loremTitle")}</h3>
        <p>{t("content.loremTitleContents")}</p>
        <h3> {t("content.loremSubtitle")}</h3>
        <p>{t("content.LoremSubtitleContents")}</p>
      </div>
    </div>
  );
};
