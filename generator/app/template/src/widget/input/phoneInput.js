import React from 'react';
import { InputItem,Toast } from 'antd-mobile';


class PhoneInput extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { getFieldProps,getFieldError  } = this.props.form;
        const {keyName,label,initialValue,rules,disabled}=this.props;
        rules.push({ pattern: new RegExp(/(^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$)|(^1[34578]\d{9}$)/),
            message:'请输入正确的电话格式'});
        return (
            <InputItem
                {...getFieldProps(keyName?keyName:'' ,{
                    initialValue: initialValue?initialValue:'',
                    rules: rules
                })}
                disabled={disabled}
                clear={true}
                error={getFieldError(keyName)}
                onErrorClick={() => {
                    Toast.fail(getFieldError(keyName)[0], 3, null, false);
                }}
                placeholder={'请输入'+label}
                labelNumber={20}
            >
                {label?label:''}
            </InputItem>
        );
    }
}
export default PhoneInput;