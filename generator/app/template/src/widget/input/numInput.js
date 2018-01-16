import React from 'react';
import { InputItem,Toast } from 'antd-mobile';

class NumInput extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { getFieldProps,getFieldError  } = this.props.form;
        const {keyName,label,initialValue,rules,disabled}=this.props;
        return (
            <InputItem
                {...getFieldProps(keyName?keyName:'' ,{
                    initialValue: initialValue?initialValue:'',
                    rules: rules,
                })}
                disabled={disabled}
                type='number'
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
export default NumInput;