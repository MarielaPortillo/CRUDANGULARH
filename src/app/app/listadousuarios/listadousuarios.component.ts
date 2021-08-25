import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any;
  //usu:any;
  public respuesta:any; 

  
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });
  }
 
  mostraruno(id:number):void{
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
        .subscribe(response=>{
          this.respuesta=response;
        });
  }
  


  eliminar(id:number):void{
    console.log("El id es igual a = "+id);
    this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/'+id)
              .subscribe(response=>{
                alert('Usuario Eliminado');
                window.location.reload();
                this.usuarios=response;
              });
  }

  
  editar(id:number):void{
    console.log("El id es igual a = "+id);
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
              .subscribe(response=>{
                this.respuesta=response;
                
              });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.editar(params.variable)
      
    })
  }

}
