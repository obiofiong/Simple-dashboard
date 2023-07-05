import "./Sidebar.css";
import Logo from "../../assets/mainstack-logo.svg";

import dashboardIcon from "../../assets/sidebar-icons/dashboard.svg";
import alarm from "../../assets/sidebar-icons/alarm.svg";
import photo from "../../assets/sidebar-icons/add_a_photo.svg";
import deleteIcon from "../../assets/sidebar-icons/delete.svg";
import edit from "../../assets/sidebar-icons/edit.svg";
import file from "../../assets/sidebar-icons/file_present.svg";
import contact from "../../assets/sidebar-icons/group.svg";
import hourglass from "../../assets/sidebar-icons/hourglass_empty.svg";
import subscriptions from "../../assets/sidebar-icons/subscriptions.svg";

import avatar from "../../assets/image.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo" />
      <ul>
        {sidebarLinks.map((link, i) => {
          return (
            <li key={i} className={link.name === "Dashboard" && "active"}>
              <img alt="sidebar icon" src={link.icon} />
              {link.name}
            </li>
          );
        })}
        <p>OTHERS 1</p>
        {otherLinks1.map((link, i) => {
          return (
            <li key={i} className={link.name === "Dashboard" && "active"}>
              <img alt="sidebar icon" src={link.icon} />
              {link.name}
            </li>
          );
        })}
        <p>OTHERS 2</p>
        {otherLinks2.map((link, i) => {
          return (
            <li key={i} className={link.name === "Dashboard" && "active"}>
              <img alt="sidebar icon" src={link.icon} />
              {link.name}
            </li>
          );
        })}
      </ul>
      <div className="footer">
        <div className="footer-left">
          <img alt="avatar" src={avatar} />
          <p>Blessing Daniels</p>
        </div>

        <span>...</span>
      </div>
    </div>
  );
}

export default Sidebar;

const sidebarLinks = [
  {
    icon: dashboardIcon,
    name: "Dashboard",
  },
  {
    icon: edit,
    name: "item 1",
  },
  {
    icon: contact,
    name: "item 2",
  },
  {
    icon: hourglass,
    name: "item 3",
  },
];

const otherLinks1 = [
  {
    icon: photo,
    name: "item 4",
  },
  {
    icon: deleteIcon,
    name: "item 5",
  },
];
const otherLinks2 = [
  {
    icon: subscriptions,
    name: "item 6",
  },
  {
    icon: file,
    name: "item 7",
  },
  {
    icon: alarm,
    name: "item 8",
  },
];
