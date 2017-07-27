$(document).ready(function(){
  $("#datatable").bootstrapTable({  
   pagination:true,   //是否分页  
   search: true,    //是否显示查询框  
   pageList:[10, 25, 50, 100],  
   clickToSelect:true,  
   exportDataType:'all',  

   showExport: true,  //是否显示导出按钮  
   buttonsAlign:"right",  //按钮位置  
   exportTypes:['excel'],  //导出文件类型  
   Icons:'glyphicon-export',  
   exportOptions:{  
       //ignoreColumn: [0,1],  //忽略某一列的索引  
       fileName: '总台帐报表',  //文件名称设置  
       worksheetName: 'sheet1',  //表格工作区名称  
       tableName: '总台帐报表1',  
       excelstyles: ['background-color', 'color', 'font-size', 'font-weight'],
   },  
   columns: [{
          field: 'name',
          title: '城市公司'
      }, {
          field: 'stargazers_count',
          title: '签约公司'
      }, {
          field: 'forks_count',
          title: '数量',
          sortable:true
      }, {
        field: 'description',
        title: '面积'
      }],
      data: [{
          "name": "广州东",
          "stargazers_count": "时代",
          "forks_count": "122",
          "description": "100m2"
      }, {
          "name": "广州北",
          "stargazers_count": "恒大",
          "forks_count": "150",
          "description": "100m2"
      }, {
          "name": "深圳公司",
          "stargazers_count": "龙湖",
          "forks_count": "11",
          "description": "100m2"
      }, {
          "name": "东莞公司",
          "stargazers_count": "时代",
          "forks_count": "4",
          "description": "100m2"
      }, {
          "name": "广州南",
          "stargazers_count": "万科",
          "forks_count": "30",
          "description": "100m2"
    }]
});  
})