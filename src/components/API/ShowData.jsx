import React from 'react'
import './ShowData.css';
import { useEffect, useState } from 'react';

export const ShowData = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());

    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row text-center marginTop shadow">
                    {
                        users.map((data) => {
                            return (
                                <>
                                    <div className="col-md-4 marginTop">
                                        <div className="card">
                                            <img className="card-img-top" alt="Card image cap" src={data.avatar_url} />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.login}</h5>

                                                <a href={data.repos_url} class="btn btn-primary">see Repos</a>
                                            </div>
                                        </div>
                                    </div>



                                </>
                            )

                        })
                    }
                </div>
            </div>

        </>
    )
}
