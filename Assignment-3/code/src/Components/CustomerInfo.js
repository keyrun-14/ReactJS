function CustomerInfo({employee}) {
    return (
        <div className='customer-info'>
        <p> <b>Appointment:</b> {employee.Appointment}</p>
        <p> <b>Email:</b> {employee.Email}</p>
        <p> <b>Phone:</b> {employee.Phone}  </p>
      </div>
    );
}
export default CustomerInfo;