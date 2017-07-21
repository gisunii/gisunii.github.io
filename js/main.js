$(document).ready(function(){
	$('#total').bootstrapTable({
	    //url: 'data/demo.response.json',
	    striped: true,
	    pagination: true,
	    detailView: true,
	    showExport: true,
		detailFormatter: insertNewRow,
		pageSize: 10, //每页的记录行数（*）
 		pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
 		search: true,
 		// clickToSelect: true,  //是否启用点击选中行
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
		}],
		onClickRow: function (row, tr) {
			debugger
		    //alert(row.name);
		    // $('#table').bootstrapTable("insertRow", {index:2, row:{
		    //     "name": "blog1111",
		    //     "stargazers_count": "13",
		    //     "forks_count": "4",
		    //     "description": "my blog"
	    	// }});  
	    	//$('#table').bootstrapTable("hideRow", {index:2});
		},
		onExpandRow: function(index, row, $detail){
			debugger
			$($detail).css('padding','0 0 0 30px');

		},
		onCollapseRow: function(index, row){
			debugger
			$('#'+row.name).bootstrapTable('destroy');
		}
	});
	function insertNewRow(index, row){
		debugger
		var detailView = $('#'+row.name).bootstrapTable({
			detailView: true,
			columns: [{
			        field: 'name',
			        title: '姓名'
			    }, {
			        field: 'stargazers_count',
			        title: '数量1'
			    }, {
			        field: 'forks_count',
			        title: '数量2'
			    }, {
			    	field: 'description',
			    	title: '描述'
			    }],
		    data: [{
		        "name": "bootstrap-table",
		        "stargazers_count": "526",
		        "forks_count": "122",
		        "description": "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3)",
		        "tesst": "test"
		    }, {
		        "name": "multiple-select",
		        "stargazers_count": "288",
		        "forks_count": "150",
		        "description": "A jQuery plugin to select multiple elements with checkboxes :)",
		        "tesst": "test"
		    }, {
		        "name": "bootstrap-show-password",
		        "stargazers_count": "32",
		        "forks_count": "11",
		        "description": "Show/hide password plugin for twitter bootstrap.",
		        "tesst": "test"
		    }, {
		        "name": "blog",
		        "stargazers_count": "13",
		        "forks_count": "4",
		        "description": "my blog",
		        "tesst": "test"
		    }, {
		        "name": "scutech-redmine",
		        "stargazers_count": "6",
		        "forks_count": "30",
		        "description": "Redmine notification tools for chrome extension.",
		        "tesst": "test"
			}]
		});
		return detailView;
	};
	$(".fixed-table-toolbar .columns .export").append('<button class="btn btn-default" type="button" id="btnExport" title="下载""><i class="glyphicon glyphicon-arrow-down"></i></button>');
	$('#btnExport').click(function(){
		htmlToExcel("表头", "制作者", "total", 1, 1);	 
	});
});