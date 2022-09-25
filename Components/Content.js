import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, FlatList, TouchableOpacity} from "react-native";
import Navigation from "../Components/Navigation";
import {Dimensions} from 'react-native';
import Video from 'react-native-video'
import StyledButton from "./StyledButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const Content = () => {
    const [paused, setPaused] = React.useState(true);
    const [like, setLike] = React.useState(false)

    const onPlayPausePress = () => {
        setPaused(!paused)
    }

    const onLike = () => {
        setLike(!like)
    }

    const videoList = [
        {
            id: 'post1',
            videoUri: "https://d26eyunfxjoanx.cloudfront.net/video1.mp4",
            description: 'Test description for post 1',
            likes: 100000,
            comments: 23498,
            shares: 34020
        },
        {
            id: 'post2',
            videoUri: 'https://d26eyunfxjoanx.cloudfront.net/video2.mp4',
            description: 'Test description for post 1',
            likes: 100000,
            comments: 23498,
            shares: 34020
        },
        {
            id: 'post3',
            videoUri: 'https://d26eyunfxjoanx.cloudfront.net/video3.mp4',
            description: 'Test description for post 1',
            likes: 100000,
            comments: 23498,
            shares: 34020
        },
        {
            id: 'post4',
            videoUri: 'https://d26eyunfxjoanx.cloudfront.net/video4.mp4',
            description: 'Test description for post 1',
            likes: 100000,
            comments: 23498,
            shares: 34020
        },
    ]

    const VideoUtilities = () => {
        return (
            <View style={styles.utilities}>
                <TouchableOpacity onPress={onLike}>
                    <Icon style={like && styles.buttonActive} name={'cards-heart'} size={60} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name={'comment-text'} size={60} color="white"/>
                </TouchableOpacity>
            </View>
        )
    }

    const VideoItem = ({item}) => {
        return (
            <View>
                <Video
                    style={styles.video}
                    source={{uri: item.videoUri}}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
                <VideoUtilities />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.navigationWrapper}>
                <Navigation/>
                <TouchableWithoutFeedback onPress={onPlayPausePress}>
                    <FlatList
                        data={videoList}
                        renderItem={VideoItem}
                        showsVerticalScrollIndicator="false"
                        showsHorizontalScrollIndicator="false"
                        snapToInterval={Dimensions.get('window').height}
                        snapToAlignment="start"
                        decelerationRate={"fast"}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#0f1117',
    },
    navigationWrapper: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#232323'
    },
    video: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    utilities: {
        backgroundColor: 'transparent',
        height: 150,
        display: 'flex',
        justifyContent: "space-around",
        position: "absolute",
        top: Math.round(Dimensions.get('window').height/2),
        right: 0,

    },
    buttonActive: {
        color: 'red',
    }


});



export default Content;
