import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
  //usuario:estudiante= {} as estudiante;
  usuarios:any;
//public respuesta:any;
usuario:estudiante= {} as estudiante;
  
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    
  }
 

  
//prueba rutas

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.editar(params.variable)
      
    })
  }

  editar(id:number):void{
    console.log("El id es igual a = "+id);
    this.http.get<estudiante>('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
              .subscribe(response=>{
              
                this.usuario=response;
                

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





}
