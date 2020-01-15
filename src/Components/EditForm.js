import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const { TextArea } = Input;

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {title: '', body: '', date: ''}
            ],
            visible: false
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

    handleChange = () => {
        this.setState({
            title: document.querySelector('.input-title').value,
            body: document.querySelector('.input-text').value,
            date: document.querySelector('.input-date').value
        })
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {

        return (
            <div className="edit-button">
                <Button type="default" onClick={this.showModal}>
                    <b>Редактировать задачу</b>
                </Button>
                <Modal
                    title="Редактировать задачу"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Отмена
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleSubmit}>
                            Сохранить
                        </Button>
                    ]}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="Заголовок">
                            <Input className="input-title" type="text" onChange={this.handleChange} value={this.state.title}/>
                        </Form.Item>
                        <Form.Item label="Срок исполнения">
                            <Input className="input-date" type="date" onChange={this.handleChange} value={this.state.date}/>
                        </Form.Item>
                        <Form.Item label="Описание задачи">
                            <TextArea className="input-text" onChange={this.handleChange} value={this.state.body} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default EditForm