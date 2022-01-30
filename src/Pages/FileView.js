import React, { Component } from 'react';
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
/*
import React, { Component } from 'react';

class FileView extends Component {
  render() {
    console.log(this.props)
    const {type, file} = this.props;
    if(type==='pdf')
      return <embed src={file} style="width:600px; height:500px;" frameborder="0"></iframe>
    
  }
}
export default FileView
*/