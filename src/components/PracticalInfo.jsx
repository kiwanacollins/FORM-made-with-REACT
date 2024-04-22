import PropTypes from 'prop-types';
export default function PracticalInfo({preventSubmit3, companyName3, setCompanyNamefun3, positionTitle3, setPositionTitlefun3, jobDescription3, setJobDescriptionfun3}) {
 PracticalInfo.propTypes = {
    preventSubmit3: PropTypes.func.isRequired,
    companyName3: PropTypes.string.isRequired,
    setCompanyNamefun3: PropTypes.func.isRequired,
    positionTitle3: PropTypes.string.isRequired,
    setPositionTitlefun3: PropTypes.func.isRequired,
    jobDescription3: PropTypes.string.isRequired,
    setJobDescriptionfun3: PropTypes.func.isRequired
  }

    return (
      <div>
      <p>Practical Information</p>
        <form onSubmit={preventSubmit3}>
          <label>Company name:</label>
          <input type="text" value={companyName3} onChange={setCompanyNamefun3}/>

          <label>Position title:</label>
          <input type="text" value={positionTitle3} onChange={setPositionTitlefun3}/> <br />
          <label>Job description</label>
          <input type="text" value={jobDescription3} onChange={setJobDescriptionfun3}/>
          <button type="submit">Submit</button> <br />
          <button type="button">Hide Section</button>
        </form>
      </div>
    )
  }
  