import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  SunFilled,
  MoonFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu } from "antd";

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

type MenuItem = Required<MenuProps>["items"][number];

const generateMenuItems = (toggleTheme: () => void, theme: string) => {
  const items: MenuItem[] = [
    {
      key: "sub1",
      label: "Navigation One",
      icon: <MailOutlined />,
      children: [
        { key: "1", label: "Option 1" },
        { key: "2", label: "Option 2" },
        { key: "3", label: "Option 3" },
        { key: "4", label: "Option 4" },
      ],
    },
    {
      key: "sub2",
      label: "Navigation Two",
      icon: <AppstoreOutlined />,
      children: [
        { key: "5", label: "Option 5" },
        { key: "6", label: "Option 6" },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            { key: "7", label: "Option 7" },
            { key: "8", label: "Option 8" },
          ],
        },
      ],
    },
    {
      key: "changeTheme",
      label: "Settings",
      icon: <SettingOutlined />,
      children: [
        {
          key: "9",
          label: (
            <span onClick={toggleTheme}>
              {theme === "light" ? <MoonFilled /> : <SunFilled />}
              <span className="ml-2">Change theme</span>
            </span>
          ),
        },
      ],
    },
  ];
  return items;
};

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = generateMenuItems(toggleTheme, theme);

  return (
    <div className="sticky top-0">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="!hidden md:!flex"
      />
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        className="!block md:!hidden ml-auto"
      >
        <Button>
          <MenuFoldOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Header;
