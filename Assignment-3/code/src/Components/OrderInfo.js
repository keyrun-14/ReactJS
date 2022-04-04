function OrderInfo({employee}) {
    return (
        <div className='order-info'>
            <div>
                <p><b>Status</b></p>
                <p>⚫ in process</p>
            </div>
            <div>
                <p><b>Door</b></p>
                <p>Mark</p>
            </div>
            <div>
                <p><b>Time</b></p>
                <p>{employee.Appointment}</p>
            </div>
        </div>
    )
}
export default OrderInfo;