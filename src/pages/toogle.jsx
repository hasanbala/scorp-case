import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Toggle = ({
  toggle,
  handleOpenToggle,
  changeLanguage,
  Icontr,
  Iconen,
}) => {
  const { t } = useTranslation("translations");

  const toggleStyle = clsx({
    ["overlay overlayclick"]: toggle === true,
    ["overlay"]: toggle === false,
  });

  return (
    <div id='myNav' className={toggleStyle}>
      <a href='#!' className='closebtn' onClick={handleOpenToggle}>
        &times;
      </a>
      <div className='overlay-content'>
        <ul>
          <div className='overlay-lang'>
            <li>
              <input
                type='image'
                value='tr'
                onClick={changeLanguage}
                src={Icontr}
                alt='TR'
                className='btnx'
              />
            </li>
            <li>
              <input
                type='image'
                value='en'
                onClick={changeLanguage}
                src={Iconen}
                alt='EN'
                className='btnx'
              />
            </li>
          </div>
          <div onClick={handleOpenToggle}>
            <li>
              <Link className='link' to='/'>
                {t("navi.home")}
              </Link>
            </li>
            <li>
              <Link className='link' to='/contact'>
                {t("navi.contact")}
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
