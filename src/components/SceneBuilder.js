import React from 'react';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Searchbar from "./Searchbar";
import {Container,Text} from "atomize";
import youtube from '../apis/youtube';
import PlayersAssignments from "./PlayersAssigments";
import PlayersAssigments from "./PlayersAssigments";

class SceneBuilder extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <Container  d="flex">
                <Container flexDir="row"  >
                    <Text tag="h1" textSize="display1">Search A Movie Scene:</Text>
                    <Searchbar handleFormSubmit={this.handleSubmit}/>
                    <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                </Container>
            </Container>

        )
    }

}

export default SceneBuilder;