import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import ChatInput from "../component/ChatInput";
import ChatMenu from "../component/ChatMenu";
import MessageArea from "../component/MessageArea";

export const ChatLayout = () => {
  // { dispatch, children, chat }
  // const { chatUserInfo, chatRecordList } = chat;

  // 点击切换当前聊天对象
  // model/chat 中定义 `chat/chatCurrentUser`
  const onChangeChatCurrentUser = (item: any) => {
    // dispatch({
    //   type: "chat/chatCurrentUser",
    //   payload: {
    //     chatUserInfo: item,
    //   },
    // });
    console.log('onChangeChatCurrentUser--', item);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout style={{ height: '78vh' }}>
        <Sider
          style={{ background: colorBgContainer }}>
          <ChatMenu />
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <MessageArea />
          <Footer style={{ textAlign: "center", maxWidth: '40vw'}}>
            <ChatInput />
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};
