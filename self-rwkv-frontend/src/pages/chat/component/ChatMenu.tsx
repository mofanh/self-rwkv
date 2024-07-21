import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
      key: 'histoy',
      label: '对话历史',
      type: 'group',
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
      ],
    },
  ];

const ChatMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu onClick={onClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />
  );
};

export default ChatMenu;
