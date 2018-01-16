import React from 'react';
import CommonInput from './../input/commonInput';
import MoneyInput from './../input/moneyInput';
import NumInput from './../input/numInput';
import DigitInput from './../input/digitInput';
import PhoneInput from './../input/phoneInput';
import SinglePicker from './../picker/singlePicker';
import DateSelect from './../picker/datePicker';
import DateTimePicker from './../picker/dateTimePicker';
import TextAreaInput from './../input/textAreaInput';

/**
 * 获取控件
 * @param {*} componentModel 控件数据模型
 * @param {*} form 控件所在表单域
 */
const getComponent=(componentModel,form)=>{ 
    if(componentModel.componentType==='001'){ //普通输入框
        const rules=getRuleList(componentModel.rules);
        return  (<CommonInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='002'){ //金额输入框
        const rules=getRuleList(componentModel.rules);
        return (<MoneyInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='003'){ //数字输入框(整数)
        const rules=getRuleList(componentModel.rules);
        return (<NumInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='004'){ //数字输入框(带小数)
        const rules=getRuleList(componentModel.rules);
        return (<DigitInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='005'){ //电话输入框
        const rules=getRuleList(componentModel.rules);
        return (<PhoneInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='006'){ //单选选择器
        const rules=getRuleList(componentModel.rules);
        const data=getDataList(componentModel.componentType,componentModel.bindData);
        return (<SinglePicker 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}
            data={data}/>);
    }else if(componentModel.componentType==='007'){ //日期选择器
        const rules=getRuleList(componentModel.rules);
        return (<DateSelect 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='008'){ //时间选择器
        const rules=getRuleList(componentModel.rules);
        return (<DateTimePicker 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }else if(componentModel.componentType==='009'){ //多行输入框
        const rules=getRuleList(componentModel.rules);
        return (<TextAreaInput 
            key={componentModel.componentId}
            keyName={componentModel.componentId} 
            label={componentModel.componentLabel} 
            initialValue='' 
            form={form} 
            rules={rules}/>);
    }
};

/**
 * 获取控件绑定的规则列表
 * @param {*} ruleModels 规则模型列表
 */
const getRuleList=(ruleModels)=>{
        
    const rules=ruleModels.map((item)=>{
        if(item.ruleCode==='0001'){
            return {required:item.rule,message:item.errorMsg};
        }else if(item.ruleCode==='0002'){
            return {max:item.rule,message:item.errorMsg};
        }else if(item.ruleCode==='0003'){
            return {pattern:new RegExp(item.rule),message:item.errorMsg};
        }
    });
    return rules; 
};
            
/**
 * 获取控件绑定的数据列表
 * @param {*} componentType 控件类型
 * @param {*} dataModels 绑定的数据模型
 */
const getDataList=(componentType,dataModels)=>{ 
    if(componentType==='006'){
        const dataList= dataModels.map((item)=>{
            return {label:item.key,value:item.value};
        });
        return dataList;
    }else{
        return [];
    }
};

export {getComponent};