import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  constructor() { }

  
  courses = [];

  viewMode='map';

  courseId = 4;

  onAdd(){
    this.courses.push({id:this.courseId, name:'course ' + this.courseId});
    this.courseId ++;
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = 'course '+ course.id + ' updated';
  }

  loadCourses(){
    this.courses = [{id:1, name:'course 1'}, {id:2, name:'course 2'}, {id:3, name:'course 3'}];
  }

  trackCourses(index, course){
    return course? course.id : undefined;
  }

  canSave = true;

  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }

}
