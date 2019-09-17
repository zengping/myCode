/**
 * 可视化控制-echarts接口
 */
function echartsInterface() {

    var dynamicLineArray = new Array([10]),
        ajaxHandler = ajaxDataController();

    function rankingLine(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/line'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip : {
                            trigger: 'axis'
                        },
                        grid: {
                          x: 150,
                          y: 30,
                          x2: 40,
                          y2: 30,
                          borderWidth: 0
                        },
                        legend: {
                            data:data.ranking,
                            x : 'left',
                            orient : 'vertical'
                        },
                        calculable : true,
                        yAxis : function(){
                            if(params.changeshowchart == "ranking"){
                                return [{
                                    type : 'category',
                                    axisTick : {show: true},
                                    data : [11,10,9,8,7,6,5,4,3,2,1,'']
                                }];
                            }else if(params.changeshowchart == "outpatient"){
                                return {type : 'value'};
                            }
                        }(),
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data : data.xaxis
                            }
                        ],
                        series : (function(){
                            if(data.date.length===0){
                                return [{data:[]}];
                            }
                            return data.date;
                        })()
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function basicAreaLine(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/line'
                ],
                function(ec, theme) {
                    var option = {
                        title: {
                            text: title
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        grid: {
                            x: 50,
                            y: 30,
                            x2: 30,
                            y2: 30,
                            borderWidth: 0
                        },
                        legend: {
                            data: data.type
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['line', 'bar', 'stack', 'tiled']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            boundaryGap: false,
                            data: data.xaxis
                        }],
                        yAxis: [{
                            type: 'value',
                            min : data.small,
                            max : data.big
                        }],
                        series: (function(){
                            var seriesData = [],
                                i = 0;

                            for (var prop in data.date) {
                                if (data.date.hasOwnProperty(prop)) {
                                    var seriesObject = {
                                        name: '',
                                        type: 'line',
                                        smooth: true,
                                        itemStyle: {
                                            normal: {
                                                areaStyle: {
                                                    type: 'default'
                                                }
                                            }
                                        },
                                        data: []
                                    };
                                    seriesObject.name = data.type[i];
                                    seriesObject.data = data.date[prop];
                                    seriesData.push(seriesObject);
                                    i++;
                                }
                            }
                            if(seriesData.length===0){
                                return [{data:[]}];
                            }
                            return seriesData;
                        })()
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function stackBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var option = {
                        title: {
                            text: title
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params[1] + "</br>" + params[5];
                            }
                        },
                        grid: {
                            x: 70,
                            y: 30,
                            x2: 30,
                            y2: 30,
                            borderWidth: 0
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['line', 'bar']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        }],
                        yAxis: [{
                            type: 'category',
                            data: data.type
                        }],
                        series: [{
                            name: '',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#058FCD','#C00000','#F6881F','#4FC5FA','#A6CE39',
                                            '#FEC20E','#65D5B2','#97b552','#95706d','#dc69aa',
                                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: '{c}'
                                    }
                                }
                            },
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function coloursStackBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var option = {
                        title: {
                            text: title
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            x: 70,
                            y: 30,
                            x2: 30,
                            y2: 30,
                            borderWidth: 0
                        },
                        legend: {
                            data: data.type
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['line', 'bar', 'stack', 'tiled']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'value'
                        }],
                        yAxis: [{
                            type: 'category',
                            data: data.xaxis
                        }],
                        series: (function() {
                            var seriesData = [],
                                i = 0;
                            for (var prop in data.date) {
                                if (data.date.hasOwnProperty(prop)) {
                                    var seriesObject = {
                                        name: '',
                                        type: 'bar',
                                        stack: '总量',
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    position: 'insideRight'
                                                }
                                            }
                                        },
                                        data: []
                                    };
                                    seriesObject.name = data.type[i];
                                    seriesObject.data = data.date[prop];
                                    seriesData.push(seriesObject);
                                    i++;
                                }
                            }
                            if(seriesData.length===0){
                                return [{data:[]}];
                            }
                            return seriesData;
                        })()
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function multipleSreiesRainbowBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var zrColor = require('zrender/tool/color');
                    var colorList = [
                        '#058FCD','#C00000','#F6881F','#4FC5FA','#A6CE39',
                        '#FEC20E','#65D5B2','#97b552','#95706d','#dc69aa',
                    ];
                    var itemStyle = {
                        normal: {
                            color: function(params) {
                                if (params.dataIndex < 0) {
                                    // for legend
                                    return zrColor.lift(
                                        colorList[colorList.length - 1], params.seriesIndex * 0.1
                                    );
                                } else {
                                    // for bar
                                    return zrColor.lift(
                                        colorList[params.dataIndex], params.seriesIndex * 0.1
                                    );
                                }
                            }
                        }
                    };
                    var option = {
                        title: {
                            text: title
                        },
                        grid: {
                            x: 50,
                            y: 30,
                            x2: 30,
                            y2: 30,
                            borderWidth: 0
                        },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            axisPointer: {
                                type: 'shadow'
                            },
                            formatter: function(params) {
                                // for text color
                                var color = colorList[params[0].dataIndex];
                                var res = '<div style="color:' + color + '">';
                                res += '<strong>' + params[0].name + '</strong>'
                                for (var i = 0, l = params.length; i < l; i++) {
                                    res += '<br/>' + params[i].seriesName + ' : ' + params[i].value
                                }
                                res += '</div>';
                                return res;
                            }
                        },
                        legend: {
                            x: 'right',
                            data: data.type
                        },
                        toolbox: {
                            show: toolbox,
                            orient: 'vertical',
                            y: 'center',
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            data: data.xaxis
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: (function() {
                            var seriesData = [],
                                i = 0;
                            for (var prop in data.date) {
                                if (data.date.hasOwnProperty(prop)) {
                                    var seriesObject = {
                                        name: '',
                                        type: 'bar',
                                        itemStyle: itemStyle,
                                        data: []
                                    };
                                    seriesObject.name = data.type[i];
                                    seriesObject.data = data.date[prop];
                                    seriesData.push(seriesObject);
                                    i++;
                                }
                            }
                            if(seriesData.length===0){
                                return [{data:[]}];
                            }
                            return seriesData;
                        })()
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function coloursBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var zrColor = require('zrender/tool/color');
                    var colorList = [
                        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
                        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
                        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
                        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed'
                    ];
                    var itemStyle = {
                        normal: {
                            color: function(params) {
                                if (params.dataIndex < 0) {
                                    return zrColor.lift(
                                        colorList[colorList.length - 1], params.seriesIndex * 0.1
                                    );
                                } else {
                                    return zrColor.lift(
                                        colorList[params.dataIndex], params.seriesIndex * 0.1
                                    );
                                }
                            },
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}' //{b}\n{c}
                            }
                        }
                    };
                    var option = {
                        title: {
                            text: title
                        },
                        tooltip: {
                            trigger: 'axis',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            axisPointer: {
                                type: 'shadow'
                            },
                            formatter: function(params) {
                                var color = colorList[params[0].dataIndex];
                                var res = '<div style="color:' + color + '">';
                                res += '<strong>' + params[0].name + '</strong>';
                                for (var i = 0, l = params.length; i < l; i++) {
                                    res += '<br/>' + params[i].value;
                                }
                                res += '</div>';
                                return res;
                            }
                        },
                        calculable: true,
                        grid: {
                            y: 80,
                            y2: 40,
                            x2: 40
                        },
                        xAxis: [{
                            type: 'category',
                            data: data.type
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: [{
                            name: '热门疾病TOP25',
                            type: 'bar',
                            itemStyle: itemStyle,
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function onecolorBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip: {
                            show: true,
                            trigger: 'item',
                            formatter: function(params) {
                                return params.data.val + '<br/>' + params.name + '<br/>' + params.value;
                            }
                        },
                        grid: {
                            x: 50,
                            y: 10,
                            x2: 30,
                            y2: 30,
                            borderWidth: 0
                        },
                        legend: {
                            show: false,
                            data: []
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['bar']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: false,
                        xAxis: [{
                            type: 'category',
                            data: data.xaxis
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: [{
                            type: 'bar',
                            itemStyle: { // 系列级个性化样式，纵向渐变填充
                                normal: {
                                    //barBorderColor: '#4682B4',
                                    //barBorderWidth: 5,
                                    color: (function() {
                                        var zrColor = require('zrender/tool/color');
                                        return zrColor.getLinearGradient(
                                            0, 400, 0, 300, [
                                                [0, 'green'],
                                                [1, '#058FCD']
                                            ]
                                        )
                                    })(),
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: function(param) {
                                            return param.value;
                                        },
                                        textStyle: {
                                            color: '#058FCD'
                                        }
                                    }
                                },
                                emphasis: {
                                    //barBorderColor: 'green',
                                    //barBorderWidth: 5,
                                    color: (function() {
                                        var zrColor = require('zrender/tool/color');
                                        return zrColor.getLinearGradient(
                                            0, 400, 0, 300, [
                                                [0, 'red'],
                                                [1, '#4FC5FA']
                                            ]
                                        )
                                    })()
                                }
                            },
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function topdownBar(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip: {
                            show: true,
                            trigger: 'item',
                            formatter: function(params) {
                                return params.value + ' ' + params.data.val;
                            }
                        },
                        legend: {
                            show: false,
                            data: []
                        },
                        grid: {
                            x: 0,
                            y: 0,
                            x2: 100,
                            y2: 0,
                            borderWidth: 0
                        },
                        xAxis: [{
                            type: 'value',
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },

                        }],
                        yAxis: [{
                            type: 'category',
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                show: false
                            },
                            data: ['', '', '', '', '', '', '', '', '', '']
                        }],
                        series: [{
                            type: 'bar',
                            data: data.date,
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        if (params.dataIndex < 5) {
                                            return '#A6CE39';
                                        } else {
                                            return '#C00000';
                                        }
                                    },
                                    label: {
                                        show: true,
                                        position: 'right',
                                        formatter: function(param) {
                                            return param.value + ' ' + param.data.val;
                                        }
                                    }

                                }
                            }
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function dynamicLine(url, params, domID, style, title, toolbox, onOff, coord, addDataUrl, frequency) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/line'
                ],
                function(ec, theme) {
                    var dynamicLineChartAdd = ec.init(document.getElementById(domID), theme);

                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: data.type
                        },
                        dataZoom: {
                            show: true,
                            start : 60
                        },
                        grid: {
                            x: 50,
                            y: 30,
                            x2: 30,
                            y2: 55,
                            borderWidth: 0
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['line', 'bar', 'stack', 'tiled']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            boundaryGap: false,
                            data: data.xaxis
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: (function() {
                            var seriesData = [],
                                i = 0;
                            for (var prop in data.date) {
                                if (data.date.hasOwnProperty(prop)) {
                                    var seriesObject = {
                                        name: '',
                                        type: 'line',
                                        data: []
                                    };
                                    seriesObject.name = data.type[i];
                                    seriesObject.data = data.date[prop];
                                    seriesData.push(seriesObject);
                                    i++;
                                }
                            }
                            if(seriesData.length===0){
                                return [{data:[]}];
                            }
                            return seriesData;
                        })()
                    };

                    dynamicLineChartAdd.setOption(option);

                    // 动态数据
                    clearInterval(dynamicLineArray[coord]);
                    if (onOff === "on") {
                        dynamicLineArray[coord] = setInterval(function() {
                            ajaxHandler.select(addDataUrl, params, function(data) {
                                var addDate = [],
                                    i = data.date.length,
                                    ii = 0;
                                for (var prop in data.date) {
                                    if (data.date.hasOwnProperty(prop)) {

                                        // 系列索引  [0,12,false,false,new Date().Format("hh:mm:ss")]
                                        // 新增数据
                                        // 新增数据是否从队列头部插入
                                        // 是否增长数据队列长度，默认，不指定或false时移出目标数组对位数据 
                                        // 坐标轴标签
                                        if (i == ii + 1) {
                                            addDate.push([ii, data.date[prop], false, false, data.xaxis]);
                                        } else {
                                            addDate.push([ii, data.date[prop], false, false]);
                                        }
                                        ii++;
                                    }
                                }
                                dynamicLineChartAdd.addData(addDate);
                            })
                        }, frequency);
                    }
                }
            );
        });
    }

    function meanLine(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/line'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: data.type
                        },
                        grid: {
                            x: 50,
                            y: 30,
                            x2: 50,
                            y2: 30,
                            borderWidth: 0
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['line', 'bar', 'stack', 'tiled']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        xAxis: [{
                            type: 'category',
                            boundaryGap: false,
                            data: data.xaxis
                        }],
                        yAxis: [{
                            type: 'value'
                        }],
                        series: (function() {
                            var seriesData = [],
                                i = 0;
                            for (var prop in data.date) {
                                if (data.date.hasOwnProperty(prop)) {
                                    var seriesObject = {
                                        name: '',
                                        type: 'line',
                                        data: [],
                                        markLine : {
                                          data : [
                                            {type : 'average', name : '平均值'},
                                          ]
                                       }
                                    };
                                    seriesObject.name = data.type[i];
                                    seriesObject.data = data.date[prop];
                                    seriesData.push(seriesObject);
                                    i++;
                                }
                            }
                            if(seriesData.length===0){
                                return [{data:[]}];
                            }
                            return seriesData;
                        })()
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function nightingale_simple(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/pie',
                    'echarts/chart/funnel'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            //y : 'top',
                            show: false,
                            data: data.xaxis
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                //mark : {show: true},
                                //dataView : {show: true, readOnly: false},
                                magicType: {
                                    show: true,
                                    type: ['pie', 'funnel']
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        series: [{
                            name: title,
                            type: 'pie',
                            radius: [20, 100],
                            center: ['50%', '50%'],
                            roseType: 'radius',
                            //width: '40%',       // for funnel
                            //max: 40,            // for funnel
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function pie_basic(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/pie',
                    'echarts/chart/funnel'
                ],
                function(ec, theme) {
                    var option = {
                        // title : {
                        //     text: title,
                        //     subtext: title,
                        //     x:'center'
                        // },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data: data.xaxis
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                magicType: {
                                    show: true,
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1548
                                        }
                                    }
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        series: [{
                            name: title,
                            type: 'pie',
                            radius: '90%',
                            center: ['50%', '50%'],
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function pie_doughnut(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/pie'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            show: false,
                            orient: 'vertical',
                            x: 'left',
                            data: data.xaxis
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        series: [{
                            name: title,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    },
                                    labelLine: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                        position: 'center',
                                        textStyle: {
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    }
                                }
                            },
                            data: data.date
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function radar_basic_filled(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/radar'
                ],
                function(ec, theme) {
                    var option = {
                        title: {
                            //text: '罗纳尔多 vs 舍普琴科',
                            //subtext: '完全实况球员数据'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: false,
                            x: 'center',
                            data: [title]
                        },
                        toolbox: {
                            show: toolbox,
                            feature: {
                                mark: {
                                    show: true
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false
                                },
                                restore: {
                                    show: true
                                },
                                saveAsImage: {
                                    show: true
                                }
                            }
                        },
                        calculable: true,
                        polar: [{
                            indicator: data.xaxis,
                            radius: 90
                        }],
                        series: [{
                            type: 'radar',
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: 'default'
                                    }
                                }
                            },
                            data: [{
                                value: data.date,
                                name: title
                            }]
                        }]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function columnLine(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            var barStsrt = [],
                upDown = [],
                allArrayMin = Math.min.apply(Math,data.date[0].concat(data.date[1])),
                allArrayMax = Math.max.apply(Math,data.date[0].concat(data.date[1]));
            for (var i = 0; i < data.date[0].length; i++) {
                if(data.date[0][i] > data.date[1][i]){
                    barStsrt.push(data.date[1][i]);
                    upDown.push({"up":data.date[0][i] - data.date[1][i]});
                }else{
                    barStsrt.push(data.date[0][i]);
                    upDown.push({"down":data.date[1][i] - data.date[0][i]});
                }
            };
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/line',
                    'echarts/chart/bar'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip : {
                            trigger: 'axis',
                            formatter: function (params){
                                return params[0].name + ' : '
                                       + (params[2].value - params[1].value > 0 ? '+' : '-') 
                                       + params[0].value + '<br/>'
                                       + "同比"+(params[2].value - params[1].value > 0 ? '增长 : '+((params[2].value/params[3].value-1).toFixed(4)*100).toFixed(2)+'%'  : '下降 : '+((params[2].value/params[3].value-1).toFixed(4)*-100).toFixed(2)+'%') + '<br/>'
                                       + params[2].seriesName + ' : ' + params[2].value + '<br/>'
                                       + params[3].seriesName + ' : ' + params[3].value + '<br/>'
                            }
                        },
                        legend: {
                            data:data.type,
                            selectedMode:false
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : data.xaxis
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                min : allArrayMin,
                                max : allArrayMax
                            }
                        ],
                        series : [
                            {
                                name:data.type[0],
                                type:'line',
                                data:data.date[0]
                            },
                            {
                                name:data.type[1],
                                type:'line',
                                symbol:'none',
                                itemStyle:{
                                    normal:{
                                      lineStyle: {
                                        width:1,
                                        type:'dashed'
                                      }
                                    }
                                },
                                data:data.date[1]
                            },
                            {
                                name:data.type[1]+'2',
                                type:'bar',
                                stack: '1',
                                barWidth: 6,
                                itemStyle:{
                                    normal:{
                                        color:'rgba(0,0,0,0)'
                                    },
                                    emphasis:{
                                        color:'rgba(0,0,0,0)'
                                    }
                                },
                                data:barStsrt
                            },
                            {
                                name:'变化',
                                type:'bar',
                                stack: '1',
                                data:(function () {
                                    var arrays = [];
                                    for (var i = 0; i < upDown.length; i++) {
                                        if(upDown[i].up){
                                            arrays.push(upDown[i].up);
                                        }else if(upDown[i].down){
                                            var use = {value : 0, itemStyle:{ normal:{color:'red'}}};
                                            use.value = upDown[i].down;
                                            arrays.push(use);
                                        }
                                    };
                                    return arrays;
                                })()
                            }
                        ]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    function basicAngularGauge(url, params, domID, style, title, toolbox) {
        ajaxHandler.select(url, params, function(data) {
            require.config({
                paths: {
                    echarts: '../../scripts/lib/echarts-2.2.2'
                }
            });
            require(
                [
                    'echarts',
                    'echarts/theme/' + style,
                    'echarts/chart/gauge'
                ],
                function(ec, theme) {
                    var option = {
                        tooltip : {
                            formatter: "{a} <br/>{b} : {c}%"
                        },
                        toolbox: {
                            show : toolbox,
                            feature : {
                                mark : {show: true},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        series : [
                            {
                                name:'个性化仪表盘',
                                type:'gauge',
                                center : ['50%', '50%'],    // 默认全局居中
                                radius : [0, '75%'],
                                startAngle: 140,
                                endAngle : -140,
                                min: 0,                     // 最小值
                                max: 100,                   // 最大值
                                precision: 0,               // 小数精度，默认为0，无小数点
                                splitNumber: 10,             // 分割段数，默认为5
                                axisLine: {            // 坐标轴线
                                    show: true,        // 默认显示，属性show控制显示与否
                                    lineStyle: {       // 属性lineStyle控制线条样式
                                        color: [[0.2, 'lightgreen'],[0.4, 'orange'],[0.8, 'skyblue'],[1, '#ff4500']], 
                                        width: 30
                                    }
                                },
                                axisTick: {            // 坐标轴小标记
                                    show: true,        // 属性show控制显示与否，默认不显示
                                    splitNumber: 5,    // 每份split细分多少段
                                    length :8,         // 属性length控制线长
                                    lineStyle: {       // 属性lineStyle控制线条样式
                                        color: '#eee',
                                        width: 1,
                                        type: 'solid'
                                    }
                                },
                                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                                    show: true,
                                    formatter: function(v){
                                        switch (v+''){
                                            case '10': return '弱';
                                            case '30': return '低';
                                            case '60': return '中';
                                            case '90': return '高';
                                            default: return '';
                                        }
                                    },
                                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                        color: '#333'
                                    }
                                },
                                splitLine: {           // 分隔线
                                    show: true,        // 默认显示，属性show控制显示与否
                                    length :30,         // 属性length控制线长
                                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                        color: '#eee',
                                        width: 2,
                                        type: 'solid'
                                    }
                                },
                                pointer : {
                                    length : '80%',
                                    width : 8,
                                    color : 'auto'
                                },
                                title : {
                                    show : true,
                                    offsetCenter: ['-65%', -10],       // x, y，单位px
                                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                        color: '#333',
                                        fontSize : 15
                                    }
                                },
                                detail : {
                                    show : true,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderWidth: 0,
                                    borderColor: '#ccc',
                                    width: 100,
                                    height: 40,
                                    offsetCenter: ['-60%', 10],       // x, y，单位px
                                    formatter:'{value}%',
                                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                        color: 'auto',
                                        fontSize : 30
                                    }
                                },
                                data:[{value: data, name: title}]
                            }
                        ]
                    };
                    ec.init(document.getElementById(domID), theme).setOption(option);
                }
            );
        });
    }

    return {

        //排名折线图（json地址，参数，页面domID，样式，标题，工具栏）
        "rankingLine": function(url, params, domID, style, title, toolbox) {
            rankingLine(url, params, domID, style, title, toolbox);
        },

        //标准面积图（json地址，参数，页面domID，样式，标题，工具栏）
        "basicAreaLine": function(url, params, domID, style, title, toolbox) {
            basicAreaLine(url, params, domID, style, title, toolbox);
        },

        //多层条形图（json地址，参数，页面domID，样式，标题，工具栏）
        "stackBar": function(url, params, domID, style, title, toolbox) {
            stackBar(url, params, domID, style, title, toolbox);
        },

        //多层多条条形图（json地址，参数，页面domID，样式，标题，工具栏）
        "coloursStackBar": function(url, params, domID, style, title, toolbox) {
            coloursStackBar(url, params, domID, style, title, toolbox);
        },

        //多系列彩虹柱形图（json地址，参数，页面domID，样式，标题，工具栏）
        "multipleSreiesRainbowBar": function(url, params, domID, style, title, toolbox) {
            multipleSreiesRainbowBar(url, params, domID, style, title, toolbox);
        },

        //彩色柱形图（json地址，参数，页面domID，样式，标题，工具栏）
        "coloursBar": function(url, params, domID, style, title, toolbox) {
            coloursBar(url, params, domID, style, title, toolbox);
        },

        //单一颜色柱形图（json地址，参数，页面domID，样式，标题，工具栏）
        "onecolorBar": function(url, params, domID, style, title, toolbox) {
            onecolorBar(url, params, domID, style, title, toolbox);
        },

        //前5后5柱形图（json地址，参数，页面domID，样式，标题，工具栏）
        "topdownBar": function(url, params, domID, style, title, toolbox) {
            topdownBar(url, params, domID, style, title, toolbox);
        },

        //动态数据折线图（json地址，参数，页面domID，样式，标题，工具栏，动态数据_onOff，动态数据_coord，动态数据_json地址，动态数据_请求频率）
        "dynamicLine": function(url, params, domID, style, title, toolbox, onOff, coord, addDataUrl, frequency) {
            dynamicLine(url, params, domID, style, title, toolbox, onOff, coord, addDataUrl, frequency);
        },

        //平均折线图（json地址，参数，页面domID，样式，标题，工具栏）
        "meanLine": function(url, params, domID, style, title, toolbox) {
            meanLine(url, params, domID, style, title, toolbox);
        },

        //南丁格尔玫瑰图（json地址，参数，页面domID，样式，标题，工具栏）
        "nightingale_simple": function(url, params, domID, style, title, toolbox) {
            nightingale_simple(url, params, domID, style, title, toolbox);
        },

        //标准饼图（json地址，参数，页面domID，样式，标题，工具栏）
        "pie_basic": function(url, params, domID, style, title, toolbox) {
            pie_basic(url, params, domID, style, title, toolbox);
        },

        //标准环形图（json地址，参数，页面domID，样式，标题，工具栏）
        "pie_doughnut": function(url, params, domID, style, title, toolbox) {
            pie_doughnut(url, params, domID, style, title, toolbox);
        },

        //标准填充雷达图（json地址，参数，页面domID，样式，标题，工具栏）
        "radar_basic_filled": function(url, params, domID, style, title, toolbox) {
            radar_basic_filled(url, params, domID, style, title, toolbox);
        },

        //同比比较折线图（json地址，参数，页面domID，样式，标题，工具栏）
        "columnLine": function(url, params, domID, style, title, toolbox) {
            columnLine(url, params, domID, style, title, toolbox);
        },

        //标准仪表盘（json地址，参数，页面domID，样式，标题，工具栏）
        "basicAngularGauge": function(url, params, domID, style, title, toolbox) {
            basicAngularGauge(url, params, domID, style, title, toolbox);
        }
    }
}