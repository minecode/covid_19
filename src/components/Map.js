import React from "react";
import { VectorMap } from "react-jvectormap";

const { getName, getCode } = require("country-list");

class Map extends React.Component {
  state = {
    countriesCodesArray: [],
    countriesNamesArray: [],
    data: {},
    data2: {},
    title: "",
    titleSet: false,
    isActive: false
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
    var obj = {}
    var obj2 = {}
    fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php', {
            method: 'GET',
            headers: header
        })
        .then(res1 => res1.json())
        .then(data1 => {
            data1.affected_countries.forEach(countryName => {
                    fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=' + countryName + '', {
                        method: 'GET',
                        headers: header
                    })
                .then(res2 => res2.json())
                .then(data2 => {
                    if (countryName === 'USA')
                        countryName = 'US'
                    else if (countryName === 'UK')
                        countryName = 'GB'
                    else if (countryName === 'Russia')
                        countryName = 'RU'
                    else if (countryName === 'Iran')
                        countryName = 'IR'
                    else if (countryName === 'Vietnam')
                        countryName = 'VN'
                    else if (countryName === 'S. Korea')
                        countryName = 'KR'
                    else if (countryName === 'Venezuela')
                        countryName = 'VE'
                    else if (countryName === 'Bolivia')
                        countryName = 'BO'
                    else if (countryName === 'Taiwan')
                        countryName = 'TW'
                    else if (countryName === 'UAE')
                        countryName = 'AE'
                    else if (countryName === 'Moldova')
                        countryName = 'MD'
                    else if (countryName === 'Tanzania')
                        countryName = 'TZ'
                    else if (countryName === 'Syria')
                        countryName = 'SY'
                    else if (getCode(countryName) === undefined && getName(countryName) === undefined)
                        console.log(countryName)
                    else
                        countryName = getCode(countryName)

                    if(countryName !== undefined) {
                        obj[countryName] = data2.latest_stat_by_country[0].total_cases
                        obj2[countryName] = {}
                        obj2[countryName]['total_cases'] = data2.latest_stat_by_country[0].total_cases
                        obj2[countryName]['new_cases'] = data2.latest_stat_by_country[0].new_cases
                        obj2[countryName]['active_cases'] = data2.latest_stat_by_country[0].active_cases
                        obj2[countryName]['total_deaths'] = data2.latest_stat_by_country[0].total_deaths
                        obj2[countryName]['new_deaths'] = data2.latest_stat_by_country[0].new_deaths
                        obj2[countryName]['total_recovered'] = data2.latest_stat_by_country[0].total_recovered
                        obj2[countryName]['serious_critical'] = data2.latest_stat_by_country[0].serious_critical
                        obj2[countryName]['total_cases_per1m'] = data2.latest_stat_by_country[0].total_cases_per1m
                    }
                    count++
                    if (count === data1.affected_countries.length) {
                        this.setState({
                            data: obj,
                            data2: obj2,
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
        {this.state.isActive ?
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" // change it to ocean blue: #0077be
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          onRegionClick={this.handleClick} // gets the country code
          onRegionTipShow={(e, tip, code) => {
            if (this.state.data2[code] !== undefined) {
                var total_cases = this.state.data[code]
                var new_cases = this.state.data2[code].new_cases
                var active_cases = this.state.data2[code].active_cases
                var serious_critical = this.state.data2[code].serious_critical
                var total_deaths = this.state.data2[code].total_deaths
                var new_deaths = this.state.data2[code].new_deaths
                var total_recovered = this.state.data2[code].total_recovered
                var total_cases_per1m = this.state.data2[code].total_cases_per1m

                if (this.state.data[code] < 1)
                    total_cases = 0
                if (this.state.data2[code].new_cases.length < 1)
                    new_cases = 0
                if (this.state.data2[code].active_cases < 1)
                    active_cases = 0
                if (this.state.data2[code].serious_critical < 1)
                    serious_critical = 0
                if (this.state.data2[code].total_deaths < 1)
                    total_deaths = 0
                if (this.state.data2[code].new_deaths < 1)
                    new_deaths = 0
                if (this.state.data2[code].total_recovered < 1)
                    total_recovered = 0
                if (this.state.data2[code].total_cases_per1m < 1)
                    total_cases_per1m = 0

                tip.html(
                    '<b>'+tip.html()+'</b></br>Total cases: '+total_cases+' (+' + new_cases +')</br>Active cases: ' + active_cases +' (!' + serious_critical + ')</br>Total deaths: ' + total_deaths +' (+' + new_deaths +')</br>Total recovered: ' + total_recovered + '</br>Total Cases per 1 minute: ' + total_cases_per1m
                )
            }
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" // color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={true}
          series={{
            regions: [
              {
                values: this.state.data, // this is the map data
                scale: ["#48aeef", "#2938bc"], // your color game's here
                normalizeFunction: "polynomial"
              }
            ]
          }
        }
        /> : null}
      </div>
    );
  }
}

export default Map;