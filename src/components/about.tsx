import React from 'react';
import profileImage from "../files/images/avatar.jpeg";
import './about.css'
import 'material-design-icons/iconfont/material-icons.css';
import {Button, Col, Divider, Layout, Row, Timeline} from "antd";
import { ClockCircleOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
const Profile = () => {
    return (
        <div>
            <Row>
                <Col span={6} style={{ textAlign : 'center', marginTop : '30px' }}>
                    <div className="profile-image" style={{ textAlign : 'center' }}>
                        <img src={profileImage} alt="profile-image" style={{
                            width : '300px',
                            objectFit : 'cover', borderRadius : '50%',
                            margin: '0 auto 20px auto',
                            border : '10px solid #f2f3f3'
                        }}
                        />
                    </div>
                </Col>
                <Col span={18}>
                    <div className="profile-description">
                        <p> I am a second year ph.D. student working with <a>Prof. Alan C. Bovik</a> in the Electrical and Computer Engineering department at University of Texas at Austin.
                            My research topics include Image Processing, Video Quality Assessment. <br/>
                            I had been collaberated with Youtube video quality assessment team as my phD research project. Over Summer 2019, I was pleased to interned at Youtube.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={6} style={{ textAlign : 'center' }}>
                    <h1><b>About Me</b></h1>
                    <li>Video Quality Assessment</li>
                    <li>Image Processing</li>
                    <li>Machine Learning</li>
                    <br/>
                    <h1><b>Contacts</b></h1>
                    <li>
                        <a href="https://github.com/tu184044109"><GithubOutlined /> Github </a>
                    </li>
                    <li>
                        <a href="mailto:zhengzhong.tu@utexas.edu"><MailOutlined /> Email </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zhengzhongtu/"><LinkedinOutlined /> Linkedin </a>
                    </li>
                    <li>

                    </li>
                </Col>
                <Col span={12}>
                    <div className="timeline">
                        <h1>News Timeline</h1>
                        <Timeline>
                            <Timeline.Item style={{ fontSize : '15px' }}> <b>2020-05-15 - ICIP 2020 Accepted</b>
                                <p><i>A Comparative Evaluation of Temporal Pooling Methods for Blind Video Quality Assessment </i></p>
                            </Timeline.Item>
                            <Timeline.Item style={{ fontSize : '15px' }}><b>2019-10-13 - ICASSP 2019 Accepted</b>
                                <p><i>BBAND Index: a No-Reference Banding Artifact Predictor</i></p>
                            </Timeline.Item>
                            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red" style={{ fontSize : '15px' }}>
                                <b>2019-06-03 - Summer Research Intern @ Youtube. </b>
                                <p><i>Supervisor - Dr. Yilin Wang, Jessin Lin</i></p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;
