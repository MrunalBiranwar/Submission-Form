import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setemail] = useState("");
  const [contact , setContact] = useState("");
  const [gender , setgender] = useState("male");
  const [subjects , setSubjects] = useState({
    english:true,
    maths:false,
    physics:false,
  });
  const [resume,setResume] = useState("");
  const [selectedOption , setSelectedOption] = useState("");
  const [url , seturl] = useState("");
  const [about , setAbout] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about
    );
  }
  const handleSubjestSelection = (sub) =>{
    setSubjects((prev) =>({
      ...prev,
      [sub]:!prev[sub],
    }))
  }
  const handleReset = () =>{
    setFirstName("");
    setLastName("");
    setContact("");
    setemail("");
    setSubjects({
      english:true,
    maths:false,
    physics:false,
    })
    setgender("male");
    setResume("");
    seturl("");
    setSelectedOption("");
    setAbout("");
  }
  return (
    <div className="App">
      <h2>From in React</h2>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your firstname..."
            value={firstName}
            onChange={(e) =>{setFirstName(e.target.value)}}
            required
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your lastname..."
            value={lastName}
            onChange={(e) =>{setLastName(e.target.value)}}
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) =>{setemail(e.target.value)}}
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="phonenumber"
            id="fphonenumber"
            placeholder="Enter your phone number..."
            value={contact}
            onChange={(e) =>{setContact(e.target.value)}}
            required
          />
          <label htmlFor="gender">Gender*</label>
          Male
          <input type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e) =>{setgender(e.target.value)}}/>
          Female
          <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e) =>{setgender(e.target.value)}}/>
          Other
          <input type="radio" name="gender" id="other" value="other" checked={gender === "other"} onChange={(e) =>{setgender(e.target.value)}}/>
          <label htmlFor="sub">Your best Subjects</label>
          English
          <input type="checkbox" name="sub" id="english" checked={subjects.english === true}  onChange={(e) =>{handleSubjestSelection("english")}}/>
          Maths
          <input type="checkbox" name="sub" id="math" checked={subjects.maths === true} onChange={(e) =>{handleSubjestSelection("maths")}}/>
          Physics
          <input type="checkbox" name="sub" id="physics" checked={subjects.physics === true} onChange={(e) =>{handleSubjestSelection("physics")}}/>
          <label htmlFor="resume">Upload Resume*</label>
          <input type="file" name="file" id="file" onChange={(e) =>{setResume(e.target.files[0])}}/>
          <label htmlFor="url">Enter URL*</label>
          <input type="url" name="url" id="url" placeholder="Enter url" value={url} onChange={(e) =>{seturl(e.target.value)}}/>
          <label htmlFor="choice">Select your choice</label>
          <select name="select" id="select" onChange={(e) =>{setSelectedOption(e.target.value)}}>
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginnner">
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="express">Express</option>
              <option value="mongodb">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="About">About</label>
          <textarea
            type="about"
            name="about"
            id="about"
            placeholder="about your self"
            value={about}
            onChange={(e) =>{setAbout(e.target.value)}}
          />
          <label htmlFor="resetorsubmit">Submit OR Reset</label>
          <button type="reset" value="reset" onClick={(e) =>{handleReset(e)}}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) =>{handleSubmit(e)}}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
