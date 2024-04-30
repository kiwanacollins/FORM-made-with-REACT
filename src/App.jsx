import PersonalInfo from './components/PersonalInfo';
import EducationalInfo from './components/EducationalInfo';
import PracticalInfo from './components/PracticalInfo'
import { useState } from "react";
export default function App() {
  // state for EducationalInfo
  const [schoolName, setSchoolName] = useState(''); 
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [dateOfFinish, setDateOfFinish] = useState('');
  // state for PersonalInfo
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); 
  // state for PracticalInfo
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // 
  function preventSubmit(e) {
    e.preventDefault();
  }
  function schoolNameSetting(e) {
    const newSchoolName = e.target.value;
    setSchoolName(newSchoolName);
  }
  function titleOfStudySetting(e) {
    const newTitleOfStudy = e.target.value;
    setTitleOfStudy(newTitleOfStudy);
  }
  function dateOfStudySetting(e) {
    const newDateOfStudy = e.target.value;
    setDateOfStudy(newDateOfStudy);
  }
  function dateOfFinishSetting(e) {
    const newDateOfFinish = e.target.value;
    setDateOfFinish(newDateOfFinish);
  }
  // 
  function storeName(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function storeEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  function storePhone(e) {
    const newPhone = e.target.value;
    setPhone(newPhone);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  // 
 
  function setCompanyNamefun(e) {
    const newCompanyName = e.target.value;
    setCompanyName(newCompanyName);
  }
  function setPositionTitlefun(e) {
    const newPositionTitle = e.target.value;
    setPositionTitle(newPositionTitle);

  }
  function setJobDescriptionfun(e) {
    const newJobDescription = e.target.value;
    setJobDescription(newJobDescription);
  
  }


  return (
   <div className='parent'>
     <div className="card1">
     <PersonalInfo name2={name} email2={email} phone2={phone} storeEmail2={storeEmail}  storeName2={storeName} storePhone2={storePhone} handleSubmit2={handleSubmit} />
     <hr />
     <br />
     <EducationalInfo schoolName1={schoolName} titleOfStudy1={titleOfStudy} dateOfStudy1={dateOfStudy} dateOfFinish1={dateOfFinish} schoolNameSetting1={schoolNameSetting} titleOfStudySetting1={titleOfStudySetting} dateOfStudySetting1={dateOfStudySetting} dateOfFinishSetting1={dateOfFinishSetting} preventSubmit1={preventSubmit}/>
     <hr />
     <br />
     <PracticalInfo preventSubmit3={preventSubmit} companyName3={companyName} setCompanyNamefun3={setCompanyNamefun} positionTitle3={positionTitle} setPositionTitlefun3={setPositionTitlefun} jobDescription3={jobDescription} setJobDescriptionfun3={setJobDescriptionfun} />
     <hr />
    </div>
    <div className='card2'>
      <div className='personal'>
          <h3>Name: <span>{name}</span></h3>
          <h3>Email:<span> {email}</span></h3>
          <h3>Phone:<span> {phone}</span></h3>
      </div>
      <br />
      <br />
      <br />
      
      <div className='educational'>
        <h3>School Name:<span>{schoolName}</span></h3>
        <h3>Title of Study:<span>{titleOfStudy}</span></h3>
        <h3>Date of Study: <span>{dateOfStudy}</span></h3>
        <h3>Date of Finish:<span>{dateOfFinish}</span></h3>
        
      </div>
     
      <br />
      <br />
      <div className='practical'>
        <h3>Company Name:<span> {companyName}</span></h3>
        <h3>Position Title:<span> {positionTitle}</span></h3>
        <h3>Job Description: <span>{jobDescription}</span></h3>
        
      </div>

    </div>
   </div>
  )
}


