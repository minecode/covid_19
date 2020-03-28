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

        document.getElementById('confirmedN').innerText = confirmedN + ' (+' + newCasesN + ')'
        document.getElementById('deathsN').innerHTML = deathsN + ' (+' + newDeathsN + ')'
        document.getElementById('recoveredN').innerHTML = recoveredN
        document.getElementById('infectedN').innerHTML = confirmedN - deathsN - recoveredN
    }

    async componentDidMount() {
        var header = new Headers()
        header.set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
        header.set("x-rapidapi-key", "f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf")
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
                                <div className="h5 mb-0 font-weight-bold text-gray-800" id="confirmedN"></div>
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
                                <div className="h5 mb-0 font-weight-bold text-gray-800" id="infectedN"></div>
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
                                <div className="h5 mb-0 font-weight-bold text-gray-800" id="deathsN"></div>
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
                                <div className="h5 mb-0 font-weight-bold text-gray-800" id="recoveredN"></div>
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