let api = {
  getURL: (i) => {
    let a = {

      // 菜单
      'S_MENU': 'user/menu/getMenu',
      /**
       * 登录, 登出接口
       */
      // 登录
      'S_LOGIN': 'auth/system/login',
      // 登出
      'S_LOGOUT': 'auth/system/logout',
      // 用户信息
      'S_USERINFO': 'user/menu/user-info',
      // 获取系统列表
      'S_SYSINFO': 'user/menu/getSys',

      /**
       * 首页
       */
      /** start */
      // 互联网实时情报
      'I_NEWS': 'gather/indexItem/news',
      // 告警列表
      'I_WARNING': 'gather/indexItem/warning',
      // 新增占比
      'I_NEW_PROPORTION': 'gather/indexItem/proportion',
      // 情报数量统计
      'I_INFOMATION_QUANTITY': 'gather/indexItem/information',
      // 数据传输
      'I_DATA_TRANSMISSION': 'gather/indexItem/transmission',
      // 数据统计
      'I_data': 'gather/indexItem/summary',
      // 互联网情报分析统计
      'I_intelligence': 'gather/indexItem/sourceForInternetTop10',
      /** end */

      /**
       * 互联网情报分析
       */
      // 互联网信息数量
      'A_S_PROVINCE_ANALYSIS': 'interanalysis/internetinfo/getCountByProvince',
      // 来源分析
      'A_S_SOURCE': 'interanalysis/internetinfo/getSourceAnalysis',
      // 信息行业
      'A_S_INFORMATION_INDUSTRY': 'interanalysis/internetinfo/getIndustryInfoAnalysis',
      // 舆情分析
      'A_S_SENTIMENT_ANALYSIS': 'interanalysis/internetinfo/getPublicOpinionAnalysis',
      // 媒体来源
      'A_S_MEDIA_SOURCE': 'interanalysis/internetinfo/getTOP10FromMedia',
      // 一周热点
      'A_S_HOT_CONTENT': 'interanalysis/internetinfo/getTOP10FromHotContent',
      // 最新舆情
      'A_S_LAST_SENTIMENT': 'interanalysis/internetinfo/getLastPublicOpinion',
      // 信息走势
      'A_S_INDUSTRY_TREND': 'interanalysis/internetinfo/getIndustryTrend',

      /**
       * 舆情列表
       */
      // 来源选择
      'A_S_SOURCE_ITEM': 'interanalysis/infoWarning/getSourceType',
      // 列表
      'A_S_SENTIMENT_ITEM': 'interanalysis/infoWarning/getIndustryWarning',
      // 删除
      'A_S_SENTIMENT_DELETE': 'interanalysis/infoWarning/getIndustryWarning',
      // 收藏
      'A_S_SENTIMENT_FAVOR': 'interanalysis/infoWarning/favor',
      // 收藏列表
      'A_S_FAVOR_ITEM': 'interanalysis/infoWarning/getAllFavor',

      /**
       * 抽检公告分析
       */
      // 区域
      'A_S_NOTICE_AREA': 'interanalysis/noticeInfo/getCityList',
      // 列表
      'A_S_NOTICE_ITEM': 'interanalysis/noticeInfo/getNoticeList',

      /**
       * 执法情报分析
       */
      // 所属行业码表
      'A_S_CASE_CODE': 'interanalysis/caseinfo/getCaseCode',
      // 案件列表
      'A_S_CASE_ITEM': 'interanalysis/caseinfo/getCases',
      // 案件数量走势
      'A_S_CASE_TREND': 'interanalysis/caseinfo/getTrendOfCaseCount',
      // 案件来源分析
      'A_S_CASE_SOURCE': 'interanalysis/caseinfo/getSourceAnalysis',
      // 案件状态分析
      'A_S_CASE_STATUS': 'interanalysis/caseinfo/getStatusAnalysis',
      // 违法类型
      'A_S_CASE_TYPE': 'interanalysis/caseinfo/getTypeAnalysis',
      // 查处环节
      'A_S_TYPE_ARTICLES': 'interanalysis/caseinfo/getTypeArticlesAnalysis',
      // 涉案金额
      'A_S_CASE_AMOUNT': 'interanalysis/caseinfo/getAmountAnalysis',
      // 案件收藏
      'A_S_CASE_FAVOR': 'interanalysis/caseinfo/favor',
      // 案件收藏列表
      'A_S_CASE_FAVOR_ITEM': 'interanalysis/caseinfo/getAllFavor',

      /**
       * 执法案件详情
       */
      // 案件基本信息
      'A_S_CASE_INFO': 'interanalysis/caseAnalysis/getCaseBaseInfoByCaseId',
      // 案件画像
      'A_S_CASE_WORLD': 'interanalysis/caseAnalysis/getCaseLableInfoByCaseId',
      // 企业画像
      'A_S_COMPANY_WORLD': 'interanalysis/caseAnalysis/getCompanyLableInfoByCompanyId',
      // 关联企业
      'A_S_COMPANY_RELATION': 'interanalysis/caseAnalysis/getViolationAnalysisCompanyInfoByCaseId',
      // 案件关联分析
      'A_S_CASE_RELATION': 'interanalysis/caseAnalysis/getCaseAssociationAnalysisByCaseId',
      // 相似案件
      'A_S_CASE_SIMILAR': 'interanalysis/caseAnalysis/getCasesAimilarAnalysisByCaseId',
      // 决策分析
      'A_S_CASE_DECISION': 'interanalysis/caseAnalysis/getDecisionAnalysisByCaseId',
      // 决策列表
      'A_S_CASE_DECISION_ITEM': 'interanalysis/caseAnalysis/getDecisionAnalysisByCaseId',

      /**
       * 报送配置管理
       */
      /** start */
      /** 企业信息管理 */
      // 数据导入
      'S_FILE_UPLOAD': 'internet/submit/import',
      'S_FILE_UPLOAD_FIRST': 'internet/submit/first',
      'S_FILE_UPLOAD_SECOND': 'internet/submit/second',
      'S_FILE_UPLOAD_THREE': 'internet/submit/three',
      // 行政区列表
      'S_ADDRESS': 'internet/submit/address',
      // 行业列表
      'S_INDUSTRY': 'internet/submit/industry',
      // 企业信息列表
      'S_ITEM': 'enterprise/compInfoMgmt/getCompanyInfo',
      // 企业信息更新
      'S_COMPANY_INFO_UPDATE': 'enterprise/compInfoMgmt/editCompanyInfo',
      // 企业信息删除
      'S_COMPANY_INFO_DELETE': 'enterprise/compInfoMgmt/delCompanyInfo'
    }

    return a[i]
  }
}

export default api
