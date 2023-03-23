// 系统概况专题
// 柱状图
var select = 'nat'
// 实例化对象
// 部门数据统计
var bmDom = document.getElementById("barChart1");
var bmChart = echarts.init(bmDom);
// 绩效数据统计
var jxDom = document.getElementById("barChart2");
var jxChart = echarts.init(jxDom);
// 村、社区数据统计
var csDom = document.getElementById("barChart3");
var csChart = echarts.init(csDom);
// 资源信息分类统计
var zyDom = document.getElementById("barChart4");
var zyChart = echarts.init(zyDom);
// 信用报告趋势分析
var domLine = document.getElementById("lineChart")
var myChartLine = echarts.init(domLine)


var bmData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "部门数据统计",
            data: [
                120, 200, 150, 80, 70, 110
            ]
        },
    ]
}
var jxData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "绩效数据统计",
            data: [
                180, 100, 130, 60, 170, 50
            ]
        },
    ]
}
var csData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "村、社区数据统计",
            data: [
                50, 80, 190, 280, 170, 50
            ]
        },
    ]
}
var zyData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "资源信息分类统计",
            data: [
                638, 300, 490, 1080, 210, 843
            ]
        },
    ]
}

// 信用报告趋势分析
var lineData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "信用报告趋势分析",
            data: [
                638, 300, 490, 1080, 210, 843
            ]
        },
    ]
}

// 加载Y轴数据
function initSeries(data) {
    return data.map((item, index) => {
        return {
            type: 'bar',
            name: item.name ?? `系列${index + 1}`,
            barWidth: "40%",
            data: item.data,
        }
    })
}
// 构建图表信息
function getData(chartData, type) {
    return {
        color: ['#3c90f7'],
        tooltip: {},
        grid: {
            left: "10%",
            top: "7%",
            right: "6%",
            bottom: "10%"
        },
        xAxis: {
            type: 'category',
            boundaryGap: type ? false : true,
            axisTick: {
                show: true,
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(251, 248, 248, 0.7)"
            },
            data: chartData.xData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(251, 248, 248, 0.7)"
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: type ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.6)",
                    type: type ? "solid" : "dashed",
                }
            }
        },
        series: !type ? initSeries(chartData.yData) : initLineSeries(chartData.yData)
    }
}



function handleSelect(val) {
    bmChart.dispose()
    jxChart.dispose()
    csChart.dispose()
    zyChart.dispose()
    this.initChartData(val)
}

// 根据类型加载数据信息
function initChartData(val) {
    bmChart = echarts.init(bmDom);
    jxChart = echarts.init(jxDom);
    csChart = echarts.init(csDom);
    zyChart = echarts.init(zyDom);
    if (vm.select === 'let') {
        bmChart.setOption(getData(bmData));
        jxChart.setOption(getData(jxDom));
        csChart.setOption(getData(csData));
        zyChart.setOption(getData(zyData));
    } else {
        bmChart.setOption(getData(bmData));
        jxChart.setOption(getData(jxData));
        csChart.setOption(getData(csData));
        zyChart.setOption(getData(zyData));
    }
}

initChartData()
initLineChartData()

// 折线图-信用报告趋势分析
// 获取状态改变
function handleStatus(val) {
    val = !val
    this.initLineChartData(val)
    return val
}

function initLineChartData(val) {
    myChartLine = echarts.init(domLine);
    myChartLine.setOption(getData(val ? lineData : bmData, 'line'));
}


// 加载Y轴数据
function initLineSeries(data) {
    return data.map((item, index) => {
        return {
            type: 'line',
            name: item.name ?? `系列${index + 1}`,
            symbol: 'emptyCircle',
            symbolSize: 5,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(12, 191, 243, 0.7)' },
                        { offset: 1, color: 'rgba(12, 191, 243, 0.1)' }
                    ]
                },
                opacity: 0.8
            },
            data: item.data,
        }
    })
}




