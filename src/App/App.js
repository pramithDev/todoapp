import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import AddItem from '../AddItem'
import ItemList from '../Items/ItemList';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: [
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
            toBeAddItem: ""
        };
    }

    itemIdLast = 0;

    itemIdNew = () => {
        const id =  this.itemIdLast;
        this.itemIdLast += 1;
        return id;
    };

    toggleIsEditingAt  = id => {
        console.log("isEditingAt", id);
        this.setState({
            itemList: this.state.itemList.map(item => {
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

    handleItemInput = e => {
        this.setState({
            toBeAddItem: e.target.value
        })
    };

    // handle editing items
    setNameAt = (name, id) => {
        this.setState({
            itemList: this.state.itemList.map(item => {
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

    ItemSubmitHandler = e => {
        e.preventDefault();
        const id = this.itemIdNew();
        this.setState({
            itemList: [
                {
                    name: this.state.toBeAddItem,
                    isEditing: false,
                    id
                },
                ...this.state.itemList
            ],
            toBeAddItem: ""
        });
    };

    removeItemAt = id => {
        this.setState({ itemList: this.state.itemList.filter(item => id !== item.id) });
    };

  render() {
    return (
      <div className="main-container">
          <Container fluid={true}>
              <div className="App-wrapper">
                <Header/>
                <Row>
                    <Col lg="6" xl="6">
                        <AddItem
                            handleItemInput={this.handleItemInput}
                            ItemSubmitHandler={this.ItemSubmitHandler}
                            toBeAddItem={this.state.toBeAddItem}
                        />
                    </Col>
                    <Col lg="6" xl="6">
                        <ItemList
                            itemList={this.state.itemList}
                            removeItemAt={this.removeItemAt}
                            toggleIsEditingAt={this.toggleIsEditingAt}
                            setNameAt={this.setNameAt}
                        />
                    </Col>
                </Row>
              </div>
          </Container>
      </div>
    );
  }
}

export default App;