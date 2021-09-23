import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export const NotFound = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="py-5 my-5 content">
      <div className="py-5 my-5 text-center">
        <h5 className="display-5 py-5 my-5">{t("navi.notFound")}</h5>
      </div>
    </div>
  );
};
