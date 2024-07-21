import { Col, Row } from 'antd';
import React from 'react';

const MessageArea: React.FC = () => (
  <>
    <Row gutter={24}>
    <Col span={11} offset={6} style={{backgroundColor: 'black'}}>
        col-11
      </Col>
    </Row>
  </>
);

export default MessageArea;
