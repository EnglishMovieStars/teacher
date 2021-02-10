import React from 'react';
import VideoItem from './VideoItem';
import {Div,Container,Row} from "atomize";
import '../style/video.css';
const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        console.log(video.id);
    });

    return <Container p="1rem" m="1rem" justify="center"  id="videoList" d="flex" overflow="auto"   w="100vh" >
        {renderedVideos}
    </Container>;
};
export default VideoList;