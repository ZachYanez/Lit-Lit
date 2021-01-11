import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../Components/Header'
import Sider  from '../Components/Sider'


export default class Home extends Component {


    render() {



        return (
            <div>
                <Layout>
                <Header />
                    <Sider className="sider"/>      
               </Layout>
            </div>
        )
    }
}
