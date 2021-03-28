import { useState } from 'react'

function Form(props) {
    const { handleSubmit } = props;
    const [ name, setName ] = useState('');
    const [ job, setJob ] = useState('');
    
    function changeName(event) {
        setName(event.target.value);
    }
    
    function changeJob(event) {
        setJob(event.target.value);
    }
    
    function submitForm() {
        handleSubmit({ name, job});
        setName('');
        setJob('');
    }
    
 return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={changeName} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={changeJob} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form

