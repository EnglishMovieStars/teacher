import React from 'react';

import {Container, Text, Image, Row, Col} from "atomize";

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <Container onClick={() => handleVideoSelect(video)} flexDir="column"  >

            <Image  w="10rem" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>

            <Text textSize="body">{video.snippet.title}</Text>


        </Container>
    )
};
export default VideoItem;