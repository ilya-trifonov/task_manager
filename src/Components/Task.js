import React from 'react'
import "antd/dist/antd.css";
import { Row, Col, Button  } from 'antd';
import { Collapse} from 'antd';
import EditTask from "./EditTask";

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
                                <EditTask
                                task={task}
                                onChangeTitle={onChangeTitle}
                                onChangeDate={onChangeDate}
                                onChangeBody={onChangeBody}
                                index={index}
                                />
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
