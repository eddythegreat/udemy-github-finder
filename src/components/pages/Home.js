import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

//can take out the return() but didn't
const Home = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
};

export default Home
