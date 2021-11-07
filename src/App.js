import {
  AppstoreFilled,
  ContactsFilled,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HomeFilled,
  MessageFilled,
  NotificationFilled,
  SearchOutlined,
  SignalFilled,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";
import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import SideBar from "./components/SideBar/SideBar";

const { Sider, Header, Content } = Layout;

const App = () => {
  const topics = ["First topic", "Second topic", "Third topic"];
  const [collapsed, setCollapsed] = useState(false);
  // const [contentIndex, setContentIndex] = useState(0);
  // const [selectedKey, setSelectedKey] = useState("0");
  // const changeSelectedKey = (event) => {
  //   const key = event.key;
  //   setSelectedKey(key);
  //   setContentIndex(+key);
  // };

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  console.log(topics);
  // const Menu = (
  //   <MenuList
  //     topics={topics}
  //     selectedKey={selectedKey}
  //     changeSelectedKey={changeSelectedKey}
  //   />
  // );
  return (
    <Layout>
      <Sider
        width={250}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {collapsed ? (
            <DoubleRightOutlined className="trigger" onClick={toggle} />
          ) : (
            <div style={{ width: "100%", display: "flex" }}>
              <div className="logo">
                <img
                  src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/logo-1-dark.svg"
                  alt="logo"
                />
              </div>
              <DoubleLeftOutlined className="trigger" onClick={toggle} />
            </div>
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeFilled />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreFilled />}>
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsFilled />}>
            Contact Us
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header-layout"
          style={{ padding: 0 }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <NavBar />

            <div className="header-menu">
              <Button className="header-btn" type="link">
                Dashboard
              </Button>
              <Button className="header-btn" type="link">
                Crafted
              </Button>
              <Button className="header-btn" type="link">
                Apps
              </Button>
              <Button className="header-btn" type="link">
                Layout
              </Button>
              <Button className="header-btn" type="link">
                Resources
              </Button>
              <Button className="header-btn" type="link">
                Mega Menu
              </Button>
            </div>
            <div style={{ marginRight: "1rem", justifySelf: "flex-end" }}>
              <Button
                type="link"
                className="header-btn"
                style={{ borderRadius: "8px" }}
                size="large"
                icon={<SearchOutlined />}
              />
              <Button
                type="link"
                className="header-btn"
                style={{ borderRadius: "8px" }}
                size="large"
                icon={<SignalFilled />}
              />
              <Button
                type="link"
                className="header-btn"
                style={{ borderRadius: "8px" }}
                size="large"
                icon={<NotificationFilled />}
              />
              <Button
                type="link"
                className="header-btn"
                style={{ borderRadius: "8px" }}
                size="large"
                icon={<MessageFilled />}
              />
              <Avatar
                style={{ marginLeft: "5px", cursor: "pointer" }}
                shape="square"
                src="https://media-exp1.licdn.com/dms/image/C5103AQHMCWvwzbeW-g/profile-displayphoto-shrink_400_400/0/1587035104299?e=1642032000&v=beta&t=PTKgIZsz8C4CuhnNruwpvyketxIqnNw6g7v1eG0a_54"
              />
            </div>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
