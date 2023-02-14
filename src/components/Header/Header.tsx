import { default as styles } from "./Header.module.css";
import { NavLink } from "react-router-dom";
import RxLogoSVG from "../../assets/svg/rxlogo.svg";
import NotificationIconSVG from "../../assets/svg/notification-icon.svg";
import HelpIconSVG from "../../assets/svg/help-icon.svg";
import AccountIconSVG from "../../assets/svg/account-icon.svg";
//Requirements:
// 1. Buttons
// 2. Handle Global CSS variables (colors, font-size, )
// 3. Icons

export const Header = () => {
  return (
    <>
      <header className={styles["golabal_nav"]}>
        <div className={styles.global_nav_content}>
          <div className="site-header__logo" style={{maxHeight: '54px'}}>
            <img
              src={RxLogoSVG}
              alt="rx logo"
              style={{ height: "54px", width: "54px" }}
            />
          </div>

          <nav
            aria-label="Main Navigation"
            id="main-navigation"
            className={styles.main_navigation_container}
          >
            <ul className={styles.main_navigation_list}>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "link")}
                to="/"
              >
                Monitor
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "link")}
                to="/configure"
              >
                Configure
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? "active" : "link")}
                to="/ps-alerts"
              >
                PS Alerts
              </NavLink>
            </ul>
          </nav>
        </div>

        <div className={styles.site_header_util}>
          <div className="site-header-util--item">
            <button
              style={{ background: "transparent", border: "transparent" }}
              id="btn_show-turbine"
            >
              Go To Turbine
            </button>
          </div>

          <div className="site-header-util--item">
            <button
              style={{ background: "transparent", border: "transparent" }}
              id="btn_notification"
              aria-label="Notifications"
              className="icon-bttn"
            >
              <img
                src={NotificationIconSVG}
                alt="notification button"
                style={{ height: "24px", width: "24px" }}
              />
            </button>
          </div>

          <div className="site-header-util--item">
            <button
              style={{ background: "transparent", border: "transparent" }}
              id="btn_get-help"
              aria-label="Get help"
              className="icon-bttn"
            >
              <img
                src={HelpIconSVG}
                alt="help button"
                style={{ height: "24px", width: "24px" }}
              />
            </button>
          </div>

          <div className="site-header-util--item">
            <button
              style={{ background: "transparent", border: "transparent" }}
              id="btn_account-menu"
              aria-label="Rx Account: Ankit Sadhu (ankit@xenonstack.com)"
            >
              <img
                src={AccountIconSVG}
                alt="account button"
                style={{ height: "24px", width: "24px" }}
              />
            </button>
          </div>
        </div>
        {/* mobile nav */}
      </header>
    </>
  );
};

// Bootstrap zindex managing
// $zindex-dropdown:       1000;
// $zindex-sticky:         1020;
// $zindex-fixed:          1030;
// $zindex-modal-backdrop: 1040;
// $zindex-modal:          1050;
// $zindex-popover:        1060;
// $zindex-tooltip:        1070;
