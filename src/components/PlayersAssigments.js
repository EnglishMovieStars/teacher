import React from 'react';
import {Text, Container, Row, Col, Button, Input, Icon} from "atomize";


class PlayersAssignments extends React.Component {
    counter = 0;
    students = [{Name: "", Role: ""},{Name: "", Role: ""},{Name: "", Role: ""}]
    state = {
        addedStudent: {key: "", Name: ""}
    };



    increment(){
        this.counter = this.counter+1;
        return ""
    }
    onAdd = (event) => {
        console.log("maya sigal",event.target.Id)

        let name = document.getElementById('name_' + event.target.Id).value;
        let role = document.getElementById('role_' + event.target.Id).value;
        this.setState({
            addedStudent: {key: event.target.Id, Name: role}
        });

        this.students[event.target.ID] = {Name: name, Role: role};
        this.students[this.counter+1] = {Name: "", Role: ""};
    };
    handleSubmit = event => {
        event.preventDefault();
        // this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.students.map(student => (

                    <Row  p="0.5rem">
                        {this.increment()}
                        <Col>
                            <Input p="1rem" id={"name_" + this.counter}  type="text" h="2rem"
                                   defaultValue={student.Name} placeholder="Name" bg="grey500" rounded="sm"/>

                        </Col>

                        <Col>
                            <Input  p="1rem" id={"role_" + this.counter}  h="2rem"  placeholder="Role" rounded="sm" type="text" defaultValue={student.Role} bg="grey500"/>

                        </Col>

                    </Row>

                ))}
                <Row h="5rem">

                </Row>
                <Row>
                    <Button
                        bg="info700"
                        suffix={
                            <Icon
                                name="LongRight"
                                size="16px"
                                color="white"
                                m={{ l: "1rem" }}
                            />
                        }
                        m={{ r: "1rem" }}
                    >
                        Submit
                    </Button>
                </Row>
            </form>)


    }
}

export default PlayersAssignments;