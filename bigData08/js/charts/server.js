// 实例化对象
let myChart = null;
const barDom = document.getElementById('barChart');

// 饼图数据
let barData = {
    xData: ['2017', '2018', '2019', '2020', '2021', '2022'],
    yData: [10, 52, 200, 334, 390, 330],
}


// 构建饼图图表信息
function getBarData(chartData) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: true,
            top: '4%',
            itemHeight: 6,
            itemWidth: 12,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: chartData.xData,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位:元',
                nameTextStyle:{
                    color:"#fff",
                    fontSize:12,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(221, 221, 221, 0.15)',
                    }
                }
            }
        ],
        series: initBarSeries(chartData.yData)
    }
}

function initBarSeries(data) {
    return [
        {
            type: 'bar',
            barWidth: '30%',
            data: data,
            name: '企业数量',
            itemStyle: {
                normal: {
                    barBorderRadius: [15, 15, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: 'rgba(252, 196, 42, 1)'},
                            {offset: 0, color: 'rgba(252, 121, 68, 1)'},
                            {offset: 0, color: 'rgba(252, 159, 53, 1)'},
                            {offset: 0, color: 'rgba(252, 95, 76, 1)'},
                        ]
                    )
                }
            }
        }
    ]
}


// 饼图模块1-8
function initBarCharts(barData) {
    myChart = echarts.init(barDom)
    myChart.setOption({
        ...getBarData(barData)
    })
}


function initChart() {
    initBarCharts(barData)
}

window.addEventListener("resize", function () {
    myChart.resize()
});

initChart()
