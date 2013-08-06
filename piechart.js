
				$('#container').highcharts({
					chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						backgroundColor: null,
						style: {
							fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', // default font
							fontSize: '22px'
						}
					},
					title: {
						text: null
					},
					tooltip: {
						headerFormat: '<strong>{point.key}</strong><br>',
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
						style: {
							fontFamily: 'Lato, sans-serif',
							fontSize: '16px'
						}
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: true,
								color: '#fff',
								connectorColor: '#fff',
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
									fontFamily: 'Lato, sans-serif',
									fontSize: '20px'
								}
							},
							events: {
								click: function(event) {
									if(event.point.x <= 2){
										Reveal.slide(5, 1+event.point.x);
									}
									if(event.point.x == 3){
										Reveal.slide(5, 3);
									}
								}
							}
						}
					},
					series: [{
						type: 'pie',
						name: 'Browser share',
						data: [
							['Fixed income', 30], // x= 0
							['Equity',       55], // x= 1
							['Real estate',  6],  // x= 2
							['Commodities',  5],  // x= 3
							['Cash',         4]   // x= 4
						],
					}]
				});