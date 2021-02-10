import React from 'react';
import {Input, Div, Container, Button, Row, Col, Icon} from "atomize";

class Searchbar extends React.Component {
    state = {
        term: 'Search a Movie'
    };
    Clear = (event) => {
        if (event.target.value == 'Search a Movie') {
            event.target.value = ""
        }

    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }


    render() {

        return (

                <form onSubmit={this.handleSubmit}>
                    <Row  align="center">
                        <Col>
                            <Input
                                   onChange={this.handleChange}
                                   m={{xs: '1rem', md: '1rem'}}
                                   name='video-search'
                                   onFocus={this.Clear}
                                   type="text"
                                   value={this.state.term}/>
                        </Col>
                        <Col size="2">
                            <Button
                                h="2.5rem"
                                w="2.5rem"
                                rounded="circle"
                                shadow="2"
                                hoverShadow="4"
                            >
                                <Icon name="Search" size="20px" color="white"/>
                            </Button>
                        </Col>
                    </Row>

                </form>


        )
    }
}

export default Searchbar;