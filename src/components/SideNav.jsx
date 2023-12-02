import React from "react";
import HomeInactive from "../../src/assets/sidebar-items/home-inactive.svg";
import HomeActive from "../../src/assets/sidebar-items/home-active.svg";
import MarketPlaceInactive from "../../src/assets/sidebar-items/marketplace-inactive.svg";
import MarketPlaceActive from "../../src/assets/sidebar-items/marketplace-active.svg";
import FlagInactive from "../../src/assets/sidebar-items/flag.svg";
import FlagActive from "../../src/assets/sidebar-items/FlagActive.svg";
import UsersInactive from "../../src/assets/sidebar-items/users.svg";
import UsersActive from "../../src/assets/sidebar-items/ProfileActive.svg";
import Buoy from "../../src/assets/sidebar-items/life-buoy.svg";
import Settings from "../../src/assets/sidebar-items/settings.svg";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const commonStyle = {
    borderRadius: "12px",
    background:
      "radial-gradient(468.89% 262.15% at 0.9% 2.98%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
    boxShadow: "0px 0px 42px 0px #296CD6",
  };

  const sidebarLinks = [
    {
      key: "1",
      path: "/financial/dashboard",
      icon: (
        <img
          src={isActive("/financial/dashboard") ? HomeActive : HomeInactive}
          alt="Home"
        />
      ),
      label: "Dashboard",
      style: isActive("/financial/dashboard") ? commonStyle : {},
    },
    {
      key: "2",
      path: "/financial/marketplace",
      icon: (
        <img
          src={
            isActive("/financial/marketplace")
              ? MarketPlaceActive
              : MarketPlaceInactive
          }
          alt="Marketplace"
        />
      ),
      label: "Marketplace",
      style: isActive("/financial/marketplace") ? commonStyle : {},
    },
    {
      key: "3",
      path: "/financial/transaction-settlement",
      icon: (
        <img
          src={
            isActive("/financial/transaction-settlement")
              ? FlagActive
              : FlagInactive
          }
          alt="Transaction Settlement"
        />
      ),
      label: "Transaction Settlement",
      style: isActive("/financial/transaction-settlement") ? commonStyle : {},
    },
    {
      key: "4",
      path: "/financial/profile",
      icon: (
        <img
          src={isActive("/financial/profile") ? UsersActive : UsersInactive}
          alt="User Profile"
        />
      ),
      label: "User Profile",
      style: isActive("/financial/profile") ? commonStyle : {},
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        color: "white",
        justifyContent: "space-between",
        height: "",
      }}
    >
      <Menu
        style={{
          backgroundColor: "#296CD6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
        }}
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        {sidebarLinks.map((item) => (
          <Menu.Item
            key={item.key}
            icon={<Link to={item.path}>{item.icon}</Link>}
            style={item.style}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      <Menu
        style={{
          backgroundColor: "#296CD6",
          width: "auto",
          position: "absolute",
          bottom: 0,
          right: 0,
          color: "white",
          alignSelf: "flex-end",
        }}
        mode="inline"
      >
        <Menu.Item
          key="5"
          icon={
            <Link to="/financial/buoy">
              <img src={Buoy} alt="Buoy" />
            </Link>
          }
        >
          Buoy
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={
            <Link to="/financial/settings">
              <img src={Settings} alt="Settings" />
            </Link>
          }
        >
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
