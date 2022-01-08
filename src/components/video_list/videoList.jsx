import React, { Component } from 'react';
import VideoItem from '../video_item/video_item';
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';


const VideoList = ({results, onVideoClick, display}) => (
  
  (
    <Row>
    { results.map(video => (
      <VideoItem
        key = {video.id}
        video = {video}
        onVideoClick={onVideoClick}
        display = {display}
      />
  
    ))}
    </Row>
    )
  );

export default VideoList;
