import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from '../entidades/estudiante';

@Component({
  selector: 'app-mostraruno',
  templateUrl: './mostraruno.component.html',
  styleUrls: ['./mostraruno.component.css']
})
export class MostrarunoComponent implements OnInit {
  usuario:estudiante= {} as estudiante;
  usuarios:any;
  
  public respuesta:any; 
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
  
    /*http.get('https://frozen-meadow-48728.herokuapp.com/todos')
    .subscribe(response=>{
      this.usuarios=response;
    });*/
  }
 
  mostraruno(id:number):void{
    this.http.get('https://frozen-meadow-48728.herokuapp.com/uno/'+id)
        .subscribe(response=>{
          this.usuarios=response;
         
        });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any)=>{
      const{params}=paramMap

      this.mostraruno(params.variable)
      
    });
  }


}



