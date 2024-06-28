import { Menu, MenuProps } from "antd";
import { useNavigate } from 'react-router-dom';
import { HeaderMenuOptionList } from "./const";

const HeaderMenuList: MenuProps["items"] = HeaderMenuOptionList.map((item) => ({
  key: item.key,
  label: item.label,
  path: item.path,
}));

const MyHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onClick={({key}) => {
          console.log(key);
          navigate(key);
        }}
        items={HeaderMenuList}
        style={{ flex: 1, minWidth: 0 }}
      />
    </>
  );
};

export default MyHeader;
