import { Input } from 'antd';
import React from 'react';
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const ChatInput: React.FC = () => (
  <>
   <TextArea rows={2} placeholder="请输入" allowClear onChange={onChange} />
  </>
);

export default ChatInput;
