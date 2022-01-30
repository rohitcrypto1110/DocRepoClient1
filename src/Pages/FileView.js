/*import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';

class FileView extends Component {
  render() {
    console.log(this.props)
    return (
      <FileViewer
        fileType={this.props.type}
        filePath={this.props.file}
        />
    );
  }
}
export default FileView
*/
import React, { Component } from 'react';
import DescriptionPopUp from './DescriptionPopUp.js'

class FileView extends Component {
  constructor(props){
    super(props);
    this.state={
        popup: false
    }
  }
  togglePopup=()=>{
    this.setState({
        popup: !this.state.popup
    })
  }
  render() {
    //console.log(this.props)
    const {type, file, message, name, title, version} = this.props;
    return(
      <div className="fileview">
        <p className="btn" onClick={this.togglePopup}>Know more</p> 
        {
            this.state.popup?
            <DescriptionPopUp togglePopup={this.togglePopup} data={this.props}/>:<div></div>
        }
       {type==='png'?<img src={file}/>:<h2> Can't display file </h2>}
      </div>
    );
  }
}
export default FileView