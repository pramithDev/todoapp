import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import TaskAdd from '../TaskAdd'
import TaskItemList from '../Task/TaskItemList';
import { Container, Row, Col } from 'reactstrap';
import CompletedTaskList from '../Task/CompletedTaskList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskItemList: [
        // {
        //     id: 0,
        //     name:"hellooo 1",
        //     isEditing: false
        // },
        // {
        //     id: 1,
        //     name:"hellooo 222",
        //     isEditing: false
        // }
      ],
      taskToBeAddItem: ""
    };
  }

  //TASK IS COMPLETE OR NOT
  taskMarkComplete = id => {
    this.setState({
      taskItemList: this.state.taskItemList.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item["isCompleted"]
          };
        }
        return item;
      })
    });
    console.log('Clicked');
  };

  taskItemIdLast = 0;

  //ITEM ID SET
  taskItemIdNew = () => {
    const id =  this.taskItemIdLast;
    this.taskItemIdLast += 1;
    return id;
  };

  //TASK IS EDITING OR NOT
  taskToggleIsEditingAt  = id => {
    console.log("isEditingAt", id);
    this.setState({
      taskItemList: this.state.taskItemList.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isEditing: !item["isEditing"]
          };
        }
        return item;
      })
    });
  };

  //TASK INPUT HANDLE
  taskHandleItemInput = e => {
    this.setState({
      taskToBeAddItem: e.target.value
    })
  };

  //HANDLE EDITING ITEMS
  taskSetNameAt = (name, id) => {
    this.setState({
      taskItemList: this.state.taskItemList.map(item => {
        if (id === item.id) {
          return {
            ...item,
            name
          };
        }
        return item;
      })
    });
  };

  //TASK SUBMIT HANDLER
  taskItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.taskItemIdNew();
    this.setState({
      taskItemList: [
        {
          name: this.state.taskToBeAddItem,
          isEditing: false,
          completed: false,
          id
        },
        ...this.state.taskItemList
      ],
      taskToBeAddItem: ""
    });
  };

  //TASK REMOVING HANDLER
  taskRemoveItemAt = id => {
    this.setState({ taskItemList: this.state.taskItemList.filter(item => id !== item.id) });
  };

  render() {
    return (
        <div className="main-container">
          <Container fluid={true}>
            <div className="App-wrapper">
              <Header/>
              <div className="bottom-wrapper">
              <Row>
                <Col lg="6" xl="6">
                  <TaskAdd
                      taskHandleItemInput={this.taskHandleItemInput}
                      taskItemSubmitHandler={this.taskItemSubmitHandler}
                      taskToBeAddItem={this.state.taskToBeAddItem}
                  />
                </Col>
                <Col lg="6" xl="6">
                  <TaskItemList
                      taskItemList={this.state.taskItemList}
                      taskRemoveItemAt={this.taskRemoveItemAt}
                      taskToggleIsEditingAt={this.taskToggleIsEditingAt}
                      taskSetNameAt={this.taskSetNameAt}
                      taskMarkComplete = {this.taskMarkComplete}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" xl="6">
                  <CompletedTaskList
                      taskItemList={this.state.taskItemList}
                      taskRemoveItemAt={this.taskRemoveItemAt}
                  />
                </Col>
              </Row>
              </div>
            </div>
          </Container>
        </div>
    );
  }
}

export default App;
