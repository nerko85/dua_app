/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Card, Col, Icon, Modal } from 'antd';

export default class Duas extends Component {
  state = {
    modalVisible: false,
  };

  favHandler = e => {
    e.preventDefault();
    const { changeFav } = this.props;
    changeFav(this.props);
    // console.log(this)
  };

  setVisible = modalVisible => {
    this.setState({ modalVisible });
  };

  render() {
    const { title, content, favourite } = this.props;
    // const proba = favourite ? <Icon type="star" /> : <Icon type="star-o" />;
    return (
      <div>
        <Col
          lg={{ span: 6 }}
          className="gutter-row"
          onClick={() => this.setVisible(true)}
        >
          <Card
            title={title}
            style={{ width: 300 }}
            extra={
              <Icon
                type={favourite ? 'star' : 'star-o'}
                onClick={this.favHandler}
              />
            }
          >
            <p>{content}</p>
          </Card>
        </Col>
        {
          // <Modal
          //   title={title}
          //   wrapClassName="vertical-center-modal"
          //   visible={this.state.modalVisible}
          //   onOk={() => this.setVisible(false)}
          //   onCancel={() => this.setVisible(false)}
          // >
          //   <p>{content}</p>
          // </Modal>
        }
      </div>
    );
  }
}
