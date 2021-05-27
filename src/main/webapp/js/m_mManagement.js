$('#mManagementDg').datagrid({
	title : '管理员管理',
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
		field : 'mId',
		checkbox : true,
		width : 100
	}, {
		field : 'mAccount',
		title : '管理员账户',
		width : 100
	}, {
		field : 'mPasswd',
		title : '管理员口令',
		width : 100
	}, {
		field : 'mTime',
		title : '时间',
		width : 100
	} ] ]
});

function add() {
	$('#mManageMentDl').dialog({
		title : '增加管理员',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$('#mManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '成功添加管理员。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#mManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '取消添加管理员。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function edit() {
	$('#mManageMentDl').dialog({
		title : '编辑管理员',
		modal : true,
		draggable : false,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-edit',
			handler : function() {
				$('#mManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '成功编辑管理员。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#mManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '取消编辑管理员。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除管理员', '确定删除么？', function(r) {
		if (r) {
			$.messager.show({
				title : '删除',
				msg : '成功删除管理员。',
				timeout : 3000,
				showType : 'slide'
			});
		} else {
			$.messager.show({
				title : '删除',
				msg : '取消删除管理员。',
				timeout : 3000,
				showType : 'slide'
			});
		}
	});
}