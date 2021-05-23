$('#cnManagementDg').datagrid({
	title : '车次管理',
	fit : true,
	striped : true,
	fitColumns : true,
	pagination : true,
	toolbar : [ {
		text : '增加',
		iconCls : 'icon-add',
		handler : function() {
			add();
		}
	}, '-', {
		text : '编辑',
		iconCls : 'icon-edit',
		handler : function() {
			edit();
		}
	}, '-', {
		text : '删除',
		iconCls : 'icon-remove',
		handler : function() {
			remove();
		}
	} ],
	columns : [ [ {
		field : 'cnId',
		checkbox : true,
		width : 100
	}, {
		field : 'departurePlace',
		title : '发车地点',
		width : 100
	}, {
		field : 'departureTime',
		title : '发车时间',
		width : 100
	}, {
		field : 'cnStatus',
		title : '车次状态',
		width : 100
	} ] ]
});

function add() {
	$('#cnManageMentDl').dialog({
		title : '增加车次',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {

			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#cnManageMentDl').dialog('close');
			}
		} ]
	});
}

function edit() {
	$('#cnManageMentDl').dialog({
		title : '编辑车次',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-edit',
			handler : function() {

			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#cnManageMentDl').dialog('close');
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除车次', '确定删除么？', function(r) {
	});
}