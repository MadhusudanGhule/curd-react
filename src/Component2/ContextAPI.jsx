import React from 'react';
import User from './User';

import { UserAgeContext, UserContext, UserEduContext } from './Contex';
import Detail from './Detail';
import UserDetails from './UserDetails';
const ContextAPI = () => {
  const user = [{
    id: 1,
    name: "rama",
    education: "bca",
    age: "22"
  },
  {
    id: 2,
    name: "madan",
    education: "bca",
    age: "22"
  },
  {
    id: 3,
    name: "sham",
    education: "bca",
    age: "22"
  },]
  const age = 21;
  const edu = "bsc";

  return (
    <>
      <UserContext.Provider value={user} >
        <User />



      </UserContext.Provider>
      <UserAgeContext.Provider value={age}>
        <Detail />

      </UserAgeContext.Provider>
      <UserEduContext.Provider value={edu}>
        <UserDetails />
      </UserEduContext.Provider>
    </>
  );
}
export default ContextAPI;
