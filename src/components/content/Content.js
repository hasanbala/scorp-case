import React from "react";
import { useTranslation } from "react-i18next";

export const Content = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="content">
      <div className="py-5 text-center">
        <h1 className="display-5 fw-bold mb-5">Lorem Ipsum</h1>
        <div className="col-lg-6 mx-auto">
          <h3 className="mb-3 pt-5">{t("content.loremTitle")}</h3>
          <p className="lead mb-4 ">{t("content.loremTitleContents")}</p>
          <h3 className="mb-3 pt-5"> {t("content.loremSubtitle")}</h3>
          <p className="lead mb-4 ">{t("content.LoremSubtitleContents")}</p>
        </div>
      </div>
    </div>
  );
};
