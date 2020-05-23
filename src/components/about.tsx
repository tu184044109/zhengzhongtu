import React from 'react';
import profileImage from "../files/images/avatar.jpeg";
import googleImage from "../files/images/google.jpeg";
import utImage from "../files/images/ut_austin.png";
import fudanImage from "../files/images/fudan.png";
import './about.css'
import 'material-design-icons/iconfont/material-icons.css';
import {Button, Col, Divider, Layout, Row, Timeline, Card } from "antd";
import { ClockCircleOutlined, GithubOutlined, MailOutlined, LinkedinOutlined, YoutubeOutlined, ReadOutlined, GoogleOutlined } from '@ant-design/icons';
const ItemCard = () => {
    return (
        <div>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }} />
        </div>
    )

}

const CARD_WIDTH = 500

const Profile = () => {
    return (
        <div>
            <Row>
                <Col span={6} style={{ textAlign : 'center', marginTop : '30px' }}>
                    <div className="profile-image" style={{ textAlign : 'center' }}>
                        <img src={profileImage} alt="profile-image" style={{
                            width : '250px',
                            objectFit : 'cover', borderRadius : '50%',
                            margin: '0 auto 10px auto',
                            border : '5px solid #f2f3f3'
                        }}
                        />
                    </div>
                </Col>
                <Col span={18}>
                    <div className="profile-description">
                        <p> I am a second year Ph.D. student working with <a href="http://www.ece.utexas.edu/people/faculty/alan-bovik">Prof. Alan C. Bovik</a> in the Electrical and Computer Engineering department at University of Texas at Austin. I work on Computer Vision, Video Image Processing, Machine Learning, and related problems.
                            <br/>
                            Currently I am working on User-Generated Video Quality Assessment (UGC-VQA) as my Ph.D. research focus.
                        </p>
                    </div>
                    <div className="profile-description">
                        <h1>News</h1>
                        <ul>
                            <li>
                                <p><b>2020-05 - ICIP'2020 Accepted</b> <i>A Comparative Evaluation of Temporal Pooling Methods for Blind Video Quality Assessment</i></p>
                            </li>
                            <li>
                                <p><b>2020-01 - ICASSP'2020 Accepted</b> <i>BBAND Index: a No-Reference Banding Artifact Predictor</i></p>
                            </li>
                            <li>
                                <p><b>2018-01 - ICCE'2018 Accepted</b> <i>Content adaptive tiling method based on user access preference for streaming panoramic video</i> </p>
                            </li>
                            <li>
                                <p><b>2018-01 - ICCE'2018 Accepted</b> <i>Panoramic video delivery based on Laplace compensation and Sphere-Markov probability model</i> </p>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={6} style={{ textAlign : 'center' }}>
                    <h1><b>Zhengzhong Tu</b></h1>
                    <li>Video Quality Assessment</li>
                    <li>Computer Vision</li>
                    <li>Machine Learning</li>
                    <br/>
                    <h1><b>Contacts</b></h1>
                    <li>
                        <a href="https://github.com/tu184044109"><GithubOutlined /> Github </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zhengzhongtu/"><LinkedinOutlined /> Linkedin </a>
                    </li>
                    <li>
                        <a href="https://www.researchgate.net/profile/Zhengzhong_Tu2/"><ReadOutlined /> ResearchGate </a>
                    </li>
                    <li>
                        <a href="https://scholar.google.com/citations?user=9ajdZaEAAAAJ&hl=zh-TW"><GoogleOutlined />Google Scholar </a>
                    </li>
                    <li>
                        <a href="mailto:zhengzhong.tu@utexas.edu"><MailOutlined /> Email: zhengzhong.tu@utexas.edu </a>
                    </li>
                </Col>
                <Col span={14}>
                    <div className="timeline">
                        <h1>Education and Experience</h1>
                        <Timeline mode="alternate">
                            <Timeline.Item color="red" style={{ fontSize : '15px' }} label="2020-06">
                                <Card> <Card.Meta avatar={<img src={googleImage} alt="google-image" style={{ width : '80px'}}/>} title="Research Intern" description={<div><p>Team: Google Phone Software</p><p>Host: Li Wei</p></div>} /> </Card>
                            </Timeline.Item>

                            <Timeline.Item color="red" style={{ fontSize : '15px' }} label="2019-06">
                                <Card> <Card.Meta avatar={<img src={googleImage} alt="google-image" style={{ width : '80px'}}/>} title="Research Intern" description={<div><p>Team: Youtube</p><p>Host: Jessin Lin, Yilin Wang</p></div>} /> </Card>
                            </Timeline.Item>

                            <Timeline.Item color="red" style={{ fontSize : '15px' }} label="2018-09 - Present">
                                <Card > <Card.Meta avatar={<img src={utImage} alt="ut-image" style={{ width : '80px'}}/>} title="2018-09 Ph.D. Student @ UT Austin" description="Advisor - Prof. Alan C. Bovik" /> </Card>
                            </Timeline.Item>

                            <Timeline.Item color="gray" style={{ fontSize : '15px' }} label="2018-06">
                                <Card> <Card.Meta avatar={<img src={fudanImage} alt="fudan-image" style={{ width : '80px'}}/>} title="Graduated from @ Fudan University" description="M.Eng. in Integrated Circuits Design" /> </Card>
                            </Timeline.Item>

                            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="gray" style={{ fontSize : '15px' }}>
                                <b>2016-09 - Master Student @ Fudan University </b>
                            </Timeline.Item>

                            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="gray" style={{ fontSize : '15px' }}>
                                <b>2016-06 - Graduated From @ Fudan University </b>
                                <p><i>B.S. in Microelectronics</i></p>
                            </Timeline.Item>

                            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="gray" style={{ fontSize : '15px' }}>
                                <b>2012-09 - Undergraduate @ Fudan University </b>
                            </Timeline.Item>

                        </Timeline>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;

//
// <Timeline.Item style={{ fontSize : '15px' }}> <b>2020-05 - ICIP'2020 Accepted</b>
//     <p><i>A Comparative Evaluation of Temporal Pooling Methods for Blind Video Quality Assessment </i></p>
// </Timeline.Item>
//
// <Timeline.Item style={{ fontSize : '15px' }}><b>2020-01 - ICASSP'2020 Accepted</b>
//     <p><i>BBAND Index: a No-Reference Banding Artifact Predictor</i></p>
// </Timeline.Item>
//
//
// <Timeline.Item color="gray" style={{ fontSize : '15px' }}><b>2018-01 - 2 x ICCE'2018 Accepted</b>
//     <p><i>Content adaptive tiling method based on user access preference for streaming panoramic video</i></p>
//     <p><i>Panoramic video delivery based on Laplace compensation and Sphere-Markov probability model</i></p>
// </Timeline.Item>