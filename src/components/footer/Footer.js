import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("translations");

  return (
    <footer className="footer pt-5 pb-5 mt-auto bg-light footer-light">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-12">
            <div className="row gx-5">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  <h5>{t("footer.docs.docsName")}</h5>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.installation")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.mainConcepts")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.advancedGuides")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.apiReference")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.hooks")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.testing")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.contributing")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.docs.faq")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  <h5> {t("footer.channels.channelsName")}</h5>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.gitHub")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.stackOverflow")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.discussionForums")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.devCommunity")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.facebook")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.channels.twitter")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  <h5> {t("footer.more.moreName")}</h5>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.more.tutorial")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.more.blog")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.more.acknowledgements")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.more.privacy")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.more.terms")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  <h5> {t("footer.community.communityName")}</h5>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.community.codeofConduct")}
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="text-decoration-none" href="#!">
                      {t("footer.community.communityResources")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 align-items-center ">
          <div className="col-md-6 small mt-4 text-right">Copyright © 2021</div>
        </div>
      </div>
    </footer>
  );
};
