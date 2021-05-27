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
				$('#dManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '成功添加司机。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#dManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '取消添加司机。',
					timeout : 3000,
					showType : 'slide'
				});
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
				$('#dManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '成功编辑司机。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#dManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '取消编辑司机。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除司机', '确定删除么？', function(r) {
		if (r) {
			$.messager.show({
				title : '删除',
				msg : '成功删除司机。',
				timeout : 3000,
				showType : 'slide'
			});
		} else {
			$.messager.show({
				title : '删除',
				msg : '取消删除司机。',
				timeout : 3000,
				showType : 'slide'
			});
		}
	});
}