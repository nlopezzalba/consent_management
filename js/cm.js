//VOTE INPUTS

$(function() {
    $("#voteForm").submit(function(e) {
        e.preventDefault();
        if (validateInput()) {
            $("#errorMsg").addClass("hidden");
            $("#successMsg").removeClass("hidden");
            //$("#voteBtn").html("Edit");
            // TODO : submit vote using AJAX
        } else {
            $("#errorMsg").removeClass("hidden");
            $("#successMsg").addClass("hidden");
        }
    });
});

function votePositiveFunction(){
    $('#inputVoteNegative').removeAttr('checked');
    $('#inputRationale').val('');
    $('#inputRationale').prop("disabled", true);
    clearMessages();
}

function voteNegativeFunction(){
    $('#inputVotePositive').removeAttr('checked');
    $('#inputRationale').removeAttr('disabled').focus();
    clearMessages();
}

function validateInput() {
    return $("#voteForm input:checked").length;
}

function clearMessages(){
    $("#errorMsg").addClass("hidden");
    $("#successMsg").addClass("hidden");
}

$(function sendAReminder() {
    $('.sendReminder').click(function() {
        this.value = 'Reminder sent';
        $('.sendReminder').addClass("clickedBtn");
    });
});


//PENDING CASES PAGINATION

var jsonData = {};
$.get("json/cm_json.json", function(data){
	jsonData = data;
	generateWhatever("dul_review", 0);
	generateWhatever("access_review", 0);
});

var pages = {
	"dul_review": 0,
	"access_review": 0
}
var PAGINATOR_MAX_ITEMS = 9;
var LIST_ITEMS_MAX_ITEMS = 5;

var listItemsTemplate = '<% _.forEach(elections, function(election) { %>';
listItemsTemplate += '<hr class="pvotes-main-separator">';
listItemsTemplate += '<a href="<%= election.link %>" class="pvotes-link">';
listItemsTemplate += '<div class="row">';
listItemsTemplate += '<div class="idSample col-lg-8 col-md-8 col-sm-6 col-xs-6 pvotes-list"><%= election.sampleId %></div>';
listItemsTemplate += '<div class="percentageCompleted col-lg-2 col-md-2 col-sm-3 col-xs-3 pvotes-list center-text"><%= election.percentage %>%</div>';
listItemsTemplate += '<div class="voteStatus col-lg-2 col-md-2 col-sm-3 col-xs-3 pvotes-list center-text status-<%= election.status %>">';
listItemsTemplate += '<% if(election.status == "urgent"){ %>URGENT!<% } %>';
listItemsTemplate += '<% if(election.status == "pending"){ %>Pending<% } %>';
listItemsTemplate += '<% if(election.status == "editable"){ %>Editable<% } %>';
listItemsTemplate += '</div>';

listItemsTemplate += '</div>';
listItemsTemplate += '</a>';
listItemsTemplate += '<% }); %>';

var paginatorTemplate = '<li><a href="#" onclick="generateWhatever(\'<%= id %>\', <%= currentPage - 1 %>)">&laquo;</a></li>';
paginatorTemplate += '<% _.forEach(pages, function(page) { %>';
paginatorTemplate += '<li><a href="#" <% if(currentPage == page){ %> class="pag-active" <% } %> onclick="generateWhatever(\'<%= id %>\', <%= page %>)"><%= page + 1 %></a></li>';
paginatorTemplate += '<% }); %>';
paginatorTemplate += '<li><a href="#" onclick="generateWhatever(\'<%= id %>\', <%= currentPage + 1 %>)">&raquo;</a></li>';

function generateWhatever(id, page){

	var amountOfElements = jsonData[id].length;
	var isValidPage = ((amountOfElements / LIST_ITEMS_MAX_ITEMS) > page) && (page >= 0);
	
	if(!isValidPage) return;

	pages[id] = page;

	var paginatorId = id  + "_paginator";
	var listItemsId = id  + "_list";
	
	var paginatorHtml = generatePaginator(id, page);
	var listItemsHtml = generateListItemsHtml(jsonData[id], page);
	
	$("#" + paginatorId).html(paginatorHtml);
	$("#" + listItemsId).html(listItemsHtml);
}

/**
	Data structure for json
	[{"sampleId": "val", "percentage": "", "status": "", "link": ""}]
*/

function generatePaginator(id, page){

	var delta = Math.floor(PAGINATOR_MAX_ITEMS / 2);
	var numberOfElements = jsonData[id].length;
	var numberOfRanges = Math.floor(numberOfElements / LIST_ITEMS_MAX_ITEMS);
	var floorPosition = page - delta > 0 ? page - delta : 0;
	
	if(floorPosition + PAGINATOR_MAX_ITEMS < numberOfRanges){
		var roofPosition = floorPosition + PAGINATOR_MAX_ITEMS;
	} else {
		var auxPagesMissingFromFloor = floorPosition + PAGINATOR_MAX_ITEMS - numberOfRanges;
		floorPosition = floorPosition - auxPagesMissingFromFloor >= 0 ? floorPosition - auxPagesMissingFromFloor : 0;
		var roofPosition =  numberOfRanges;
	}
	
	var pagesToApply = _.range(floorPosition, roofPosition);

	var compiled = _.template(paginatorTemplate);
	
	return compiled({"id": id,"pages": pagesToApply, "currentPage": page});
}

function generateListItemsHtml(data, page){
	
	var compiled = _.template(listItemsTemplate);
	var floorPosition = page * LIST_ITEMS_MAX_ITEMS;
	var roofPosition = floorPosition + LIST_ITEMS_MAX_ITEMS;
	var reducedJsonData = _.filter(data, function(election, electionPosition){
		return _.inRange(electionPosition, floorPosition, roofPosition);
	});
	
	return compiled({"elections": reducedJsonData});
}


//COLLECTING VOTE RESULTS CHART - LOAD DYNAMIC DATA
//
//google.load("visualization", "1", {packages:["corechart"]});
//google.setOnLoadCallback(drawChart);
//function drawChart() {
//
//    var data = google.visualization.arrayToDataTable([
//        ['Results', 'Votes'],
//        ['Positive', 3],
//        ['Negative', 2],
//        ['Missing', 1]
//    ]);
//
//    var options = {
//        pieHole: 0.4,
//        pieSliceTextStyle: {
//            color: 'white',
//            fontSize: 16
//        },
//        pieSliceText: 'none',
//        pieSliceBorderColor: 'transparent',
//        backgroundColor: 'transparent',
//        chartArea: {
//            left: 0,
//            top: 10,
//            right: 0,
//            bottom: 10,
//            width:'100%',
//            height:'85%'
//        },
//        height: 138,
//        slices: {
//            0: { color: '#C16B0C' },
//            1: { color: '#777777' },
//            2: { color: '#c9c9c9' }
//        },
//        legend: {
//            position: 'right',
//            textStyle: {
//                color: '#777777',
//                bold: true,
//                fontName: 'Roboto',
//                fontSize: 14
//            },
//            alignment: 'start'
//        },
//        tooltip: {
//            textStyle: {
//                color: 'black',
//                fontSize: 14
//            }
//        }
//    };
//
//    var chart = new google.visualization.PieChart(document.getElementById('dulResultsChart'));
//    chart.draw(data, options);
//}
