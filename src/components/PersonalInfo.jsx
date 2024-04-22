import PropTypes from 'prop-types';
export default function PersonalInfo({name2, email2, phone2, storeName2, storeEmail2, storePhone2, handleSubmit2}) {
  PersonalInfo.propTypes = {
    name2: PropTypes.string.isRequired,
    email2: PropTypes.string.isRequired,
    phone2: PropTypes.string.isRequired,
    storeName2: PropTypes.func.isRequired,
    storeEmail2: PropTypes.func.isRequired,
    storePhone2: PropTypes.func.isRequired,
    handleSubmit2: PropTypes.func.isRequired
  };

  return (
    <div>  
    <p>Personal Information</p>
      <form onSubmit={handleSubmit2}>
        <label>Name:</label>
        <input type="text" value={name2} onChange={storeName2}/>

        <label>Email:</label>
        <input type="email" value={email2} onChange={storeEmail2}/> <br />

        <label>Phone-number:</label>
        <input type="number" value={phone2} onChange={storePhone2}/>

        <button type="submit">Submit</button> <br />
        <button type="button">Hide Section</button>
      </form>
    </div>
  )
}