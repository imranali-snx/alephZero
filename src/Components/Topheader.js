import React from "react";
import { Col, Menu, Row } from "antd";
import { useState } from "react";
import "../App.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Column from "antd/es/table/Column";
// const items = [
//   {
//     label: "Explore ",
//     key: "explore",
//     children: [
//       {
//         type: "group",
//         label: "Item ",
//       },
//     ],
//   },
//   {
//     label: "Learn ",
//     key: "learn",
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//       },
//     ],
//   },
//   {
//     label: "Verify",
//     key: "verify",
//     children: [
//       {
//         type: "group",
//         label: "Item 2",
//       },
//     ],
//   },
//   {
//     label: "Meet Us",
//     key: "meetus",
//     children: [
//       {
//         type: "group",
//         label: "Item 2",
//       },
//     ],
//   },

// ];
const Topheader = () => {
  //   const [current, setCurrent] = useState("mail");
  //   const onClick = (e) => {
  //     setCurrent(e.key);
  //   };
  return (
    // <Menu
    //   onClick={onClick}
    //   selectedKeys={[current]}
    //   mode="horizontal"
    //   items={items}
    // />
    <Row>
        <Col>
        <Menu mode="horizontal">
          <Menu.SubMenu key="explore" title="Explore">
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
          </Menu.SubMenu>
          </Menu>
        </Col>
        <Col>
        <Menu mode="horizontal">
          <Menu.SubMenu key="learn" title="Learn">
            <Menu.Item key="11" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="22" icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
          </Menu.SubMenu>
          </Menu>
        </Col>
        <Col>
        <Menu mode="horizontal">
          <Menu.SubMenu key="verify" title="Verify">
            <Menu.Item key="111" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="222" icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
          </Menu.SubMenu>
          </Menu>
        </Col>
        <Col>
        <Menu mode="horizontal">
          <Menu.SubMenu key="meet" title="Meet Us">
            <Menu.Item key="1111" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="2222" icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
          </Menu.SubMenu>
          </Menu>
        </Col>
    </Row>
  );
};

export default Topheader;
