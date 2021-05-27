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
				$('#cnManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '成功添加车次。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#cnManageMentDl').dialog('close');
				$.messager.show({
					title : '添加',
					msg : '取消添加车次。',
					timeout : 3000,
					showType : 'slide'
				});
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
				$('#cnManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '成功编辑车次。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}, {
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				$('#cnManageMentDl').dialog('close');
				$.messager.show({
					title : '编辑',
					msg : '取消编辑车次。',
					timeout : 3000,
					showType : 'slide'
				});
			}
		} ]
	});
}

function remove() {
	$.messager.confirm('删除车次', '确定删除么？', function(r) {
		if (r) {
			$.messager.show({
				title : '删除',
				msg : '成功删除车次。',
				timeout : 3000,
				showType : 'slide'
			});
		} else {
			$.messager.show({
				title : '删除',
				msg : '取消删除车次。',
				timeout : 3000,
				showType : 'slide'
			});
		}
	});
}