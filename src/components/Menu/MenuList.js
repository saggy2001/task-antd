// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import SubMenu from "antd/lib/menu/SubMenu";
import { Menu } from "antd";
import React from "react";

const MenuList = ({ topics, selectedKey, changeSelectedKey }) => {
  console.log(topics);
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item
        key={index}
        onClick={changeSelectedKey}
        // style={{ margin: "0" }}
      >
        {topic}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" theme="dark" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};

export default MenuList;
