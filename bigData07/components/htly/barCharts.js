var chartDom = document.getElementById('barChart');
var myBarChart = echarts.init(chartDom)

var barData = {
    xData: ['国有土地使用权出让合同', '全民所有制工业企业承包合同', '国家科研合同', '国家订购合同', '公用征收补偿合同', '公共工程承包合同', '农村土地承包合同'],
    yData: [6700, 1900, 4000, 7145, 2500, 4859, 3394],
}

function initBarChart() {
    myBarChart.dispose()
    myBarChart = echarts.init(chartDom);
    console.log(initBarSeries(barData))
    myBarChart.setOption(initBarSeries(barData));
}


function initBarSeries(data) {
    return {
        grid: {
            left: "5%",
            top: "5%",
            right: "2%",
            bottom: "10%"
        },
        xAxis: {
            type: 'category',
            data: data.xData,
            axisLabel: {//x轴文字的配置
                show: true,
                interval: 0,
                textStyle: {
                    color: "#fff",
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#4a5e7a",
                    width: 3,
                    type: "solid"
                }
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {//y轴文字的配置
                show: true,
                textStyle: {
                    color: "#fff",
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#4a5e7a",
                    width: 3,
                    type: "solid"
                }
            },
            splitLine: {//分割线配置
                show: true,
                lineStyle: {
                    color: "#284061",
                }
            },
        },
        series: [
            {
                data: data.yData,
                type: 'bar',
                color: '#2cbdf3',
                barWidth: '90'
            }
        ]
    }
}


initBarChart()