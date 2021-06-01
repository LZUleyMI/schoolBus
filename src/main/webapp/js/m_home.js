$(function() {
	setInterval(function() {
		$("#currentTime").text(new Date().toLocaleString());
	}, 1000);
});

$('#schoolBusTree').tree({
	url : 'data/tree.json',
	onClick : function(node) {
		if ($('#homeContent').tabs('exists', node.text)) {
			$('#homeContent').tabs('select', node.text);
		} else {
			$('#homeContent').tabs('add', {
				title : node.text,
				href : node.attributes.url,
				closable : true
			});
		}
	}
});

$('#homeContent').tabs({
	fit : true
});
$('#homeContent').tabs('add', {
	title : '首页',
	href : '/schoolBus/dynamicCarNumberMg',
	closable : false
});