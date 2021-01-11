import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../Components/Header'
import Sider  from '../Components/Sider'

const {Header, Sider} = Layout;

export default class Home extends Component {


    render() {



        return (
            <div>
                <Layout>
                <Header />
                <Layout>
                    <Sider className="sider"/>
               </Layout>
               </Layout>
            </div>
        )
    }
}
