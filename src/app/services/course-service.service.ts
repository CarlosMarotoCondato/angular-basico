import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCourse } from './course';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  url : string = "assets/data/course.json"

  constructor(private http: HttpClient) { }

  getCourses(): Observable<iCourse[]>{

    return this.http
                .get<iCourse[]>(this.url)
                .pipe(
                  catchError(this.errorHandler)
                )

  };

  errorHandler(error : HttpErrorResponse){
    return observableThrowError(error.message)
  }
}
