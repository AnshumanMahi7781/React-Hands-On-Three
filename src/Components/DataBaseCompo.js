import React, { Component } from 'react'

 class DataBaseCompo extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="dataContainer">
            <h2 className='dataContainerHeading'>EMPLOYEE FEEDBACK DATA </h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Department </th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.empDatabase.map((emp, index) => {
                            return (
                                <tr key={index}>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empDepart}</td>
                                    <td>{emp.empRating}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <button className='backButton' type="button" onClick={this.props.goBack}>Back</button>
        </div>
    )
  }
}

export default DataBaseCompo
