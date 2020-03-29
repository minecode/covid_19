import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Timeline extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			countryOptions: [],
			countryData: [],
			series: [{
				name: 'Confirmed',
				data: []
			}, {
				name: 'Infected',
				data: []
			}, {
				name: 'Deaths',
				data: []
			}, {
				name: 'Recovered',
				data: []
			}, {
				name: 'New cases',
				data: []
			}, {
				name: 'New deaths',
				data: []
			}, {
				name: 'Serious critical',
				data: []
			}],
			options: {
				chart: {
					fontFamily: 'Helvetica, Arial, sans-serif',
					type: 'area',
					stacked: false,
					height: 350,
					zoom: {
						enabled: false
					}
				},
				colors: ['#17a2b8', '#ffc107', '#dc3545', '#28a745', '#117a8b', '#bd2130', '#d39e00'],
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				markers: {
					size: 0,
				},
				fill: {
					type: 'gradient',
					gradient: {
						shadeIntensity: 1,
						inverseColors: false,
						opacityFrom: 0.5,
						opacityTo: 0,
						stops: [0, 90, 100]
					},
				},
				xaxis: {
					categories: []
				},
				tooltip: {
					shared: true
				},
				grid: {
					show: false
				}
			},
		};

		this.drawChartTimeseries = this.drawChartTimeseries.bind(this);
	}
  
	drawChartTimeseries(event) {
		this.setState({
			loading: true
		});
		var header = new Headers();
		header.set('x-rapidapi-host', 'coronavirus-monitor.p.rapidapi.com');
		header.set('x-rapidapi-key', 'process.env.API_KEY');

		var countryData = {};
		var countryName = event.target.value;
		fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=' + countryName + '', {
			method: 'GET',
			headers: header
		})
			.then(res3 => res3.json())
			.then(data3 => {
				countryData[countryName] = {};
				countryData[countryName].series = [{
					name: 'Confirmed',
					data: []
				}, {
					name: 'Infected',
					data: []
				}, {
					name: 'Deaths',
					data: []
				}, {
					name: 'Recovered',
					data: []
				}, {
					name: 'New cases',
					data: []
				}, {
					name: 'New deaths',
					data: []
				}, {
					name: 'Serious critical',
					data: []
				}
				];

				countryData[countryName].options = {
					chart: {
						fontFamily: 'Helvetica, Arial, sans-serif',
						type: 'area',
						stacked: false,
						height: 350,
						zoom: {
							enabled: false
						}
					},
					colors: ['#17a2b8', '#ffc107', '#dc3545', '#28a745', '#117a8b', '#bd2130', '#d39e00'],
					dataLabels: {
						enabled: false
					},
					stroke: {
						curve: 'smooth'
					},
					markers: {
						size: 0,
					},
					fill: {
						type: 'gradient',
						gradient: {
							shadeIntensity: 1,
							inverseColors: false,
							opacityFrom: 0.5,
							opacityTo: 0,
							stops: [0, 90, 100]
						},
					},
					xaxis: {
						categories: []
					},
					tooltip: {
						shared: true
					},
					grid: {
						show: false
					}
				};

				countryData[countryName].options.xaxis.categories = data3.stat_by_country.map(function (country) {
					return new Date(country.record_date).toLocaleDateString();
				}).filter(this.onlyUnique);

				countryData[countryName].series[0].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.total_cases.replace(',', ''))) ? 0 : parseInt(country.total_cases.replace(',', ''))
					};
					return temp;
				});

				var out = Object.values(
					countryData[countryName].series[0].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[0].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[1].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.active_cases.replace(',', ''))) ? 0 : parseInt(country.active_cases.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[1].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[1].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[2].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.total_deaths.replace(',', ''))) ? 0 : parseInt(country.total_deaths.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[2].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[2].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[3].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.total_recovered.replace(',', ''))) ? 0 : parseInt(country.total_recovered.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[3].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[3].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[4].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.new_cases.replace(',', ''))) ? 0 : parseInt(country.new_cases.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[4].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[4].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[5].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.new_deaths.replace(',', ''))) ? 0 : parseInt(country.new_deaths.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[5].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[5].data = out.map(function (obj) {
					return obj.number;
				});

				countryData[countryName].series[6].data = data3.stat_by_country.map(function (country) {
					var temp = {
						date: country.record_date.split(' ')[0],
						number: isNaN(parseInt(country.serious_critical.replace(',', ''))) ? 0 : parseInt(country.serious_critical.replace(',', ''))
					};
					return temp;
				});

				out = Object.values(
					countryData[countryName].series[6].data.reduce((c, e) => {
						if (!c[e.date]) c[e.date] = e;
						return c;
					}, {})
				);
				countryData[countryName].series[6].data = out.map(function (obj) {
					return obj.number;
				});

				this.setState({
					series: countryData[countryName].series,
					options: countryData[countryName].options,
					isActive2: true,
					loading: false
				});
				var confirmedN = this.state.series[0].data[this.state.series[0].data.length-1];
				var infectedN = this.state.series[1].data[this.state.series[1].data.length - 1];
				var deathsN = this.state.series[2].data[this.state.series[2].data.length-1];
				var recoveredN = this.state.series[3].data[this.state.series[3].data.length-1];
				var newCasesN = this.state.series[4].data[this.state.series[4].data.length - 1];
				var newDeathsN = this.state.series[5].data[this.state.series[5].data.length - 1];
				var seriousCriticalN = this.state.series[6].data[this.state.series[6].data.length - 1];
				
				var h4 = document.createElement('h4');
				h4.setAttribute('class', 'text-info font-weight-bold');
				var confirmedNText = document.createTextNode(confirmedN);
				h4.append(confirmedNText);

				var p = document.createElement('p');
				p.setAttribute('style', 'margin-bottom: 0!important');
				var newCasesNText = document.createTextNode(newCasesN + ' new cases');
				p.setAttribute('class', 'font-weight-light');
				p.appendChild(newCasesNText);

				document.getElementById('confirmedNCountry').innerHTML = '';
				document.getElementById('confirmedNCountry').append(h4);
				document.getElementById('confirmedNCountry').append(p);

				h4 = document.createElement('h4');
				h4.setAttribute('class', 'text-warning font-weight-bold');
				var infectedNText = document.createTextNode(infectedN);
				h4.append(infectedNText);

				p = document.createElement('p');
				p.setAttribute('style', 'margin-bottom: 0!important');
				var seriousCriticalNText = document.createTextNode(seriousCriticalN + ' serious critical');
				p.setAttribute('class', 'font-weight-light');
				p.appendChild(seriousCriticalNText);

				document.getElementById('infectedNCountry').innerHTML = '';
				document.getElementById('infectedNCountry').append(h4);
				document.getElementById('infectedNCountry').append(p);

				h4 = document.createElement('h4');
				h4.setAttribute('class', 'text-danger font-weight-bold');
				var deathsNText = document.createTextNode(deathsN);
				h4.append(deathsNText);

				p = document.createElement('p');
				p.setAttribute('style', 'margin-bottom: 0!important');
				var newDeathsNText = document.createTextNode(newDeathsN + ' new deaths');
				p.setAttribute('class', 'font-weight-light');
				p.appendChild(newDeathsNText);

				document.getElementById('deathsNCountry').innerHTML = '';
				document.getElementById('deathsNCountry').append(h4);
				document.getElementById('deathsNCountry').append(p);

				document.getElementById('recoveredNCountry').innerHTML = '';
				h4 = document.createElement('h4');
				h4.setAttribute('class', 'text-success font-weight-bold');
				var recoveredNText = document.createTextNode(recoveredN);
				h4.append(recoveredNText);
				document.getElementById('recoveredNCountry').append(h4);
			});
    
	}
	onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}
	setCountryOptions() {
		this.state.countryOptions.forEach(countryName => {
			var option = document.createElement('option');
			option.setAttribute('value', countryName);
			var country = document.createTextNode(countryName);
			option.append(country);
			document.getElementById('dropdownCountry').append(option);
		});
	}

	async componentDidMount() {
		var header = new Headers();
		header.set('x-rapidapi-host', 'coronavirus-monitor.p.rapidapi.com');
		header.set('x-rapidapi-key', 'process.env.API_KEY');
		fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php', {
			method: 'GET',
			headers: header
		})
			.then(res1 => res1.json())
			.then(data1 => {
				this.setState({
					countryOptions: data1.affected_countries,
					isActive1: true
				});
				this.setCountryOptions();
			});
	}
	render() {
		return (
			<div id="mapDiv">
				<div className="card mb-4">
					<div className="card-body">
						<div className="row">
							<div className="col-xl-3 col-md-6 mb-4">
								<div className="card border-left-info shadow h-100 py-2">
									<div className="card-body">
										<div className="row no-gutters align-items-center">
											<div className="col mr-2">
												<div className="text-xs font-weight-bold text-info text-uppercase mb-1">Confirmed
												</div>
												<div className="mb-0 font-weight-bold text-gray-800" id="confirmedNCountry"></div>
											</div>
											<div className="col-auto">
												<i className="fas fa-comments fa-2x text-gray-300"></i>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-md-6 mb-4">
								<div className="card border-left-warning shadow h-100 py-2">
									<div className="card-body">
										<div className="row no-gutters align-items-center">
											<div className="col mr-2">
												<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Infected
												</div>
												<div className="mb-0 font-weight-bold text-gray-800" id="infectedNCountry"></div>
											</div>
											<div className="col-auto">
												<i className="fas fa-comments fa-2x text-gray-300"></i>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-md-6 mb-4">
								<div className="card border-left-danger shadow h-100 py-2">
									<div className="card-body">
										<div className="row no-gutters align-items-center">
											<div className="col mr-2">
												<div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Deaths
												</div>
												<div className="mb-0 font-weight-bold text-gray-800" id="deathsNCountry"></div>
											</div>
											<div className="col-auto">
												<i className="fas fa-comments fa-2x text-gray-300"></i>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-md-6 mb-4">
								<div className="card border-left-success shadow h-100 py-2">
									<div className="card-body">
										<div className="row no-gutters align-items-center">
											<div className="col mr-2">
												<div className="text-xs font-weight-bold text-success text-uppercase mb-1">Recovered
												</div>
												<div className="mb-0 font-weight-bold text-gray-800" id="recoveredNCountry"></div>
											</div>
											<div className="col-auto">
												<i className="fas fa-comments fa-2x text-gray-300"></i>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="form-group">
							{this.state.isActive1 ?
								<div>
									<label htmlFor="dropdownCountry">Select list:</label>
									<select className="form-control" id="dropdownCountry" onChange={this.drawChartTimeseries}>
									</select>
								</div> : <div className="loader loader--style3" title="2">
									<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style={{'enable-background':'new 0 0 50 50'}} xmlSpace="preserve">
										<path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
										</path>
									</svg>
								</div>}
							{this.state.isActive2 ?
								<div>
									<div id="chart">
										<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
									</div>
								</div> : this.state.loading ? <div className="loader loader--style3" title="2">
									<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style={{'enable-background':'new 0 0 50 50'}} xmlSpace="preserve">
										<path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
										</path>
									</svg>
								</div> : null }
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Timeline;