import React from 'react';
import {Icon, Container, Row, Col, Text,Button} from "atomize";
import PlayersAssigments from "./PlayersAssigments";


const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof (video));
    return (
        <>
        <Text tag="h2" textSize="display1">Assign Students For Roles:</Text>
        <Row m="2rem">
            <Col size="6">
                <PlayersAssigments/>
            </Col>
            <Col>
            <Container flexDir="row">
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
                <h4 className='ui header'>{video.snippet.title}</h4>
            </Container>
            </Col>
        </Row>

        </>

    )
}

export default VideoDetail;