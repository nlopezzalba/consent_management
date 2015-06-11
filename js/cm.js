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


//COLLECTING VOTE RESULTS CHART

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Results', 'Votes'],
        ['Positive', 3],
        ['Negative', 2],
        ['Missing', 1]
    ]);

    var options = {
        pieHole: 0.4,
        pieSliceTextStyle: {
            color: 'white',
            fontSize: 16
        },
        pieSliceText: 'none',
        pieSliceBorderColor: 'transparent',
        backgroundColor: 'transparent',
        chartArea: {
            left: 0,
            top: 10,
            right: 0,
            bottom: 10,
            width:'100%',
            height:'85%'
        },
        height: 138,
        slices: {
            0: { color: '#00609f' },
            1: { color: '#777777' },
            2: { color: '#c9c9c9' }
        },
        legend: {
            position: 'right',
            textStyle: {
                color: '#777777',
                bold: true,
                fontName: 'Roboto',
                fontSize: 14
            },
            alignment: 'start'
        },
        tooltip: {
            textStyle: {
                color: 'black',
                fontSize: 14
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('voteResultsChart'));
    chart.draw(data, options);
}


