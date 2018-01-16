import React from 'react';
import { TextareaItem,Toast } from 'antd-mobile';

class CommonInput extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { getFieldProps,getFieldError  } = this.props.form;
        const {keyName,label,initialValue,rules,disabled}=this.props;
        return (
            <TextareaItem
                {...getFieldProps(keyName?keyName:'' ,{
                    initialValue: initialValue?initialValue:'',
                    rules: rules
                })}
                disabled={disabled}
                clear={false}
                autoHeight={true}
                title={label?label:''}
                error={getFieldError(keyName)}
                onErrorClick={() => {
                    Toast.fail(getFieldError(keyName)[0], 3, null, false);
                }}
                placeholder={'请输入'+label}
                labelNumber={20}
            >
            </TextareaItem>
        );
    }
}
export default CommonInput;