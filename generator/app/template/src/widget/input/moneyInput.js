import React from 'react';
import { InputItem,Toast } from 'antd-mobile';

class MoneyInput extends React.Component {

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
                    normalize: (v, prev) => {
                        if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                            if (v === '.') {
                                return '0.0';
                            }
                            return prev;
                        }
                        return v;
                    },
                })}
                disabled={disabled}
                type='money'
                clear={true}
                error={getFieldError(keyName)}
                onErrorClick={() => {
                    Toast.fail(getFieldError(keyName)[0], 3, null, false);
                }}
                placeholder={'请输入'+label}
                labelNumber={20}
                moneyKeyboardAlign='left'
                extra='¥'
            >
                {label?label:''}
            </InputItem>
        );
    }
}
export default MoneyInput;