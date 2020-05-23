import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import googleImage from "../files/images/google.jpeg";
import simpsonGif from "../files/images/simpson.gif";
import { GoogleOutlined } from '@ant-design/icons';


interface Props {
    icon : any,
    text : string
}

interface PublicationEntry {
    href : string,
    title : string,
    avatar? : string,
    description : any,
    content : string,
    imgAvatar : any;
}


const Publication = () => {
    const listData = [];

    const descriptionContent = () => {
        return (
            <div>
                Hello
                {[
                    <IconText icon={StarOutlined} text="dblp" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="arXiv" key="list-vertical-like-o" />,
                ]}
            </div>
        )
    }
    const descriptionWithLink = () => {
        return (
            <div>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                <br />
                <a href="https://scholar.google.com/citations?user=9ajdZaEAAAAJ&hl=zh-TW"><GoogleOutlined />Google Scholar </a>
                {[
                    <IconText icon={StarOutlined} text="dblp" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="arXiv" key="list-vertical-like-o" />,
                ]}
            </div>
        )
    }
   const icip2020 : PublicationEntry = {
       href : 'link',
       title : 'A Comparative Evaluation of Temporal Pooling Methods for Blind Video Quality Assessment',
       description:
           descriptionWithLink,
       content:
           'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
       imgAvatar : simpsonGif,
   }

    listData.push(icip2020, icip2020, icip2020, icip2020, icip2020)



    const IconText = (props : Props) => (
        <Space>
            {React.createElement(props.icon)}
            {props.text}
        </Space>
    );
    return (
        <div>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={listData}
                footer={
                    <div>
                        <b>Zhengzhong Tu</b> all publications
                    </div>
                }
                renderItem={item => (
                    <List.Item key={item.title}>
                        <List.Item.Meta
                            avatar={<img
                                width={200}
                                alt="logo"
                                src={item.imgAvatar}
                            />}
                            title={<a href={item.href}>{item.title}</a>}
                            // description={<a href="https://scholar.google.com/citations?user=9ajdZaEAAAAJ&hl=zh-TW"><GoogleOutlined />Google Scholar </a>}
                            description={item.description()}
                        />
                    </List.Item>
                )}

            />,
        </div>
    )
}

export default Publication