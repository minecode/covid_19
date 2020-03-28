import React from "react";
import ReactApexChart from "react-apexcharts";
const { getName } = require("country-list");

class Timeline extends React.Component {

    state = {
        series: [{
            name: 'Line chart',
            data: []
        }],
        options: {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            title: {
                text: 'Stock Price Movement',
                align: 'left'
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
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Price'
                },
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0)
                    }
                }
            }
        },


    };
  
  handleClick = (e, countryCode) => {
    console.log(countryCode);
  };

  getCountriesNamesList = () => {
    const { countriesCodesArray } = this.state;
    const list = countriesCodesArray.map(code => getName(code));
    this.setState(
      {
        countriesNamesArray: list
      }
    );
  };

  async componentDidMount() {
    var header = new Headers()
    header.set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
    header.set("x-rapidapi-key", "f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf")
    var count = 0
    var obj2 = this.state.series[0]
    fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php', {
            method: 'GET',
            headers: header
        })
        .then(res1 => res1.json())
        .then(data1 => {
            data1.affected_countries.forEach(countryName => {
                fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=' + countryName + '', {
                    method: 'GET',
                    headers: header
                })
                .then(res3 => res3.json())
                .then(data3 => {
                    obj2.data[countryName] = {};
                    obj2.data[countryName] = data3.stat_by_country
                    count++
                    if (count === data1.affected_countries.length) {
                        this.setState({
                            series: [obj2],
                            isActive: true
                        });
                    }
                })
            })
        })
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="confirmedNCountry"></div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="infectedNCountry"></div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="deathsNCountry"></div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800" id="recoveredNCountry"></div>
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
                    <label for="dropdownCountry">Select list:</label>
                    <select className="form-control" id="dropdownCountry" onchange="drawChartTimeseries()">
                        <option>Global</option>
                    </select>
                    {this.state.isActive ?
                    <div id="chart">
                        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
                    </div> : null}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Timeline;