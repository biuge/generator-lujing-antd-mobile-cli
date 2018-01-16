import React from 'react';
import { Picker,Toast ,List} from 'antd-mobile';

class  SinglePicker extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { getFieldProps,getFieldError  } = this.props.form;
        const {keyName,label,initialValue,rules,data,disabled}=this.props;

        return (
            <Picker 
                title={label} 
                extra='请选择'
                disabled={disabled}
                dismissText='清空'
                onDismiss={()=>{
                    const obj={};
                    obj[keyName]='';
                    this.props.form.setFieldsValue(obj);
                    rules.forEach((item)=>{
                        if(item.required){
                            obj[keyName]={value:'',errors:[new Error(item.message)]};
                            this.props.form.setFields(obj);
                            Toast.fail(getFieldError(keyName)[0], 3, null, false);
                        }
                    });
                }}
                data={data}
                cols={1} 
                {...getFieldProps(keyName?keyName:'',
                    {
                        initialValue: initialValue?initialValue:[''],
                        rules: rules,
                    })}
                
            >
                <List.Item arrow="horizontal" error={getFieldError(keyName)} >{label}</List.Item>
            </Picker>
        );
    }
}
export default SinglePicker;