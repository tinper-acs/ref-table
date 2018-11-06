
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" ref-tablse 参照-表格","code":"/**\n *\n * @title ref-tablse 参照-表格\n * @description 具有单选多选的表格参照\n *\n */\n\nimport React, { Component } from 'react';\nimport { RefTable, RefTableWithInput, createRefTable } from 'ref-table';\nimport 'ref-table/dist/index.css';\nimport Form from \"bee-form\";\nimport {Button} from 'tinper-bee'\nconst option = {\n    title: '表格参照',\n    param:{//url请求参数\n        refCode:'test_common',//test_common||test_grid||test_tree||test_treeTable\n        tenantId:'xxx',\n        sysId:'xxx'\n    },\n    hasPage: true, //是否有分页条\n    refModelUrl:{\n        tableBodyUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTreeGrid',//表体请求\n        tableBarUrl:'https://mock.yonyoucloud.com/mock/358/refInfo',//表头请求\n    },\n    displayField: '{refname}',//显示内容的键\n    valueField: 'refcode',//真实 value 的键\n    checkedArray:[\n        {\n            \"peocode\": \"xiao\",\n            \"refpk\": \"14e0220f-1a86-4861-8f74-543434537379\",\n            \"id\": \"14e0220f-1a86-4861-8f74-543434537379\",\n            \"refcode\": \"xiao\",\n            \"peoname\": \"小羽\",\n            \"refname\": \"小羽\"\n        }\n    ],\n    onCancel: function (p) {\n      console.log(p)\n    },\n    onSave: function (sels) {\n      console.log(sels);\n    },\n}\nclass Demo1 extends Component {\n    render () {\n        const { getFieldError } = this.props.form;\n        return (\n            <div className=\"demoPadding\">\n                <RefTableWithInput {...option} \n                    form={this.props.form}\n                />\n                <span className='error'>\n                    {getFieldError('refcode')}\n                </span>\n                <Button colors=\"primary\" onClick={() => {\n                    this.props.form.validateFields((err, values) => {\n                        console.log(err, values)\n                    });\n                }}>submit</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 具有单选多选的表格参照"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

