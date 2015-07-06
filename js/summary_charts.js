//SUMMARY VOTES CHART

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChartDulTotal);
google.setOnLoadCallback(drawChartDulReviewed());
google.setOnLoadCallback(drawChartAccessTotal);
google.setOnLoadCallback(drawChartAccessReviewed());

function drawChartDulTotal() {

    var data = google.visualization.arrayToDataTable([
        ['Results', 'Votes'],
        ['Reviewed cases', 60],
        ['Pending cases', 70]
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
            0: { color: '#C16B0C' },
            1: { color: '#777777' }
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

    var chart = new google.visualization.PieChart(document.getElementById('chartDulTotal'));
    chart.draw(data, options);
}

function drawChartDulReviewed() {

    var data = google.visualization.arrayToDataTable([
        ['Results', 'Votes'],
        ['Positive', 55],
        ['Negative', 5]
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
            0: { color: '#C16B0C' },
            1: { color: '#777777' }
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

    var chart = new google.visualization.PieChart(document.getElementById('chartDulReviewed'));
    chart.draw(data, options);
}

function drawChartAccessTotal() {

    var data = google.visualization.arrayToDataTable([
        ['Results', 'Votes'],
        ['Reviewed cases', 40],
        ['Pending cases', 90]
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
            0: { color: '#603B9B' },
            1: { color: '#777777' }
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

    var chart = new google.visualization.PieChart(document.getElementById('chartAccessTotal'));
    chart.draw(data, options);
}

function drawChartAccessReviewed() {

    var data = google.visualization.arrayToDataTable([
        ['Results', 'Votes'],
        ['Positive', 25],
        ['Negative', 15]
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
            0: { color: '#603B9B' },
            1: { color: '#777777' }
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

    var chart = new google.visualization.PieChart(document.getElementById('chartAccessReviewed'));
    chart.draw(data, options);
}

