import React from 'react';
import { hashHistory } from 'react-router';
import { WingBlank, Button, WhiteSpace } from 'antd-mobile';

class App extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <WingBlank>
                    <WhiteSpace size="xl" />
                    <Button
                        type="primary" onClick={() => {
                            hashHistory.push('/form');
                        }}
                    >
                     表单
                    </Button>
                    <WhiteSpace size="xl" />
                    <Button type="primary">列表</Button>
                </WingBlank>
            </div>
        );
    }
}

export default App;
