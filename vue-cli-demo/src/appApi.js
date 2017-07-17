import DEV_ENV from '@/http/DEV_ENV'

let appApi = (c) => {
  let a = {
    // 数据管理记录总数
    'D_M_DATA_TOTAL': DEV_ENV ? 'static/jsons/management/total.json' : 'army/dataStatistic/todayDataStatistic',
    /**
     * 数据录入
     */
    // 数据录入左侧导航树
    'D_I_LEFT_TREE': DEV_ENV ? 'static/jsons/datainput/tree.json' : 'army/dataEntry/menuTree',
    // 数据录入表详情
    'D_I_TABLE_INFO': DEV_ENV ? 'static/jsons/datainput/info.json' : 'army/dataEntry/tableContentByTableId',
    // 数据录入数据列表
    'D_I_TABLE_LIST': DEV_ENV ? 'static/jsons/datainput/datalist.json' : 'army/dataEntry/mechanismTableByTableNameAndPages',
    // 数据录入右字段列表
    'D_I_FIELDS_LIST': DEV_ENV ? 'static/jsons/datainput/fieldslist.json' : 'army/dataEntry/mechanismTableFieldsByTableName',
    // 数据录入右字段数据查询
    'D_I_DATA_EDIT': DEV_ENV ? 'static/jsons/datainput/datainfo.json' : 'army/dataEntry/getMechanismTableInfoByTableName',
    // 数据录入右字段数据删除
    'D_I_DATA_DELETE': DEV_ENV ? 'static/jsons/success.json' : 'army/dataEntry/deleteForeignInfo',
    // 数据录入右字段数据更新
    'D_I_DATA_UPDATE': DEV_ENV ? 'static/jsons/success.json' : 'army/dataEntry/updateForeignInfo',
    // 数据录入数据日志
    'D_I_LOG_LIST': DEV_ENV ? 'static/jsons/datainput/loglist.json' : 'army/logStream/getLogRecordByTableNameAndPages',
    // 数据录入码表
    'D_I_CODE_TABLE': DEV_ENV ? 'static/jsons/datainput/codeTable.json' : 'army/dataEntry/codeTableByTableNameAndPages',
    // 数据录入外键
    'D_I_FOREIGN_KEY': DEV_ENV ? 'static/jsons/datainput/foreignKey.json' : 'army/dataEntry/mechanismTableByTableNameAndPages',
    // 数据录入外键字段
    'D_I_FOREIGN_KEY_FIELD': DEV_ENV ? 'static/jsons/datainput/foreignKeyField.json' : 'army/dataEntry/mechanismTableFieldsByTableName',
    // 数据录入外键新增
    'D_I_FOREIGN_KEY_ADD': DEV_ENV ? 'static/jsons/success.json' : 'army/dataEntry/saveForeignInfo',
    // 数据录入图片上传
    'D_I_IMG_UPLOAD': DEV_ENV ? 'static/jsons/success.json' : 'army/dataEntry/fileUpload',
    // 数据录入数据导出
    'D_I_DATA_EXPORT': DEV_ENV ? 'static/jsons/test.xlsx' : 'army/dataEntry/exportSimpleData',
    // 数据录入数据导入
    'D_I_DATA_IMPORT': DEV_ENV ? 'static/jsons/datainput/datainfo.json' : 'army/dataEntry/uploadSimpleExcel',

    /**
     * 码表管理
     */
    // 码表管理左侧导航树
    'C_M_LEFT_TREE': DEV_ENV ? 'static/jsons/management/tree.json' : 'army/codeManagement/menuTree',
    // 码表详情
    'M_CODE_TABLE_INFO': DEV_ENV ? 'static/jsons/management/codeTableInfo.json' : 'army/codeManagement/codeTableContentByTableId',
    // 码表列表
    'M_CODE_TABLE': DEV_ENV ? 'static/jsons/management/codeTable.json' : 'army/codeManagement/codeTableByTableNameAndPages',
    // 码表添加
    'M_CODE_TABLE_ADD': DEV_ENV ? 'static/jsons/success.json' : 'army/codeManagement/saveCodeInfo',
    // 码表修改
    'M_CODE_TABLE_EDIT': DEV_ENV ? 'static/jsons/success.json' : 'army/codeManagement/updateCodeInfo',
    // 码表删除
    'M_CODE_TABLE_DELETE': DEV_ENV ? 'static/jsons/success.json' : 'army/codeManagement/deleteCodeInfo'
  }
  return a[c]
}

export default appApi
