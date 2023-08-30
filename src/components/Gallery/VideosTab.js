import { React } from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { 
    VIDEO1,
    VIDEO2,
    VIDEO3,
    VIDEO4,
    VIDEO5,
} from '../../constants';
import VideoCard from './VideoCard'

const VideosTabs = () => {
    return (
        <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO1} 
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO2} 
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO3} 
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO4} 
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO5} 
                    />
                </Col>
            </Row>
        </>
    )
};

export default VideosTabs;