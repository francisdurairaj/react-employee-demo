import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = { emp: this.props.employeedata };
  }

  render() {
     const employeeCard = this.state.emp.employees.map((e) => {
       return (
          <div className="card" key={e.id}>
            <div className="content" >
              <div className="header">{e.name}</div>
              <div className="meta">{e.department}</div>
              <div className="description">
                {e.name} is working in {e.department} Department 
                and draws pay around ${e.salary}/month.
              </div>
            </div>
        </div>
      );
     });

    return (
      <div className={"ui cards"}>
        { employeeCard }
      </div>
    )
  }
}
