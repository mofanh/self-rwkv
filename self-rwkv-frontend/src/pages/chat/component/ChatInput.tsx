import { Input } from 'antd';
import React from 'react';
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
  <>
   <TextArea rows={4} maxLength={6} placeholder="请输入" allowClear onChange={onChange} />
  </>
);

export default App;
