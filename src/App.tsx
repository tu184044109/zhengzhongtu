import React from 'react';
import "antd/dist/antd.css";
import {Avatar, Breadcrumb, Layout, Menu, PageHeader} from 'antd';
import profileImage from './files/images/avatar.jpeg'
import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import { MailOutlined, AppstoreOutlined, SettingOutlined, SmileOutlined, YoutubeOutlined, FileOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import Profile from "./components/about";
import Publication from "./components/publication";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const ProfilePage = () => {
    return (
        <div>
            This is Profile
        </div>
    )
}


const Resume = () => {
    return (
        <div>this is cv</div>
    )
}

function App() {
    const [ state, setState] = React.useState<boolean>(false);
    const [ current, setCurrent ] = React.useState<string>('email');

      return (
          <Router>
              <Layout style={{ minHeight: '100vh' }}>
                  <Layout>
                      <PageHeader style={{ background: '#fff', paddingLeft: 16 }} title="Zhengzhong Tu" subTitle="Ph.D. student @ UT Austin" />
                      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                          <Menu mode="horizontal">
                              <Menu.Item key="about" icon={<SmileOutlined />} style={{ fontSize : 16}}>
                                  About Me
                                  <Link to="/zhengzhongtu" />
                              </Menu.Item>
                              <Menu.Item key="publication" icon={<FileOutlined />} style={{ fontSize : 16}}>
                                  Publication
                                  <Link to="/publication" />
                              </Menu.Item>
                              {/*<Menu.Item key="cv" icon={ <ProfileOutlined />} style={{ fontSize : 16}}>*/}
                              {/*    CV*/}
                              {/*    <Link to="/cv" />*/}
                              {/*</Menu.Item>*/}
                          </Menu>
                          <Content>
                              <Route path="/zhengzhongtu" component={Profile} />
                              <Route path="/publication" component={Publication} />
                              <Route path="/cv" component={Resume} />
                          </Content>
                      </Content>
                      <Footer style={{ textAlign: 'center' }}>
                          Christie Design ©2020
                      </Footer>
                  </Layout>
              </Layout>
          </Router>
      );
}
export default App;


