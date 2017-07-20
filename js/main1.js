$(document).ready(function(){

	var rowClicked = false;

	$('#table').bootstrapTable({
	    //url: 'data/demo.response.json',
	    striped: true,
	    pagination: true,
	    detailView: true,
	    showExport: true,
	    exportDataType: $(this).val(),
	    detailFormatter: function(index, row, element) {
			var html = [];
	        $.each(row, function (key, value) {
	            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	        });
	        return html.join('');
		},
	    pageSize: 10, //每页的记录行数（*）
 		pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
 		clickToSelect: true,  //是否启用点击选中行
 		showRefresh: true,
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
	        "name": "广州东",
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
		//glyphicon-plus icon-plus
		// onClickRow: function (row, tr, field) {
		// 	debugger
		// 	var rowIndex = tr.index();
		// 	if(!rowClicked){
		// 		$('#table').bootstrapTable("insertRow", {index: rowIndex+1, row:{
		// 	        "name": "插入行",
		// 	        "stargazers_count": "13",
		// 	        "forks_count": "4",
		// 	        "description": "my blog"
		//     	}});
		//     	rowClicked = true;
		// 	} else{
		// 		$('#table').bootstrapTable("hideRow", {index: rowIndex+1});
		//     	rowClicked = false;
		// 	}
		// }
		onClickRow: function (row, tr, field) {
			debugger
			$('.jingqi').addClass("display-none");
			$('.detai').removeClass("display-none");
		}
	});
	$('#detaiRow').bootstrapTable({
	    //url: 'data/demo.response.json',
	    striped: true,
	    pagination: true,
	    detailView: true,
	    showExport: true,
	    exportDataType: $(this).val(),
	    detailFormatter: function(index, row, element) {
			var html = [];
	        $.each(row, function (key, value) {
	            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	        });
	        return html.join('');
		},
	    pageSize: 10, //每页的记录行数（*）
 		pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
 		clickToSelect: true,  //是否启用点击选中行
 		showRefresh: true,
	    columns: [{
	        field: 'name',
	        title: '城市公司1'
	    }, {
	        field: 'stargazers_count',
	        title: '签约公司1'
	    }, {
	        field: 'forks_count',
	        title: '数量1',
	        sortable:true
	    }, {
	    	field: 'description',
	    	title: '面积1'
	    }],
	    data: [{
	        "name": "广州东",
	        "stargazers_count": "时代",
	        "forks_count": "122",
	        "description": "100m2"
	    }, {
	        "name": "广州东",
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
	$("#backListView").click(function(){
		$('.detai').addClass("display-none");
		$('.jingqi').removeClass("display-none");
	})
});