import React, { useState } from 'react';
import Data from "./Data.json"
import Table from './Table';



function AppointmentList(props) {

    const Columns = React.useMemo(
        () => [
            {
                Header: 'Doctor',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'first_name',
                    },
                    {
                        Header: 'Name',
                        accessor: 'last_name',
                    },
                ]
            }
        ],
        []
    )

    // const appointment = [
    //     { id: "1", user: "User1" },
    //     { id: "10", user: "User10" },
    //     { id: "2", user: "User2" },
    //     { id: "20", user: "User20" },
    //     { id: "3", user: "User3" },
    //     { id: "30", user: "User30" },
    //     { id: "4", user: "User4" },
    //     { id: "40", user: "User40" },
    //     { id: "5", user: "User5" },
    //     { id: "50", user: "User50" },
    //     { id: "6", user: "User6" },
    //     { id: "60", user: "User60" },
    //     { id: "7", user: "User7" },
    //     { id: "70", user: "User70" },
    //     { id: "8", user: "User8" },
    //     { id: "80", user: "User80" }
    // ];

    // const [data, setData] = useState(appointment) 

    // const handleSearch = (event) => {
    //     const filterD = appointment.filter(l => l.user.toLowerCase().includes(event.target.value.toLowerCase()) || l.id.toLowerCase().includes(event.target.value.toLowerCase()))
    //     setData(filterD)
    // }

    // const handleFilter = (event) => {
    //     const filterD = appointment.filter(l => l.user.includes(event.target.value))
    //     setData(filterD)
    // }

    return (
        // <div>
        //     <input placeholder='Search' onChange={handleSearch} />
        //     <select onChange={handleFilter}>
        //         {
        //             appointment.map((l) => {
        //                 return (
        //                     <>
        //                     <option value={l.user}>{l.user}</option>
        //                     </>
        //                 )
        //             })
        //         }
        //     </select>
        //     <table cellSpacing="0" cellPadding="15px">
        //         <tr>
        //             <th>ID</th>
        //             <th>USER</th>
        //         </tr>
        //         {
        //             data.map((l) => {
        //                 return (
        //                     <tr>
        //                         <td>{l.id}</td>
        //                         <td>{l.user}</td>
        //                     </tr>
        //                 )
        //             })
        //         }
        //     </table>

        // </div>
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Appointment List</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>

                    <div>
                        <Table
                            data={Data}
                            columns={Columns}
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AppointmentList;