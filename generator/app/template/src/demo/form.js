
import React from 'react';
import { List} from 'antd-mobile';
import { createForm } from 'rc-form';
import {businessModelData} from './../mock/index';
import {getComponent} from './../widget/render/convert';


class BusinessForm extends React.Component {

    constructor(props){
        super(props);
        this.state={modelData:businessModelData};
    }
    componentDidMount() {
       
    }
    
    /**
     * 获取渲染的List Dom 节点数组
     */
    getRenderComponentList=()=>{
        const dataModellist=this.state.modelData.list; //数据模型列表
        const renderList=dataModellist.map((item)=>{ // item 表示最外层区域字段类别
            const componentModelList=item.componentList; // 每个区域下的控件列表数据模型
            const componentRenderList=componentModelList.map((item)=>{ //返回每个区域下的控件列表
                return getComponent(item,this.props.form);
            });
            return(
                <List key={item.componentCategory} 
                    style={{marginTop: '1rem' }}  
                    renderHeader={() => item.componentCategory}>
                    {componentRenderList}
                </List>
            ); 
        });
        return renderList;
    }

    
   
    render() {
        return (
            <div style={{ width: '100%' }}>
                {this.getRenderComponentList()}
                {/* <List style={{marginTop: '1rem' }}  renderHeader={() => '输入框'}>
                    <CommonInput keyName='commonInput' label='普通输入框' initialValue='' form={this.props.form} rules={[{
                        required:true,
                        message:'请输入内容'
                    },{
                        max:7,
                        message:'输入内容不可超过7位'
                    },  { 
                        pattern: new RegExp('^[0-9]+(.[0-9]{0,2})?$', 'g'), 
                        message: '至多保留两位小数'
                    },
                    ]}>
                    </CommonInput>

                    <MoneyInput keyName='moneyInput' label='金额输入框' initialValue='' form={this.props.form} rules={[{
                        required:true,
                        message:'请输入金额'
                    },{
                        max:7,
                        message:'输入金额不可超过7位'
                    }, 
                    ]}>
                    </MoneyInput>
                    <NumInput keyName='numInput' label='数字输入框(整数)' initialValue='' form={this.props.form} rules={[{
                        required:true,
                        message:'请输入数字'
                    },{
                        max:7,
                        message:'输入数字不可超过7位'
                    }, 
                    ]}>
                    </NumInput>
                    <DigitInput keyName='digitInput' label='数字输入框(带小数)' initialValue='' form={this.props.form} rules={[{
                        required:true,
                        message:'请输入数字'
                    },{
                        max:7,
                        message:'输入数字不可超过7位'
                    }, 
                    ]}>
                    </DigitInput>
                    <PhoneInput keyName='phoneInput' label='联系方式' initialValue='' form={this.props.form} 
                        rules={[{
                            required:true,
                            message:'请输入联系方式'
                        }, 
                        ]}>
                    </PhoneInput>

                    <TextAreaInput keyName='textAreaInput' label='多行输入框' initialValue='' form={this.props.form}
                        rules={[{
                            required:false,
                            message:''
                        }, 
                        ]}>
                    </TextAreaInput>
                    
                </List>
                <List style={{marginTop: '1rem' }}  renderHeader={() => '选择器'}>
                    <SinglePicker keyName='singlePicker' label='单选选择器' initialValue={['']} form={this.props.form} data={
                        [
                            {
                                label: '9米',
                                value: '0',
                            },
                            {
                                label: '12米',
                                value: '1',
                            },
                            {
                                label: '17米',
                                value: '2',
                            },
                        ]
                    }
                    rules={[{
                        required:true,
                        message:'请选择数据'
                    }, 
                    ]}>
                    </SinglePicker>

                    <DateSelect keyName='dateSelect' label='日期选择器' initialValue='' form={this.props.form}
                        rules={[{
                            required:true,
                            message:'请选择日期'
                        }, 
                        ]}>
                    </DateSelect>

                    <DateTimePicker keyName='dateTimePicker' label='时间选择器' initialValue='' form={this.props.form}
                        rules={[{
                            required:true,
                            message:'请选择时间'
                        }, 
                        ]}>
                    </DateTimePicker>
                </List> */}
            </div>
        );
    }
}
export default createForm()(BusinessForm);