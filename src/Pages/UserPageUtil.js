import {Component} from 'react';
import FileView from './FileView.js';

class UserPageUtil extends Component{
	constructor(props){
		super(props);
		this.state={
			id: this.props.id,
			data: "",
			message: ""
		}
	}
	componentDidMount(){
		fetch('https://dockrbin-server.herokuapp.com/url/getUrlData',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
                id: this.props.id
            })
        })
        .then(res=>{
        	if(res.status!==200)
        		throw "damn error";
        	return res.json()}
        	)
        .then(data=>{
        	let s=data.selectedFile;
        	//console.log(s)
        	let i=0;
        	for(;i<30;i++)
        		if(s[i]==='/')
        			break;
        	i++;
        	let j=i;
        	for(;j<40;j++)
        		if(s[j]===';')
        			break;
        	let fileType=s.substring(i,j);
        	this.setState(
			{
				id: this.props.id,
				data: data,
				fileType: fileType,
				message: "",
				//imgSrc: data.selectedFile
			})
        	
        })
        .catch(err=>{
        	this.setState(
			{
				id: this.props.id,
				message: err.message+ "\nPlease verify the URL",
				data: "nothing"
			})
        });
	}
	render(){
		//console.log(this.state.data)
		return(
		  <div>
			{
			  	this.state.data===""?
			  	<h1>Loading . . .</h1>:
			  	this.state.message===""?
			  	<FileView type={this.state.fileType} file={this.state.data.selectedFile} message={this.state.data.message} purpose={this.state.data.purpose} name={this.state.data.name} title={this.state.data.title} version={this.state.data.version}/>:
			  	<h1>{this.state.message}</h1>
			}
		  </div>
		);
	}
}

export default UserPageUtil;