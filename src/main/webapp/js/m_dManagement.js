$('#dManagementDg').datagrid({
	title : '司机管理',
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
		field : 'dId',
		checkbox : true,
		width : 100
	}, {
		field : 'dNumber',
		title : '司机编号',
		width : 100
	}, {
		field : 'dName',
		title : '司机姓名',
		width : 100
	}, {
		field : 'dPhone',
		title : '联系方式',
		width : 100
	}, {
		field : 'dStatus',
		title : '司机状态',
		width : 100
	} ] ]
});

function add() {
	$('#dManageMentDl').dialog({
		title : '增加司机',
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
				$('#dManageMentDl').dialog('close');
			}
		} ]
	});
}

function edit() {
	$('#dManageMentDl').dialog({
		title : '编辑司机',
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
				$('#dManageMentDl').dialog('close');
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除司机', '确定删除么？', function(r) {
	});
}