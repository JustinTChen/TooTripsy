import { React } from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { 
    VIDEO1,
    VIDEO2,
    VIDEO3,
    VIDEO4,
    VIDEO5,
    VIDEO6,
} from '../../constants';
import VideoCard from './VideoCard'

const VideosTabs = () => {
    return (
        <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO1} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO2} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO3} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO4} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO5} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col style={{ width: "15%" }} />
                <Col style={{ width: "70%" }}>
                    <VideoCard 
                        videoId={VIDEO6} 
                    />
                </Col>
                <Col style={{ width: "15%" }} />
            </Row>
        </>
    )
};

export default VideosTabs;