import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any;

  constructor(private http:HttpClient, private route:ActivatedRoute) { 
   
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response; 
    });
  }
 
  

  enviarPos():void{

    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar',this.usuario)
    .subscribe(response=>{
      console.log(response);
      this.usuario = {} as estudiante;
       window.location.reload();
       this.usuarios=response;
    });
  }

  editar(id:number):void{
    console.log("El id es igual a = "+id);
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
              .subscribe(response=>{
                this.usuario=response;
              });
  }
  eliminar(id:number):void{
    console.log("El id es igual a = "+id);
    this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/'+id)
              .subscribe(response=>{
                alert('Usuario Eliminado');
                window.location.reload();
                
              });
  }
  
//prueba rutas

  ngOnInit(): void {
  
  }

}