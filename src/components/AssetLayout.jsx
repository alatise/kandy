import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import HomeActive from "../assets/common/home-active.svg";
import HomeInactive from "../assets/common/home-inactive.svg";
import MarketPlaceInactive from "../assets/common/market-inactive.svg";
import MarketPlaceActive from "../assets/common/market-active.svg";
import TransactionActive from "../assets/common/transaction-active.svg";
import TransactionInactive from "../assets/common/transaction-inactive.svg";
import ProfileActive from "../assets/common/profile-active.svg";
import ProfileInactive from "../assets/common/profile-inactive.svg";
import Buoy from "../../src/assets/sidebar-items/life-buoy.svg";
import Settings from "../../src/assets/sidebar-items/settings.svg";

const { Sider, Content } = Layout;

const AssetLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const isActive = (path) => {
    return location.pathname === `/asset${path}`;
  };

  return (
    <Layout className="">
      <Sider
        style={{
          //   overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#296CD6",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Button
          type="text"
          //   icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          className="bg-group bg-no-repeat bg-center"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            // fontSize: "16px",
            marginTop: "32px",
            marginLeft: "24px",
            marginBottom: "24px",
            width: 36,
            height: 26,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            color: "white",
            // justifyContent: "space-around",
          }}
        >
          <Menu
            //   theme="dark"
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
            {[
              {
                key: "1",
                icon: isActive("/dashboard") ? (
                  <img src={HomeActive} alt="Home" />
                ) : (
                  <img src={HomeInactive} alt="Home" />
                ),
                label: "Dashboard",
                link: "/dashboard",
              },
              {
                key: "2",
                icon: isActive("/market") ? (
                  <img src={MarketPlaceActive} alt="market" />
                ) : (
                  <img src={MarketPlaceInactive} alt="market" />
                ),
                label: "Marketplace",
                link: "/market",
              },
              {
                key: "3",
                icon: isActive("/transaction-settltement") ? (
                  <img src={TransactionActive} alt="transaction" />
                ) : (
                  <img src={TransactionInactive} alt="transaction" />
                ),
                label: "Transaction settlement",
                link: "/transaction-settlement",
              },
              {
                key: "4",
                icon: isActive("/profile") ? (
                  <img src={ProfileInactive} alt="profile" />
                ) : (
                  <img src={ProfileActive} alt="profile" />
                ),
                label: "User Profile",
                link: "/profile",
              },
            ].map((item) => (
              <Menu.Item
                key={item.key}
                className={isActive(item.link) ? "active-menu-item" : ""}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Center the content horizontally
                }}
              >
                <Link to={`/asset${item.link}`}>{item.icon}</Link>
              </Menu.Item>
            ))}
          </Menu>

          <Menu
            //   theme="dark"
            style={{
              backgroundColor: "#296CD6",
              color: "white",
              marginTop: "  15rem",
            }}
            mode="inline"
            items={[
              {
                key: "5",
                icon: (
                  <Link to="/asset/buoy">
                    <img src={Buoy} alt="Buoy" />
                  </Link>
                ),
              },
              {
                key: "6",
                icon: (
                  <Link to="/asset/settings">
                    <img src={Settings} alt="Settings" />
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <Content
          style={{
            paddingLeft: "56.5px",
            paddingTop: "40px",
            paddingRight: "55.32px",
            // padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* Content */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AssetLayout;
