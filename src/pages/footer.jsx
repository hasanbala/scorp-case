import { useTranslation } from "react-i18next";
import "../styles/footer.css";
import "../i18n";

export const Footer = () => {
  const { t } = useTranslation("translations");

  return (
    <footer className="footer">
      <div className="footer-d">
        <div className="f1">
          <h5>{t("footer.docs.docsName")}</h5>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">{t("footer.docs.installation")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.mainConcepts")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.advancedGuides")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.apiReference")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.hooks")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.testing")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.contributing")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.docs.faq")}</a>
            </li>
          </ul>
        </div>

        <div className="f2">
          <h5> {t("footer.channels.channelsName")}</h5>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">{t("footer.channels.gitHub")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.channels.stackOverflow")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.channels.discussionForums")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.channels.devCommunity")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.channels.facebook")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.channels.twitter")}</a>
            </li>
          </ul>
        </div>

        <div className="f3">
          <h5> {t("footer.more.moreName")}</h5>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">{t("footer.more.tutorial")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.more.blog")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.more.acknowledgements")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.more.privacy")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.more.terms")}</a>
            </li>
          </ul>
        </div>

        <div className="f4">
          <h5> {t("footer.community.communityName")}</h5>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">{t("footer.community.codeofConduct")}</a>
            </li>
            <li>
              <a href="#!">{t("footer.community.communityResources")}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr2" />
      <div className="footer-bottom">
        © Copyright 2022 | All Rights Reserved
      </div>
    </footer>
  );
};
