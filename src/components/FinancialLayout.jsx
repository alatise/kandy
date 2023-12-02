import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";

import SideNav from "./SideNav";

const { Sider, Content } = Layout;

const FinancialLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="">
      <div className="hidden lg:block">
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
          breakpoint={"lg"}

          // collapsedWidth={0}
          // className="hiddem lg:block"
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
          <SideNav />

          {/* <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexDirection: "column",
              color: "white",
              // justifyContent: "space-around",
            }}
          > */}

          {/* <Menu
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
              items={[
                {
                  key: "1",
                  icon: (
                    <Link to="/financial/dashboard">
                      <img src={HomeActive} alt="Home" />
                    </Link>
                  ),
                  label: "Dashboard",
                },

                {
                  key: "2",
                  icon: (
                    <Link to="/financial/marketplace">
                      <img src={MarketPlaceInactive} alt="Home" />
                    </Link>
                  ),
                  label: "Marketplace",
                },
                {
                  key: "3",
                  icon: (
                    <Link to="/financial/transaction-settlement">
                      <img src={Flag} alt="Flag" />
                    </Link>
                  ),
                  label: "Transaction settlement",
                },
                {
                  key: "4",
                  icon: (
                    <Link to="/financial/profile">
                      <img src={Users} alt="Users" />
                    </Link>
                  ),
                  label: "User Profile",
                },
              ]}
            />

            <Menu
              style={{
                backgroundColor: "#296CD6",
                position: "absolute",
                bottom: 0,
                left: 0,
                color: "white",
              }}
              mode="inline"
              items={[
                {
                  key: "5",
                  icon: (
                    <Link to="/financial/buoy">
                      <img src={Buoy} alt="Buoy" />
                    </Link>
                  ),
                },
                {
                  key: "6",
                  icon: (
                    <Link to="/financial/settings">
                      <img src={Settings} alt="Settings" />
                    </Link>
                  ),
                },
              ]}
            /> */}
          {/* </div> */}
        </Sider>
      </div>
      <Layout>
        <Content
          style={{
            // paddingLeft: "56.5px",
            paddingTop: "40px",
            // paddingRight: "55.32px",
            // padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
          className="lg:px-[56px] px-4"
        >
          {/* Content */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default FinancialLayout;
