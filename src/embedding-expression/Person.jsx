import React from 'react'
import './Person.css';


const Person = () => {

    const person_data = {
        name: 'ajay',
        age: 20,
        isStudent: 'yes'
    }

    const person = {
        name: 'ansar',
        age: 22,
        isStudent: 'yes'
    }
     const person3 = {
        name: 'ashfaq',
        age: 22,
        isStudent: 'no'
    }

     const person4 = {
        name: 'rabaah',
        age: 24,
        isStudent: 'no'
    }


    return (
        <div>
            <table border='1' cellPadding='10' cellSpacing='10'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>isStudent</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.isStudent}</td>
                    </tr>
                    <tr>
                        <td>{person_data.name}</td>
                        <td>{person_data.age}</td>
                        <td>{person_data.isStudent}</td>
                    </tr>
                    <tr>
                        <td>{person3.name}</td>
                        <td>{person3.age}</td>
                        <td>{person3.isStudent}</td>
                    </tr>
                     <tr>
                        <td>{person4.name}</td>
                        <td>{person4.age}</td>
                        <td>{person4.isStudent}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Person
