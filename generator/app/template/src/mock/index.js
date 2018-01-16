
const businessModelData={
    'modelName': '业务单模板',
    'list': [{
        'componentCategory': '基础信息',
        'componentList': [{
            'componentId': 'companyName',
            'componentLabel': '公司名称',
            'componentType': '001',
            'componentName': '普通输入框',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请输入公司名称'
            },
            {
                'ruleCode': '0002',
                'ruleName': '最大输入长度',
                'rule': 8,
                'errorMsg': '公司名称不能超过8位'
            }
            ],
            'bindData': [

            ]
        },
        {
            'componentId': 'companyPhone',
            'componentLabel': '联系电话',
            'componentType': '005',
            'componentName': '电话输入框',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请输入联系电话'
            }],
            'bindData': [

            ]
        }
        ]
    },
    {
        'componentCategory': '货物信息',
        'componentList': [{
            'componentId': 'goodsType',
            'componentLabel': '货物类型',
            'componentType': '006',
            'componentName': '单选选择器',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请选择货物类型'
            }],
            'bindData': [{
                'key': '重货',
                'value': '0'
            },
            {
                'key': '泡货',
                'value': '1'
            }
            ]
        },
        {
            'componentId': 'goodsWeight',
            'componentLabel': '货物重量(吨)',
            'componentType': '004',
            'componentName': '数字输入框(带小数)',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请输入货物重量'
            },
            {
                'ruleCode': '0002',
                'ruleName': '最大输入长度',
                'rule': 6,
                'errorMsg': '货物重量不能超过6位'
            }
            ],
            'bindData': [

            ]
        }
        ]
    },
    {
        'componentCategory': '金融信息',
        'componentList': [{
            'componentId': 'loanMoney',
            'componentLabel': '借款金额',
            'componentType': '002',
            'componentName': '金额输入框',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': false,
                'errorMsg': ''
            }],
            'bindData': [

            ]
        },
        {
            'componentId': 'loanDate',
            'componentLabel': '借款日期',
            'componentType': '007',
            'componentName': '日期选择器',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请选择借款日期'
            }],
            'bindData': [

            ]
        }
        ]
    },
    {
        'componentCategory': '物流业务信息',
        'componentList': [{
            'componentId': 'carNum',
            'componentLabel': '车辆数量',
            'componentType': '003',
            'componentName': '数字输入框(整数)',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请输入车辆数量'
            }],
            'bindData': [

            ]
        },
        {
            'componentId': 'carTime',
            'componentLabel': '用车时间',
            'componentType': '008',
            'componentName': '时间选择器',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': true,
                'errorMsg': '请选择用车时间'
            }],
            'bindData': [

            ]
        },
        {
            'componentId': 'memo',
            'componentLabel': '备注',
            'componentType': '009',
            'componentName': '多行输入框',
            'rules': [{
                'ruleCode': '0001',
                'ruleName': '是否必填',
                'rule': false,
                'errorMsg': ''
            }],
            'bindData': [

            ]
        }
        ]
    }
    ]
};

export {businessModelData};