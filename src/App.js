import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter } from 'reactstrap';
import React from 'react';



const data= [

  {id: 1, nombreCarrera: "Sistemas computacionales", correoDeCarrera: "Sistmas@rcarbonifera.tecnm.mx", contrasena: "1234"},
  {id: 2, nombreCarrera: "Industrial", correoDeCarrera: "Industrial@rcarbonifera.tecnm.mx", contrasena: "4321"},
  {id: 3, nombreCarrera: "Administración de empresas", correoDeCarrera: "Administracion@rcarbonifera.tecnm.mx", contrasena: "1234"},
];

class App extends React.Component
{
  state={
    d:data,
    form:
    {
      id:"",
      nombreCarrera:"",
      correoDeCarrera:"",
      contrasena:""
    },
    modalInsertar:false,
    modalEditar:false,
    modalEliminar:false,
  };

  handlechange=e=>
  {
    this.setState(
      {
        form:
        {
          ...this.state.form,
          [e.target.name]:e.target.value,
        }
      }
    )
  }
  mostrarInsertar=()=>
  {
    this.setState({modalInsertar:true});
  }
  mostrarEditar=(registro)=>
  {
    this.setState({modalEditar:true,form:registro});
  }
  ocultarInsertar=()=>
  {
    this.setState({modalInsertar:false});
  }
  ocultarEditar=()=>
  {
    this.setState({modalEditar:false});
  }
  insertar=()=>
  {
    var NuevaCarrera={...this.state.form};
    NuevaCarrera.id=this.state.d.length+1;
    var lista=this.state.d;
    lista.push(NuevaCarrera);
    this.setState({d:lista,modalInsertar:false})


  }
  editar=(dato)=>
  {
    
var contador=0;
var lista=this.state.d;
lista.map((registro)=>
{
  if(dato.id==registro.id)
  {
    lista[contador].nombreCarrera=dato.nombreCarrera;
    lista[contador].correoDeCarrera=dato.correoDeCarrera;
    lista[contador].contrasena=dato.contrasena;

  }
  contador=contador+1;


});
this.setState({d:lista,modalEditar:false});
}
eliminar=(dato)=>
{
  
var opcion=window.confirm("Está seguro de eliminar la carrera  "+dato.nombreCarrera);
if(opcion)
{
  var contador=0;
  var lista=this.state.d;
  lista.map((registro)=>
  {
    if(registro.id==dato.id)
    {
      lista.splice(contador,1);

    }
    contador++;
  });
  this.setState({d:lista});
}



}
  render ()
  {
    return (
      <>
      <Container>
        <br></br>
      
     <Button onClick={()=>this.mostrarInsertar()}>Insertar Nueva Carrera</Button>
     <br></br>
     <br></br>
     <Table>
       <thead><tr><th>Id</th>

         <th>Nombre Carrera</th>
         <th>Correo Carrera</th>
         <th>Contraseña Carrera</th>
         <th>Acciones</th></tr>
       </thead>
       <tbody>
         {this.state.d.map((elemento)=>(
       <tr>

         <td>{elemento.id}</td>
         <td>{elemento.nombreCarrera}</td>
         <td>{elemento.correoDeCarrera}</td>
         <td>{elemento.contrasena}</td>
         <td><Button onClick={()=>this.mostrarEditar(elemento)}>Editar</Button>{" "}
         <Button onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
       </tr>
         ))}
       </tbody>

     </Table>
     </Container>

     <Modal isOpen={this.state.modalInsertar} >
       <ModalHeader>
        <div>
          <h1>Insertar Carrera</h1>
        </div>
       </ModalHeader>
<ModalBody>
 

 
  <FormGroup>
  
 
  
    <label>Nombre de la carrera:</label>
    <input className='form-control' name="nombreCarrera"  type="text" onChange={this.handlechange} ></input>


  </FormGroup>
  <FormGroup>
  <label>Correo de la carrera:</label>
    <input className='form-control' name='correoDeCarrera'  type="text" onChange={this.handlechange} ></input>
  </FormGroup>
  <FormGroup>
  <label>Contraseña de la carrera:</label>
    <input className='form-control' name='contrasena'  type="text" onChange={this.handlechange} ></input>
  </FormGroup>
</ModalBody>
<ModalFooter>
  <Button onClick={()=>this.insertar()}>Insertar</Button>
    <Button onClick={()=>this.ocultarInsertar()}>Cancelar</Button>
  </ModalFooter>
     </Modal>

     <Modal isOpen={this.state.modalEditar}>
     <ModalHeader>
        <div>
          <h1>Modificar Carrera</h1>
        </div>
       </ModalHeader>
<ModalBody>
 

 
  <FormGroup>
  
 
    <input className='form-control' name="id"
     value={this.state.form.id}  type="text" ></input>
    <label>Nombre de la carrera:</label>
    <input className='form-control' name="nombreCarrera" value={this.state.form.nombreCarrera}  type="text" onChange={this.handlechange} ></input>


  </FormGroup>
  <FormGroup>
  <label>Correo de la carrera:</label>
    <input className='form-control' name='correoDeCarrera' value={this.state.form.correoDeCarrera}  type="text" onChange={this.handlechange} ></input>
  </FormGroup>
  <FormGroup>
  <label>Contraseña de la carrera:</label>
    <input className='form-control' name='contrasena' value={this.state.form.contrasena}  type="text" onChange={this.handlechange} ></input>
  </FormGroup>
</ModalBody>
<ModalFooter>
  <Button onClick={()=>this.editar(this.state.form)}>Editar</Button>
    <Button onClick={()=>this.ocultarEditar()}>Cancelar</Button>
  </ModalFooter>
     </Modal>

      </>
    )
  }
}


export default App;
