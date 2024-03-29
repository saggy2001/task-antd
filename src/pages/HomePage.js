import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import "./HomePage.css";
import { createElement, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo">
          {!collapsed && (
            <img
              src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/logo-1-dark.svg"
              alt="img"
            />
          )}
          {createElement(collapsed ? DoubleRightOutlined : DoubleLeftOutlined, {
            className: "trigger",
            onClick: toggle,
          })}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            About
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
        >
          <Row>
            <Col>2 / 5</Col>
            <Col>3 / 5</Col>
          </Row>

          {/* <Menu mode="horizontal">
            <Menu.Item
              style={{ background: "blue", opacity: "0.3", height: "90%" }}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item>Crafted</Menu.Item>
            <Menu.Item>Apps</Menu.Item>
            <Menu.Item>Layout</Menu.Item>
            <Menu.Item>Mega Menu</Menu.Item>
          </Menu> */}
        </Header>
        <Content style={{ margin: "20px 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
