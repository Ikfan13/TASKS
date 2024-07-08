/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8666666666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Location-0"], "isController": false}, {"data": [1.0, 500, 1500, "Location-1"], "isController": false}, {"data": [1.0, 500, 1500, "Cloud Services-1"], "isController": false}, {"data": [1.0, 500, 1500, "HomePage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Cloud Services"], "isController": false}, {"data": [1.0, 500, 1500, "Cloud Services-0"], "isController": false}, {"data": [0.0, 500, 1500, "HomePage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design-1"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design-0"], "isController": false}, {"data": [1.0, 500, 1500, "About-1"], "isController": false}, {"data": [1.0, 500, 1500, "Contact-0"], "isController": false}, {"data": [1.0, 500, 1500, "About-0"], "isController": false}, {"data": [1.0, 500, 1500, "Contact-1"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation-0"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation-1"], "isController": false}, {"data": [0.0, 500, 1500, "Blog"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study"], "isController": false}, {"data": [0.5, 500, 1500, "Blog-0"], "isController": false}, {"data": [0.5, 500, 1500, "Blog-1"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design"], "isController": false}, {"data": [1.0, 500, 1500, "Contact"], "isController": false}, {"data": [1.0, 500, 1500, "About"], "isController": false}, {"data": [0.0, 500, 1500, "HomePage"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Assurance"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Assurance-0"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study-0"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Assurance-1"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study-1"], "isController": false}, {"data": [1.0, 500, 1500, "Location"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 30, 0, 0.0, 484.8999999999999, 172, 2412, 212.0, 1652.9000000000015, 2144.7, 2412.0, 4.114661911946235, 151.7182463825264, 0.7398890755726237], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Location-0", 1, 0, 0.0, 202.0, 202, 202, 202.0, 202.0, 202.0, 202.0, 4.9504950495049505, 2.5622679455445545, 0.6236463490099009], "isController": false}, {"data": ["Location-1", 1, 0, 0.0, 186.0, 186, 186, 186.0, 186.0, 186.0, 186.0, 5.376344086021506, 189.25361223118279, 0.6772933467741935], "isController": false}, {"data": ["Cloud Services-1", 1, 0, 0.0, 195.0, 195, 195, 195.0, 195.0, 195.0, 195.0, 5.128205128205129, 333.213141025641, 0.7211538461538461], "isController": false}, {"data": ["HomePage-0", 1, 0, 0.0, 483.0, 483, 483, 483.0, 483.0, 483.0, 483.0, 2.070393374741201, 1.037218555900621, 0.24262422360248448], "isController": false}, {"data": ["Cloud Services", 1, 0, 0.0, 389.0, 389, 389, 389.0, 389.0, 389.0, 389.0, 2.5706940874035986, 168.44071336760925, 0.7230077120822622], "isController": false}, {"data": ["Cloud Services-0", 1, 0, 0.0, 193.0, 193, 193, 193.0, 193.0, 193.0, 193.0, 5.181347150259067, 2.8335492227979273, 0.7286269430051814], "isController": false}, {"data": ["HomePage-1", 1, 0, 0.0, 1926.0, 1926, 1926, 1926.0, 1926.0, 1926.0, 1926.0, 0.5192107995846313, 28.82431204569055, 0.06084501557632399], "isController": false}, {"data": ["Product Design-1", 1, 0, 0.0, 199.0, 199, 199, 199.0, 199.0, 199.0, 199.0, 5.025125628140704, 117.89906564070351, 0.7606391331658291], "isController": false}, {"data": ["Product Design-0", 1, 0, 0.0, 215.0, 215, 215, 215.0, 215.0, 215.0, 215.0, 4.651162790697675, 2.6435319767441863, 0.7040334302325582], "isController": false}, {"data": ["About-1", 1, 0, 0.0, 196.0, 196, 196, 196.0, 196.0, 196.0, 196.0, 5.1020408163265305, 324.23867984693874, 0.6228077168367346], "isController": false}, {"data": ["Contact-0", 1, 0, 0.0, 209.0, 209, 209, 209.0, 209.0, 209.0, 209.0, 4.784688995215311, 2.457760167464115, 0.5934135765550239], "isController": false}, {"data": ["About-0", 1, 0, 0.0, 200.0, 200, 200, 200.0, 200.0, 200.0, 200.0, 5.0, 2.548828125, 0.6103515625], "isController": false}, {"data": ["Contact-1", 1, 0, 0.0, 188.0, 188, 188, 188.0, 188.0, 188.0, 188.0, 5.319148936170213, 224.06914893617022, 0.6596991356382979], "isController": false}, {"data": ["Design Automation", 1, 0, 0.0, 372.0, 372, 372, 372.0, 372.0, 372.0, 372.0, 2.688172043010753, 61.46568380376344, 0.8295530913978495], "isController": false}, {"data": ["Design Automation-0", 1, 0, 0.0, 200.0, 200, 200, 200.0, 200.0, 200.0, 200.0, 5.0, 2.87109375, 0.771484375], "isController": false}, {"data": ["Design Automation-1", 1, 0, 0.0, 172.0, 172, 172, 172.0, 172.0, 172.0, 172.0, 5.813953488372093, 129.5989280523256, 0.8970748546511629], "isController": false}, {"data": ["Blog", 1, 0, 0.0, 1726.0, 1726, 1726, 1726.0, 1726.0, 1726.0, 1726.0, 0.5793742757821553, 78.543122646292, 0.15276470162224798], "isController": false}, {"data": ["Case Study", 1, 0, 0.0, 379.0, 379, 379, 379.0, 379.0, 379.0, 379.0, 2.638522427440633, 145.69075692612137, 0.7266243403693932], "isController": false}, {"data": ["Blog-0", 1, 0, 0.0, 730.0, 730, 730, 730.0, 730.0, 730.0, 730.0, 1.36986301369863, 0.449486301369863, 0.18059717465753425], "isController": false}, {"data": ["Blog-1", 1, 0, 0.0, 995.0, 995, 995, 995.0, 995.0, 995.0, 995.0, 1.0050251256281408, 135.91688913316582, 0.1324984296482412], "isController": false}, {"data": ["Product Design", 1, 0, 0.0, 415.0, 415, 415, 415.0, 415.0, 415.0, 415.0, 2.4096385542168677, 57.9042733433735, 0.729480421686747], "isController": false}, {"data": ["Contact", 1, 0, 0.0, 398.0, 398, 398, 398.0, 398.0, 398.0, 398.0, 2.512562814070352, 107.13234139447236, 0.6232333542713567], "isController": false}, {"data": ["About", 1, 0, 0.0, 397.0, 397, 397, 397.0, 397.0, 397.0, 397.0, 2.5188916876574305, 161.3615790302267, 0.6149637909319899], "isController": false}, {"data": ["HomePage", 1, 0, 0.0, 2412.0, 2412, 2412, 2412.0, 2412.0, 2412.0, 2412.0, 0.41459369817578773, 23.224130001036485, 0.09717039800995025], "isController": false}, {"data": ["Digital Assurance", 1, 0, 0.0, 402.0, 402, 402, 402.0, 402.0, 402.0, 402.0, 2.487562189054726, 127.99284825870646, 0.7142024253731343], "isController": false}, {"data": ["Digital Assurance-0", 1, 0, 0.0, 208.0, 208, 208, 208.0, 208.0, 208.0, 208.0, 4.807692307692308, 2.6573768028846154, 0.6901667668269231], "isController": false}, {"data": ["Case Study-0", 1, 0, 0.0, 192.0, 192, 192, 192.0, 192.0, 192.0, 192.0, 5.208333333333333, 2.8177897135416665, 0.7171630859375], "isController": false}, {"data": ["Digital Assurance-1", 1, 0, 0.0, 193.0, 193, 193, 193.0, 193.0, 193.0, 193.0, 5.181347150259067, 263.7325939119171, 0.743806670984456], "isController": false}, {"data": ["Case Study-1", 1, 0, 0.0, 187.0, 187, 187, 187.0, 187.0, 187.0, 187.0, 5.347593582887701, 292.3838569518717, 0.7363385695187166], "isController": false}, {"data": ["Location", 1, 0, 0.0, 388.0, 388, 388, 388.0, 388.0, 388.0, 388.0, 2.577319587628866, 92.05863402061856, 0.6493637242268041], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 30, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
