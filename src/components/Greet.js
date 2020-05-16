import React from 'react'

function Greet(){
    let employees=[
        { empId: 1234, name: 'Jack', designation:'SE', salary:23000},
        { empId: 4567, name: 'Johnson', designation:'SSE', salary:15000},
        { empId: 8910, name: 'Sachin',designation:'TA', salary:30000}
    ]
    return <React.Fragment>
        <table className='table' style={{width:'60%'}}>
            <thead className='thead-light'>
                <tr>
                    <th>EmpId</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>{
                        return(<tr key={employee.empId}>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.salary}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </React.Fragment>
}

export default Greet