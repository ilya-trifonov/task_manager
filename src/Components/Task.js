import React from 'react'
import "antd/dist/antd.css";
import { Row, Col, Button, Input } from 'antd';
import { Collapse} from 'antd';

const { TextArea } = Input;
const { Panel } = Collapse;

const Tasks = ({tasks, deleteTask, onChangeTitle, onChangeDate, onChangeBody}) => {

    const taskList = tasks.length ? (
        tasks.map((task, index) => {
            return (
                <Panel header={task.title} key={index} extra={<small>Исполнить до: <b>{task.date}</b></small>}>
                    <p>{task.body}</p>
                    <div className="task-footer">
                        <Row>
                            <Col span={8}>
                                <Input type="text" onChange={event => onChangeTitle(event.target.value, index)} value={task.title} />
                                <Input type="date" onChange={event => onChangeDate(event.target.value, index)} value={task.date}/>
                                <TextArea onChange={event => onChangeBody(event.target.value, index)} value={task.body}/>
                            </Col>
                            <Col span={16} className="right-button">
                                <Button type="danger" className="delete" onClick={() => {deleteTask(task.id)}}>
                                    <b>Завершить</b>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Panel>
            );
        })
    ) : (
        <p className="center notask-text grey-text">Вы еще не добавили ни одного задания</p>
    );
    return (
        <div className="tasks collection">
            <Collapse accordion>
                {taskList}
            </Collapse>
        </div>

    )
};
export default Tasks
