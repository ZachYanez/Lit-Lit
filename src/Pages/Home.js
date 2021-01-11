import React, { Component, useState } from 'react'
// import SearchComp from '../Components/SearchComp'
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { ReadOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;



const handleChange = e => console.log(e.target.value)

    class Home extends Component {
      
      state = {
            search: ""
        };



        render () {



            return (
                <div>
             <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Lit Lit</Menu.Item>
        <Menu.Item key="2">Saved Books</Menu.Item>
        <Menu.Item key="3">Create Review</Menu.Item>
      </Menu>
    </Header>


    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>

        </Content>

        <Search
    placeholder="Search Book || Author"
    allowClear
    enterButton="Search"
    size="large"
    onChange={handleChange}
/> 

        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<ReadOutlined />} title="Favorite books!">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Saved Books">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>By Zach Yanez built with Ant Design</Footer>
  </Layout>
            </div>
            ) 
        }
}

 export default Home;