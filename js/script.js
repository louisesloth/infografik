$(document).ready(function () {

    google.charts.load('current', {'packages': ['corechart', 'bar']});
    google.charts.setOnLoadCallback(initialize);

    function initialize() {
        //drawPieChart("pieChart");
        drawBarChart("barChart");
        drawBarChart1("barChart1");
    }

    function drawBarChart(HTMLElementId) {

        var chartData = {
            "cols": [
                {"id":"","label":"","type":"string"},
                {"id":"","label":"Synes godt om","type":"number"},
                {"id":"","label":"Elsker","type":"number"},
                {"id":"","label":"Haha","type":"number"},
                {"id":"","label":"Ked","type":"number"},
                {"id":"","label":"Vred","type":"number"},
                {"id":"","label":"Kommentarer","type":"number"},
                {"id":"","label":"Tags","type":"number"},
                {"id":"","label":"Delinger","type":"number"},
                {"id":"","label":"Klik","type":"number"},
                {"id":"","label":"Visninger","type":"number"},
                {"id":"","label":"I alt","type":"number"}
            ],
            "rows": [
            ]
        }

        console.log(chartData);

        var jsonData;

        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/1xg4269PqbNnCuFdsIHAtD7_x6tZeVCiy3IoLq3jXq_k/values/'ark1'!A14%3AM21?majorDimension=ROWS&valueRenderOption=FORMULA&key=AIzaSyCkqhC1u_2xyC2fpiW8DOpuPNjBK7H7Pjo",
            dataType: "json",
            async: false
        }).done(function (data) {
            jsonData=data;
        });

        $.each(jsonData.values, function (k, v) {
            chartData.rows.push(
                {"c":[
                    {"v":v[0],"f":null},
                    {"v":v[1],"f":null},
                    {"v":v[2],"f":null},
                    {"v":v[3],"f":null},
                    {"v":v[4],"f":null},
                    {"v":v[5],"f":null},
                    {"v":v[6],"f":null},
                    {"v":v[7],"f":null},
                    {"v":v[8],"f":null},
                    {"v":v[9],"f":null},
                    {"v":v[10],"f":null},
                    {"v":v[11],"f":null},

                ]}
            );
        });

        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(chartData);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.charts.Bar(document.getElementById(HTMLElementId));
        var options = {
            chart: {
                title: 'Facebook opslag',
                subtitle: 'Opslået: dd.mm.åå kl. 00:00',
            },
            bars: 'vertical', // Required for Material Bar Charts.
            isStacked: true,
            width: 1080,
            height: 500,
            legend: { position: 'right', maxLines: 3000 },
            bar: { groupWidth: '75%' }
        };

        chart.draw(data, google.charts.Bar.convertOptions(options));

    }
    function drawBarChart1(HTMLElementId) {

        var chartData = {
            "cols": [
                {"id":"","label":"","type":"string"},
                {"id":"","label":"Synes godt om","type":"number"},
                {"id":"","label":"Elsker","type":"number"},
                {"id":"","label":"Haha","type":"number"},
                {"id":"","label":"Ked","type":"number"},
                {"id":"","label":"Vred","type":"number"},
                {"id":"","label":"Kommentarer","type":"number"},
                {"id":"","label":"Tags","type":"number"},
                {"id":"","label":"Delinger","type":"number"},
                {"id":"","label":"Klik","type":"number"},
                {"id":"","label":"Visninger","type":"number"},
                {"id":"","label":"I alt","type":"number"}
            ],
            "rows": [
            ]
        }

        console.log(chartData);

        var jsonData;

        $.ajax({
            url: "https://sheets.googleapis.com/v4/spreadsheets/1xg4269PqbNnCuFdsIHAtD7_x6tZeVCiy3IoLq3jXq_k/values/'ark1'!A24%3AM31?majorDimension=ROWS&valueRenderOption=FORMULA&key=AIzaSyCkqhC1u_2xyC2fpiW8DOpuPNjBK7H7Pjo",
            dataType: "json",
            async: false
        }).done(function (data) {
            jsonData=data;
        });

        $.each(jsonData.values, function (k, v) {
            chartData.rows.push(
                {"c":[
                    {"v":v[0],"f":null},
                    {"v":v[1],"f":null},
                    {"v":v[2],"f":null},
                    {"v":v[3],"f":null},
                    {"v":v[4],"f":null},
                    {"v":v[5],"f":null},
                    {"v":v[6],"f":null},
                    {"v":v[7],"f":null},
                    {"v":v[8],"f":null},
                    {"v":v[9],"f":null},
                    {"v":v[10],"f":null},
                    {"v":v[11],"f":null},

                ]}
            );
        });

        // Create our data table out of JSON data loaded from server.
        var data = new google.visualization.DataTable(chartData);

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.charts.Bar(document.getElementById(HTMLElementId));
        var options = {
            chart: {
                title: 'Facebook opslag',
                subtitle: 'Opslået: dd.mm.åå kl. 00:00',
            },
            bars: 'vertical', // Required for Material Bar Charts.
            isStacked: true,
            width: 1080,
            height: 500,
            legend: { position: 'right', maxLines: 3000 },
            bar: { groupWidth: '75%' }
        };

        chart.draw(data, google.charts.Bar.convertOptions(options));

    }
});