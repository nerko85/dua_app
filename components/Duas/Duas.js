import React, { Component } from 'react'
import { Card, Col, Icon, Modal } from 'antd'

class Duas extends Component {
    constructor(props){
        super(props);
        this.favHandler = this.favHandler.bind(this);
        this.state = {
            modalVisible: false,
          }
    }
    render() {
        const { title, content, favourite } = this.props;
        const proba = favourite ? <Icon type="star" /> : <Icon type="star-o" />;
        return (
            <div>
                <Col lg={{ span: 6}} className="gutter-row" onClick={() => this.setVisible(true)} >
                    <Card title={title} style={{ width: 300 }} extra={<a href="#" onClick={this.favHandler}> {favourite ? <Icon type="star" /> : <Icon type="star-o" />}</a>} >
                        <p className='proba'>{content}</p>
                    </Card>
                </Col>
                <Modal
                    title={title}
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={() => this.setVisible(false)}
                    onCancel={() => this.setVisible(false)}
                    >
                    <p>{content}</p>
                </Modal>  
            </div>
        )
    }

    favHandler(e){
        e.preventDefault();
        const { changeFav } = this.props;
        changeFav(this.props)
        // console.log(this)
    }

    setVisible(modalVisible) {
        this.setState({ modalVisible });
      }
}

export default Duas;