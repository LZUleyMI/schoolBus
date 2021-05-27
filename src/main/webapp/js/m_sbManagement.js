$('#sbManagementDg').datagrid({
	title : '校车管理',
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
		field : 'sbId',
		checkbox : true,
		width : 100
	}, {
		field : 'sbNumber',
		title : '校车编号',
		width : 100
	}, {
		field : 'sbStatus',
		title : '校车状态',
		width : 100
	}, {
		field : 'passengerNumber',
		title : '载人数',
		width : 100
	} ] ]
});

function add() {
	$('#sbStatusFree').prop('checked', 'checked');
	$('#sbManageMentDl').dialog({
		title : '增加校车',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#sbManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '成功添加校车。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#sbManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '取消添加校车。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function edit() {
	$('#sbManageMentDl').dialog({
		title : '编辑校车',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-edit',
			handler : function() {
				$('#sbManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '成功添加校车。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#sbManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '取消编辑校车。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除校车', '确定删除么？', function(r) {
		if (r) {
			$.messager.show({
				title : '删除',
				msg : '成功删除校车。',
				timeout : 3000,
				showType : 'slide'
			});
		} else {
			$.messager.show({
				title : '删除',
				msg : '取消删除校车。',
				timeout : 3000,
				showType : 'slide'
			});
		}
	});
}