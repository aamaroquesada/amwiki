// Requires jQuery!
jQuery.ajax({
    url: "https://adjustcom.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/ynyklf/b/20/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en&collectorId=589e5c29",
    type: "get",
    cache: true,
    dataType: "script"
});

 window.ATL_JQ_PAGE_PROPS =  {
	"triggerFunction": function(showCollectorDialog) {
		//Requires that jQuery is available!
		jQuery("#feedback-button").click(function(e) {
			e.preventDefault();
			showCollectorDialog();
		});
	}};
