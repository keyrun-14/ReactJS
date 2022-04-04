

function ProductList({ employee }) {
    return (
        <div className='product-list'>
            <div>
                <input type="checkbox"></input>
            </div>
            <div>
                <img src={employee.profileImg} alt="profile"></img>
            </div>

            <div>
                <b>KIRAN KUMAR</b>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
            </div>
            <div className="arrow">
                &#10095;
            </div>
        </div>
    )
}
export default ProductList;