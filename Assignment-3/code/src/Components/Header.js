
function Header(props) {
  let employee=props.employee;
  return (
    <div className="header">
      <div className="arrow" >
        &#10094;
      </div>
      <div className="name">
        <p>
          <b>{employee.Name}</b>
          <br></br>
          {employee.Id}
        </p>
      </div>
      <div>
        <button onClick={()=>window.print()}>Print</button>
      </div>
    </div>
  );
}
export default Header;
