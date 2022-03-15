import { Component, Input, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  status = "formulario no enviado";
  defaultName = "";
  displayPassword = false;
  lightStatus = "RED";
  names = ['Alberto', 'Marta', 'Maria'];
  @Input('parentToChild') messageFromParent;

  email:string;
  nombre:string;

  courses = [];
  errorMessage = "";

  constructor(private courseService : CourseServiceService) { }

  ngOnInit(): void {

    // this.courses = this.courseService.getCourses();
    // console.log(this.courses);

    this.courseService.getCourses().subscribe(data=>this.courses=data,
                                                                error => this.errorMessage = error)
  }

  enviaFormulario(){
    console.log(this.courses)
    console.log(this.email);
    console.log(this.nombre);

    this.status="Formulario enviado";
  }

  defaultForm(){
    this.defaultName = "Hola1";
  }

}
