import React, {useContext} from 'react';
import Header from '../components/Header';
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
    return (
        <div>
          <Header />
          <h2>{userInfo}</h2>
          <button onClick={() => setUserInfo("ADMIN")}>Set to Admin</button>
          <button onClick={() => setUserInfo("USER")}>Set to User</button>
        </div>
    )
}


export default Home