/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //图表一
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = { 
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data:['expected','actual']
                            },
                            grid: {
                                left: '3%',
                                right: '3%',
                                bottom: '3%',
                                containLabel: true
                            },
                            color: ['#ff005a', '#3888fa'], 
                            axisLabel: { 
                            // 坐标轴的标签
                                color: '#008acd' // 默认轴线的颜色
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    name:'expected',
                                    type:'line',
                                    stack: '总量',
                                    data:[120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name:'actual',
                                    type:'line',
                                    stack: '总量',
                                    data:[220, 182, 191, 234, 290, 330, 310]
                                }
                            ]
                        };

                        this.chart.setOption(optionData);
                    },   
                    //图表二
                        line2: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        const optionData = { 
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend: {
                                data:['利润', '支出', '收入']
                            },
                            color: ['#5ab1ef', '#a593ca','#2ec6c8'], 
                            xAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'category',
                                    axisTick : {show: false},
                                    data: ['Mon','Tue','Wed','Thu','Fri']
                                }
                            ],
                            series : [
                                {
                                    name:'利润',
                                    type:'bar',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'inside'
                                        }
                                    },
                                    data:[200, 170, 210, 204, 200]
                                },
                                {
                                    name:'收入',
                                    type:'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true
                                        }
                                    },
                                    data:[300, 182, 301, 374, 390]
                                },
                                {
                                    name:'支出',
                                    type:'bar',
                                    stack: '总量',
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'left'
                                        }
                                    },
                                    data:[-120, -132, -101, -134, -170]
                                }
                            ]
                        };

                        this.chart.setOption(optionData);
                    },
                     //图表三
                     line3: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        const optionData = { 
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            color: ['#ffb980', '#d87a80','#2ec7c9','#b6a2de','#5ab1ef'], 
                            legend: {
                                x : 'center',
                                y : 'top',
                                data:['one','two','three','four','five']
                            },
                        
                            calculable : true,
                            series : [
                                {
                                    name:'面积模式',
                                    type:'pie',
                                    radius : [15, 90],
                                    center : ['50%', '50%'],
                                    roseType : 'area',
                                    data:[
                                        {value:30, name:'one'},
                                        {value:22, name:'two'},
                                        {value:18, name:'three'},
                                        {value:12, name:'four'},
                                        {value:5, name:'five'}
                                    ]
                                }
                            ]
                        };

                        this.chart.setOption(optionData);
                    },
                        //图表四
                        line4: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        const optionData = { 
                            legend: {},
                            tooltip: {},
                            color: ['#67e0e3', '#b6a2de', '#ffdb5c'],
                            dataset: {
                                source: [
                                    ['product', '2015', '2016', '2017'],
                                    ['one', 43.3, 85.8, 93.7, 118],
                                    ['two', 86.4, 65.2, 82.5, 100],
                                    ['three', 72.4, 53.9, 39.1, 82]
                                ]
                            },
                            xAxis: {type: 'category'},
                            yAxis: {},
                            series: [
                                {type: 'bar'},
                                {type: 'bar'},
                                {type: 'bar'},
                            ]
                        };

                        this.chart.setOption(optionData);
                    }
                }
            }
        }
    })
}

export default {
    install
}