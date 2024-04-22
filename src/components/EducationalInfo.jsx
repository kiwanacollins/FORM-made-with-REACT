import PropTypes from 'prop-types';

export default function EducationalInfo({schoolName1, titleOfStudy1, dateOfStudy1, dateOfFinish1, schoolNameSetting1, titleOfStudySetting1, dateOfStudySetting1, dateOfFinishSetting1, preventSubmit1}) {

EducationalInfo.propTypes = {
  schoolName1: PropTypes.string.isRequired,
  titleOfStudy1: PropTypes.string.isRequired,
  dateOfStudy1: PropTypes.string.isRequired,
  dateOfFinish1: PropTypes.string.isRequired,
  schoolNameSetting1: PropTypes.func.isRequired,
  titleOfStudySetting1: PropTypes.func.isRequired,
  dateOfStudySetting1: PropTypes.func.isRequired,
  dateOfFinishSetting1: PropTypes.func.isRequired,
  preventSubmit1: PropTypes.func.isRequired
};
    return (
      <div>
      <p>Education Information</p>
        <form onSubmit={preventSubmit1}>
          <label>School name:</label>
          <input type="text" value={schoolName1} onChange={schoolNameSetting1}/>
  
          <label>Title of study:</label>
          <input type="text" value={titleOfStudy1} onChange={titleOfStudySetting1}/> <br />

          <label>Date of study:</label>
          <input type="date" value={dateOfStudy1} onChange={dateOfStudySetting1}/>

          <label>Date of finish:</label>
          <input type="date" value={dateOfFinish1} onChange={dateOfFinishSetting1}/>

          <button type="submit">Submit</button> <br />
          <button type="button">Hide Section</button>
        </form>
      </div>
    )
  }
  