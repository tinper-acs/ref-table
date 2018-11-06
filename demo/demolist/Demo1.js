/**
 *
 * @title ref-tablse 参照-表格
 * @description 具有单选多选的表格参照
 *
 */

import React, { Component } from 'react';
import { RefTable, RefTableWithInput, createRefTable } from 'ref-table';
import 'ref-table/dist/index.css';
import Form from "bee-form";
import {Button} from 'tinper-bee'
const option = {
    title: '表格参照',
    param:{//url请求参数
        refCode:'test_common',//test_common||test_grid||test_tree||test_treeTable
        tenantId:'xxx',
        sysId:'xxx'
    },
    hasPage: true, //是否有分页条
    refModelUrl:{
        tableBodyUrl:'https://mock.yonyoucloud.com/mock/358/blobRefTreeGrid',//表体请求
        tableBarUrl:'https://mock.yonyoucloud.com/mock/358/refInfo',//表头请求
    },
    displayField: '{refname}',//显示内容的键
    valueField: 'refcode',//真实 value 的键
    checkedArray:[
        {
            "peocode": "xiao",
            "refpk": "14e0220f-1a86-4861-8f74-543434537379",
            "id": "14e0220f-1a86-4861-8f74-543434537379",
            "refcode": "xiao",
            "peoname": "小羽",
            "refname": "小羽"
        }
    ],
    onCancel: function (p) {
      console.log(p)
    },
    onSave: function (sels) {
      console.log(sels);
    },
}
class Demo1 extends Component {
    render () {
        const { getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <RefTableWithInput {...option} 
                    form={this.props.form}
                />
                <span className='error'>
                    {getFieldError('refcode')}
                </span>
                <Button colors="primary" onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</Button>
            </div>
        )
    }
}

export default Form.createForm()(Demo1);
