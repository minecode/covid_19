import React from "react";

class TotalState extends React.Component {
    state = {
        data: {},
        isActive: false
    };

    placeData() {
        var confirmedN = parseInt(this.state.data.total_cases.replace(',', ''))
        var newCasesN = parseInt(this.state.data.new_cases.replace(',',''))
        var deathsN = parseInt(this.state.data.total_deaths.replace(',',''))
        var newDeathsN = parseInt(this.state.data.new_deaths.replace(',',''))
        var recoveredN = parseInt(this.state.data.total_recovered.replace(',',''))

        var h4 = document.createElement('h4')
        h4.setAttribute('class', 'text-info font-weight-bold')
        var confirmedNText = document.createTextNode(confirmedN) 
        h4.append(confirmedNText)
        var p = document.createElement('p')
        p.setAttribute('style', 'margin-bottom: 0!important')
        var newCasesNText = document.createTextNode(newCasesN + ' new cases')
        p.setAttribute('class', 'font-weight-light')
        p.appendChild(newCasesNText)
        document.getElementById('confirmedN').append(h4)
        document.getElementById('confirmedN').append(p)

        h4 = document.createElement('h4')
        h4.setAttribute('class', 'text-danger font-weight-bold')
        var deathsNText = document.createTextNode(deathsN)
        h4.append(deathsNText)
        p = document.createElement('p')
        p.setAttribute('style', 'margin-bottom: 0!important')
        var newDeathsNText = document.createTextNode(newDeathsN + ' new deaths')
        p.setAttribute('class', 'font-weight-light')
        p.appendChild(newDeathsNText)
        document.getElementById('deathsN').append(h4)
        document.getElementById('deathsN').append(p)
        
        h4 = document.createElement('h4')
        h4.setAttribute('class', 'text-success font-weight-bold')
        var recoveredNText = document.createTextNode(recoveredN)
        h4.append(recoveredNText)
        document.getElementById('recoveredN').append(h4)

        h4 = document.createElement('h4')
        h4.setAttribute('class', 'text-warning font-weight-bold')
        var infectedNText = document.createTextNode(confirmedN - recoveredN - deathsN)
        h4.append(infectedNText)
        document.getElementById('infectedN').append(h4)
    }

    async componentDidMount() {
        var header = new Headers()
        header.set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
        header.set("x-rapidapi-key", process.env.REACT_APP_APIKEY)
        fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
                method: 'GET',
                headers: header
            })
            .then(res1 => res1.json())
            .then(data1 => {
                this.setState({
                    data: data1,
                    isActive: true
                })
                this.placeData()
            })
    }

  render() {
    return (
      <div>
        {this.state.isActive ?
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Confirmed
                                </div>
                                <div className="mb-0 font-weight-bold text-gray-800" id="confirmedN"></div>
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
                                <div className="mb-0 font-weight-bold text-gray-800" id="infectedN"></div>
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
                                <div className="mb-0 font-weight-bold text-gray-800" id="deathsN"></div>
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
                                <div className="mb-0 font-weight-bold text-gray-800" id="recoveredN"></div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : null}
      </div>
    );
  }
}

export default TotalState;