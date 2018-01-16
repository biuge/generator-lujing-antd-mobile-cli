import React from 'react';
import { DatePicker,Toast ,List} from 'antd-mobile';

class DateTimePicker extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { getFieldProps,getFieldError  } = this.props.form;
        const {keyName,label,initialValue,rules,disabled}=this.props;
        return (
            <DatePicker 
                mode='datetime' 
                title={label} 
                disabled={disabled}
                extra='请选择'
                dismissText='清空'
                onDismiss={()=>{
                    const obj={};
                    obj[keyName]='';
                    this.props.form.setFieldsValue(obj);
                    rules.forEach((item)=>{
                        if(item.required){
                            obj[keyName]={value:'',errors:[new Error(item.message)]};
                            console.log('obj',obj);
                            this.props.form.setFields(obj);
                            Toast.fail(getFieldError(keyName)[0], 3, null, false);
                        }
                    });
                }}
                {...getFieldProps(keyName?keyName:'',
                    {
                        initialValue: initialValue?initialValue:'',
                        rules: rules,
                    })}
                
            >
                <List.Item arrow="horizontal" error={getFieldError(keyName)}>{label}</List.Item>
            </DatePicker>
        );
    }
}
export default DateTimePicker;