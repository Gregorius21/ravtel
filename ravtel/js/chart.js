var ctxPerform = document.getElementById('performanceChart').getContext('2d');
var performanceChart = new Chart(ctxPerform, {
    type: 'line',
    data: {
        labels: [
            "31/01/21", "20/02/21", "25/02/21", "30/02/21", "10/03/21", "20/04/21", "30/04/21",
            "10/05/21", "20/06/21", "13/07/21", "19/08/21", "10/09/21", "1/10/21", "20/11/21",
            "20/12/21",
        ],
        datasets: [
            { 
                data: [100,110,120,107,122,115,130,135,140,145,150,158,167,171,175],
                label: "Total",
                borderColor: "#436ca5",
                backgroundColor: "#508cd5",
                fill: true,
            }
        ]
    },
    options: {
        interaction: {
            mode: 'index',
            intersect: false,
        },
    }
});

var ctxTransfer = document.getElementById('tranfersChart').getContext('2d');
var tranfersChart = new Chart(ctxTransfer, {
    type: 'line',
    data: {
        labels: [
            "31/01/21", "20/02/21", "25/02/21", "30/02/21", "10/03/21", "20/04/21", "30/04/21",
            "10/05/21", "20/06/21", "13/07/21", "19/08/21", "10/09/21", "1/10/21", "20/11/21",
            "20/12/21",
        ],
        datasets: [
            { 
                data: [20000,30000,35000,25000,40000,39000,41000,45000,45000,10000,50000,30000,31000,60000,900000],
                label: "Masuk",
                borderColor: "#c8d2ce",
                backgroundColor: 'rgba(188,204,199,0.5)',
                fill: true,
            },
            { 
                data: [2000,3000,3500,2500,4000,3900,4100,4500,4500,1000,5000,3000,6000,9000,90000],
                label: "Keluar",
                borderColor: "#ce938e",
                backgroundColor: 'rgba(200,92,77,0.5)',
                fill: true,
            }
        ]
    },
    options: {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                // forces step size to be 50 units
                stepSize: 100000
                }
            }
        }
    }
});

var ctxFund = document.getElementById("fund").getContext('2d');
var fundChart = new Chart(ctxFund,{
    type:'line',
    data: {
        labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[ 
            { 
                data:[100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,250000,400000],
                label:"Balance Fund", 
                borderColor: "#848bee",
                backgroundColor: "rgba(76,81,185,1)",
                fill: true,
            }
        ]
    },
    options:{
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        legend:{
            display:false
        },
        animation:{
            easing:"easeInOutBack"
        },
        scales:{
            y:{
                display:!1,
                ticks:{
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold",
                    beginAtZero:!0,
                    maxTicksLimit:5,
                    padding:0
                },
                gridLines:{
                    drawTicks:!1,
                    display:!1
                }
            },
            x:{
                display:!1,
                gridLines:{
                    zeroLineColor:"transparent"
                },ticks:{
                    padding:0,
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold"
                }
            }
        }
    }
});

var ctxUnit = document.getElementById("unit").getContext('2d');
var unitChart = new Chart(ctxUnit,{
    type:'line',
    data: {
        labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[ 
            { 
                data:[100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,250000,400000],
                label:"Balance Unit", 
                borderColor: "#8abdf5",
                backgroundColor: "rgba(109,167,232,1)",
                fill: true,
            }
        ]
    },
    options:{
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        legend:{
            display:false
        },
        animation:{
            easing:"easeInOutBack"
        },
        scales:{
            y:{
                display:!1,
                ticks:{
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold",
                    beginAtZero:!0,
                    maxTicksLimit:5,
                    padding:0
                },
                gridLines:{
                    drawTicks:!1,
                    display:!1
                }
            },
            x:{
                display:!1,
                gridLines:{
                    zeroLineColor:"transparent"
                },ticks:{
                    padding:0,
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold"
                }
            }
        }
    }
});

var ctxOrange = document.getElementById("orange").getContext('2d');
var OrangeChart = new Chart(ctxOrange,{
    type:'line',
    data: {
        labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[ 
            { 
                data:[100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,250000,400000],
                label:"Balance Fund", 
                borderColor: "#fed180",
                backgroundColor: "rgba(240,184,101,1)",
                fill: true,
            }
        ]
    },
    options:{
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        legend:{
            display:false
        },
        animation:{
            easing:"easeInOutBack"
        },
        scales:{
            y:{
                display:!1,
                ticks:{
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold",
                    beginAtZero:!0,
                    maxTicksLimit:5,
                    padding:0
                },
                gridLines:{
                    drawTicks:!1,
                    display:!1
                }
            },
            x:{
                display:!1,
                gridLines:{
                    zeroLineColor:"transparent"
                },ticks:{
                    padding:0,
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold"
                }
            }
        }
    }
});

var ctxPartners = document.getElementById("partners").getContext('2d');
var partnerChart = new Chart(ctxPartners,{
    type:'line',
    data: {
        labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
        datasets:[ 
            { 
                data:[100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,250000,400000],
                label:"Total Partners", 
                borderColor: "#f7948d",
                backgroundColor: "rgba(216,115,111,1)",
                fill: true,
            }
        ]
    },
    options:{
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        legend:{
            display:false
        },
        animation:{
            easing:"easeInOutBack"
        },
        scales:{
            y:{
                display:!1,
                ticks:{
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold",
                    beginAtZero:!0,
                    maxTicksLimit:5,
                    padding:0
                },
                gridLines:{
                    drawTicks:!1,
                    display:!1
                }
            },
            x:{
                display:!1,
                gridLines:{
                    zeroLineColor:"transparent"
                },ticks:{
                    padding:0,
                    fontColor:"rgba(0,0,0,0.5)",
                    fontStyle:"bold"
                }
            }
        }
    }
});