import React,{useState} from 'react'

const Home = () => {

  // const repos = async () => {
  //   const url = `https://api.github.com/users/Shikha291/repos`;

  //   let data = await fetch(url);

  //   let parseData = await data.json();
  //   const name = parseData
  //       console.log(parseData);
  //   const url1 = `https://api.github.com/users/Shikha291/repos`;

  //   let data1 = await fetch(url1);

  //   let parseData1 = await data1.json();
  //   console.log(parseData1);
  // }
  const [Tech, setTech] = useState("");
  const handleChange = (e) =>{
    setTech(e.target.value);
  }
  const handleSubmit = (e) =>{
    console.log(Tech);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"aria-label="Search" name="tech"
          value={Tech} onChange={handleChange}/>
    </form>
    </div>
    // <div>
    //     <button onClick={updateState()}>Github repos</button>
    // </div>
  )
}

export default Home