
const DescriptionPopUp=(props)=>{
    const {type, file, message, name, title, version} = props.data;
    return(
        <div className="popup">
            <div className="overlay"></div>
            <div className="overlay-content">
                <div className="close-btn" onClick={props.togglePopup}>&times;</div>
                <div className="student-info">
                    <p>Name : {name}</p>
                    <p>Message : {message}</p>
                    <p>Type : {type}</p>
                    <p>Title : {title}</p>
                    <p>Version : {version}</p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPopUp;