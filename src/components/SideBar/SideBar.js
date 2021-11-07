import { Layout } from "antd";
import React, { useState } from "react";
import "./SideBar.css";

const SideBar = ({ menu }) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}

      // collapsedWidth={0}
      // trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
};

export default SideBar;
