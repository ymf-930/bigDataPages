// 数据归集趋势
var trendDom = document.getElementById("TrendChart")
var myTrendChart = echarts.init(trendDom)


// 折线图-数据归集趋势
var TrendData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            id: 'nat', //用于区别弹窗数据
            name: "自然人信用加减分归集趋势",
            data: [
                638, 300, 490, 80, 410, 643
            ]
        },
        {
            id: 'leg',
            name: "法人信息加减分归集趋势",
            data: [
                238, 600, 290, 280, 210, 443
            ]
        }
    ]
}


// 加载图表数据
function initTrendChartData(val) {
    myTrendChart.dispose()
    myTrendChart = echarts.init(trendDom);
    myTrendChart.setOption(getTrendData(lineData));
    myTrendChart.on('click', function (params) {
        vm.modalTitle = params.seriesName
        if (params.seriesId === 'leg') {
            vm.modalData = vm.letGradeData
        }else{
            vm.modalData = vm.natGradeData
        }
        vm.showModal = true
    })
}

// 构建图表信息
function getTrendData(chartData) {
    return {
        color: ['rgba(16, 137, 255, 1)', 'rgba(15, 188, 224, 1)', '#a2cd8d', 'rgba(37, 215, 185, 1)'],
        tooltip: {},
        grid: {
            left: "5%",
            top: "7%",
            right: "2%",
            bottom: "10%"
        },
        legend: {
            show: false,
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            axisTick: {
                show: true,
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(251, 248, 248, 0.7)"
            },
            data: TrendData.xData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(251, 248, 248, 0.7)"
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.4)",
                    type: "dashed",
                }
            }
        },
        series: initTrendSeries(TrendData.yData)
    }
}

// 加载Y轴数据
function initTrendSeries(data) {
    return data.map((item, index) => {
        return {
            type: 'line',
            id: item.id,
            name: item.name ?? `系列${index + 1}`,
            symbol: 'emptyCircle',
            symbolSize: 10,
            data: item.data,
        }
    })
}

initTrendChartData()

// 折线图-数据归集分析
var dom = document.getElementById("lineChart")
var myChart = echarts.init(dom)

// 折线图
var lineData = {
    xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
    yData: [
        {
            name: "自然人基础信息",
            data: [
                638, 300, 490, 80, 410, 643
            ]
        },
        {
            name: "法人基础信息",
            data: [
                238, 600, 290, 280, 210, 443
            ]
        },
        {
            name: "自然人信用信息",
            data: [
                438, 500, 390, 480, 610, 843
            ]
        },
        {
            name: "法人信用信息",
            data: [
                938, 100, 690, 380, 210, 343
            ]
        },
    ]
}
// 状态改变重新加载数据
function handleStatus(val) {
    val = !val
    this.initChartData(val)
    return val
}

// 加载图表数据
function initChartData(val) {
    myChart.dispose()
    myChart = echarts.init(dom);
    myChart.setOption(getData(lineData));
}

// 构建图表信息
function getData(chartData) {
    return {
        color: ['rgba(16, 137, 255, 1)', 'rgba(15, 188, 224, 1)', '#a2cd8d', 'rgba(37, 215, 185, 1)'],
        tooltip: {},
        grid: {
            left: "10%",
            top: "7%",
            right: "6%",
            bottom: "20%"
        },
        legend: {
            show: true,
            left: 'center',
            bottom: 'bottom',
            orient: 'horizontal',
            textStyle: {
                fontSize: 12,
                color: '#90a0ae',
                fontWeight: 'normal',
            },
            icon: "circle",
            itemGap: 8.5,
            itemWidth: 10,
            itemHeight: 10,
            itemStyle: {
                borderColor: "rgba(249, 244, 244, 1)",
                borderWidth: 1,
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
                show: false
            }
        },
        series: initLineSeries(chartData.yData)
    }
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
                opacity: 0.5
            },
            data: item.data,
        }
    })
}

initChartData()

