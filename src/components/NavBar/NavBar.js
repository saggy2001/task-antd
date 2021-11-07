import {
  AppstoreFilled,
  ContactsFilled,
  HomeFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import "./NavBar.css";
import { Menu } from "antd";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Dashboard"
        placement="left"
        style={{ padding: 0 }}
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
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
      </Drawer>
    </nav>
  );
};

export default NavBar;
