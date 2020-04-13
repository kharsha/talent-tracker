import * as React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import Button from 'react-bootstrap/Button'
import { CSVLink, CSVDownload } from "react-csv";
import "./styles.css";

 let url = "http://localhost:3001/talents/";
const columns = [
 
 { key: "team", name: "team", value: "Mr" },
  { key: "slnumber", name: "Sl Number", editable: false },
  { key: "technology", name: "Technology", editable: false },
  { key: "overcapabilitylevel", name: "Over Capability Level", editable: true },
  { key: "overallcriticalitylevel", name: "Overall Criticality Level", editable: true },
   { key: "expertsavailable", name: "Experts available", editable: true },
    { key: "expertsrequired", name: "Experts required", editable: true },
     { key: "benchstrength", name: "Bench Strength deficit %", editable: true}
];
const headers = [
  { key: "team", label: "team"},
  { key: "slnumber", label: "Sl Number", editable: false },
  { key: "technology", label: "Capability", editable: false },
  { key: "overcapabilitylevel", label: "Over Capability Level", editable: true },
  { key: "overallcriticalitylevel", label: "Overall Criticality Level", editable: true },
   { key: "expertsavailable", label: "Experts available", editable: true },
    { key: "expertsrequired", label: "Experts required", editable: true },
     { key: "benchstrength", label: "Bench Strength deficit %", editable: true }
];

let rows = [
  { slnumber:1,technology: "Cyber Security", overcapabilitylevel: "2.25", overallcriticalitylevel: "4", expertsavailable:"1",expertsrequired:"6",benchstrength:"83.33",team:"mr"},
  { slnumber:2,technology: "Dev Ops", overcapabilitylevel: "3", overallcriticalitylevel: "4.25", expertsavailable:"2",expertsrequired:"4",benchstrength:"50"},
  { slnumber:3,technology: "DL/ML/ Data Analytics", overcapabilitylevel: "55", overallcriticalitylevel: "55", expertsavailable:"55",expertsrequired:"55",benchstrength:"55"},
  { slnumber:4,technology: "Firmware/Embedded", overcapabilitylevel: "55", overallcriticalitylevel: "55", expertsavailable:"55",expertsrequired:"55",benchstrength:"55"},
  {slnumber:5,technology:"Image processing"},
  {slnumber:6,technology:"Visualization"},
  {slnumber:7,technology:"Cloud technologies"},
  {slnumber:8,technology:"Agile Processes"},
  {slnumber:9,technology:"Full stack Development"},
  {slnumber:10,technology:"S/W Requirements"},
  {slnumber:11,technology:"S/W Design"},
  {slnumber:12,technology:"S/W Coding/Implementation"},
  {slnumber:13,technology:"S/W Testing and Validation"},
  {slnumber:14,technology:"S/W Deployment"},
  {slnumber:15,technology:"S/W Coding/Implementation"},
  {slnumber:16,technology:"SW Robotics"},
  {slnumber:17,technology:"S/W Development"},
  {slnumber:18,technology:"Systems Engineering"},
  {slnumber:19,technology:"Electrical Engineering"},
  {slnumber:20,technology:"Workflow"},
  {slnumber:21,technology:"Life Cycle Management"},
  
  {slnumber:22,technology:"Motion control "},
  {slnumber:23,technology:"Power/RF/Exposure control"},
  {slnumber:24,technology:"Serviceability"},
  {slnumber:25,technology:"Manufacturability"},
  {slnumber:26,technology:"IQ Algorithm "},
  {slnumber:27,technology:"Regulation compliance"}
];

export interface MyProps {
  ModalityId: number;
  //onChange : () =>void;
}

interface tech{
  slnumber:number;
  technology:string;
  overcapabilitylevel:number;
  overallcriticalitylevel:number;
  expertsavailable:number;
  expertsrequired:number;
  team:string;




}

class TechIndex extends React.Component<MyProps>{
  rows1:tech[]=[];
  state = { rows:rows,rows1:[],modalityid: this.props.ModalityId};
  //modalityid =this.props.ModalityId;
 
 constructor(props) {
   super(props);
  // this.props=props;
   //this.state={
    // rows:[]
  // }
  console.log('kiccha');
 }
 componentDidUpdate()
 {
   if(this.state.modalityid == this.props.ModalityId)
   {
     return;
   }
   this.setState({
     modalityid:this.props.ModalityId
   })
   console.log('changed');
   console.log(this.props);
  
fetch(url+this.props.ModalityId).then(resp=>resp.json()).then(data=>{
   let res = data.resources.map(i => {return {...i,team:data.modality}})

console.log(this.state.rows);
//console.log(res2);
 this.setState({
  rows:res
}
 
 );
})
 }
componentDidMount()
{
  console.log('kiccha1');

fetch(url+this.state.modalityid).then(resp=>resp.json()).then(data=>{
   let res = data.resources.map(i => {return {...i,team:data.modality}})
 
 


console.log(this.state.rows);
//console.log(res2);
 this.setState({
  rows:res
}
 
 );
})

//Options 2
this.getFullDate();

}

savedata=()=>
{
 
  fetch(url+this.state.modalityid, {
  method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: this.state.modalityid,
    modality: this.state.rows[0].team,
    resources: this.state.rows,
  })
})
alert('Data Saved Sucessfully!');

  this.getFullDate();
}

getFullDate=()=>
{
    
  
fetch(url).then(resp=>resp.json()).then(data=>{
let res2:tech[]=[];
 for(let i=0;i<data.length;i++)
 {
   let currentItem:any=data[i];
    //console.log(currentItem.resources);
    if(currentItem.resources !== undefined)
   {
  for(let j=0; j< currentItem.resources.length;j++)
   {
   
     //res2 = [...res2.slice(res2.length), {...currentItem.resources[j],team:currentItem.modality}]
     res2.push({...currentItem.resources[j],team:currentItem.modality});
   
   
   }
  }
 }
 this.setState({
 rows1:res2
}
 
 );
});
}
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
     this.setState(state => {
      const rows = this.state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
   
      return { rows };

    });
    this.getFullDate();
  };
  render() {
   
    return (

      <div className="techindex">
       
      <ReactDataGrid 
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={this.state.rows.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
        className="harsha"
        minHeight="500px"
      />
     
      <Button className="button" onClick={()=>{this.savedata();}}> Save </Button>  

       <CSVLink data={this.state.rows1} headers={headers} filename={"tech-Capability.xls"} className="btn btn-primary" target="_blank"
    

  

 
>
  Download Data
</CSVLink>
      </div>
    );
  }
}

export default TechIndex;
