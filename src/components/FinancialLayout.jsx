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
        >
          <Button
            type="text"
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
        </Sider>
      </div>
      <Layout>
        <Content
          style={{
            paddingTop: "40px",
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
