import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Spinner from "./Spinner";
import Users from "./Users";

const App = () => {

  const URL = "https://reqres.in/api/users"


  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);


  const Toggle = () => {
    setShow((e) => !e)
  }


  const FetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => setData(result), setTimeout(() => { setLoading(true) }, 3000))
      .catch((err) => console.log(err))

  }
  const showCard=()=>{
    setModal(true)
  }


  useEffect(() => {
    FetchData();
    showCard();
  }, [])


  console.log(data);
  console.log(loading);

  const [modal, setModal] = useState(false);



  return (
    <>
      <Navbar Toggle={Toggle} />

      <Sidebar show={show} />

      <button onClick={() => setModal(true)} className="btn btn-success w-25 m-1 mx-auto">SHOW CARD</button>

      <div className={`card mx-auto w-75 mt-5 pb-5 ${modal ? "d-block" : "toTop"}`}>

        <button onClick={() => setModal((e) => !e)} className="btn btn-danger w-25 m-1 mx-auto">HIDE CARD</button>

        {loading ? <Users data={data} /> : <Spinner />}

      </div>
    </>

  );

};

export default App;