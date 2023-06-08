import { React } from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { 
    VIDEO1,
    VIDEO2,
    VIDEO3,
    VIDEO4,
    VIDEO5,
    VIDEO6,
    VIDEO7,
    VIDEO8
} from '../../constants';
import VideoCard from './VideoCard'

const VideosTabs = () => {
    return (
        <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO1} 
                        entity={"Jigokudani (Snow Monkey) Park"}
                        location={"Nagano, Japan"}
                    />
                </Col>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO2} 
                        entity={"Bergen tourism"}
                        location={"Bergen, Norway"}
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO3} 
                        entity={"a local Hawaiian tour service"}
                        location={"Oahu, Hawaii"}
                    />
                </Col>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO4} 
                        entity={"University of California, Berkeley"}
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO5} 
                        entity={"a local tour guide"}
                        location={"Oceano Beach SVRA"}
                    />
                </Col>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO6} 
                        entity={"Hawaii tourism"}
                        location={"Oahu, Hawaii"}
                    />
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO7} 
                        entity={"Dreams La Mareas Resort"}
                        location={"Costa Rica"}
                    />
                </Col>
                <Col md={6}>
                    <VideoCard 
                        videoId={VIDEO8} 
                        entity={"a local Rio favela guide"}
                        location={"Rocinha Favela"}
                    />
                </Col>
            </Row>
        </>
    )
};

export default VideosTabs;