import React from 'react';
import { Form, Input } from 'antd';

 const SuJobForm = () => {
  return (
    <Form>
      {Array(4).map((item, index) => {
        return (
          <Form.Item key={index} label="状态">
            <Input />
          </Form.Item>
        );
      })}
    </Form>
  );
};
 export default SuJobForm;