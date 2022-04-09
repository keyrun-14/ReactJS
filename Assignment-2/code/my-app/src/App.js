import './App.css';
function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className="main">
      <img src={employee.profileImg}></img>
      <div className='name'>
        <h1>{employee.name}</h1>
      </div>
      <div className='location'>
        <h6>Location</h6>
        <h4>{employee.location}</h4>
      </div>
      <div className='bloodgroup'>
        <h6>Blood group</h6>
        <h4>{employee.bloodGroup}</h4>
      </div>
      <div className='age'>
        <h6>Age</h6>
        <h4>{employee.age}</h4>
      </div>

      </div>
      
      {/* Start your React code here */

      }
    </div>
  )
    }
export default App;
