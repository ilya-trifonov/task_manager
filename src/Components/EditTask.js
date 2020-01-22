import React, {Component} from 'react'
import "antd/dist/antd.css";
import {Button, Input, Modal, Form} from 'antd';

const { TextArea } = Input;

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

render() {


    return  (
        <div>
            <Button type="primary" onClick={this.showModal}>
                <b>Редактировать задачу</b>
            </Button>
            <Modal
                title="Редактировать задачу"
                visible={this.state.visible}
                onOk={this.handleCancel}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={this.handleCancel}>
                        Готово
                    </Button>
                ]}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="Заголовок">
                        <Input type="text" onChange={event => this.props.onChangeTitle(event.target.value, this.props.index)} value={this.props.task.title} />
                    </Form.Item>
                    <Form.Item label="Срок исполнения">
                        <Input type="date" onChange={event => this.props.onChangeDate(event.target.value, this.props.index)} value={this.props.task.date} />
                    </Form.Item>
                    <Form.Item label="Описание задачи">
                        <TextArea onChange={event => this.props.onChangeBody(event.target.value, this.props.index)} value={this.props.task.body}/>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}
}
export default EditTask