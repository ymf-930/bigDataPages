// 请求模块
import ajax from './ajax'
// ajax(url:'', data = {}, type = 'GET')
// 默认type = 'GET'
let uri = process.env.NODE_ENV !== 'production' ? '/apis/credit/bigdatas/cascade' : '/credit/bigdatas/cascade'

export const reqOverviewData = () => ajax(uri, { code: 'overview' })
export const reqSummaryData = () => ajax(uri, { code: 'summary' })
export const reqXydData = () => ajax(uri, { code: 'xyd' })
export const reqUnionData = () => ajax(uri, { code: 'unionData' })
export const reqPublicData = () => ajax(uri, { code: 'public' })
export const reqApplicationNewData = () => ajax(uri, { code: 'applicationNew' })
export const reqOverviewNewData = () => ajax(uri, { code: 'overviewNew' })
export const reqEvaluationNewData = () => ajax(uri, { code: 'evaluationNew' })
export const reqAffairData = () => ajax('/affairData')

export const reqOverviewUnionData = () => ajax('/overviewUnionData')

export const reqOverviewExchangeData = (params) => {
  let url = params ? '/overviewExchangeData' + params : '/overviewExchangeData'
  return ajax(url)
}
export const reqOverviewCountNumListData = () => ajax('/overviewCountNumListData')
export const reqOverviewRedListData = () => ajax('/overviewRedListData')
export const reqOverviewBlackListData = () => ajax('/overviewBlackListData')
export const reqOverviewClassStatisticData = () => ajax('/overviewClassStatisticData')
export const reqOverviewTrendAnalysisData = () => ajax('/overviewTrendAnalysisData')
export const reqOverviewSubmitDeptListData = () => ajax('/overviewSubmitDeptListData')

export const reqSummaryMonthAnalysisData = () => ajax('/summaryMonthAnalysisData')
export const reqSummaryClassifyStatisticData = () => ajax('/summaryClassifyStatisticData')
export const reqSummaryCountsData = () => ajax('/summaryCountsData')
export const reqSummarySourceData = () => ajax('/summarySourceData')
export const reqSummaryNaturalPersonAnalysisData = () => ajax('/summaryNaturalPersonAnalysisData')
export const reqSummaryNewestFillInDeptData = () => ajax('/summaryNewestFillInDeptData')
