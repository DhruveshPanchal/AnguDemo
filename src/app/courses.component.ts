import {Component} from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    // template: '<h2>{{"Title: " + title}}</h2>'
    //or
    template: `<h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>        
    <img [src]="imageUrl"  title="Property Binding"/>
    <table>
        <tr>
            <td [attr.colspan]="colSpan">Colspan Example: Attribute Binding </td>
        </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    
    //class.active - active is class name - syntax used for dynamically add active class

    <button [style.backgroundColor]="isActive? 'blue': 'white'">Save</button>

    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
    </div>

    <input (keyup)="onKeyUp($event)" />
    Better way in angular on enter key press
    <input (keyup.enter)="onKeyUp()" />
    <br/>
    Template vaiable
    
    <br/>
    Use 2 way binding
    <input [(ngModel)]="email" (keyup.enter)="onKeyUpN()" /><br/>

    pipes <br/>
    {{course.title | uppercase | lowercase}} <br/>
    {{course.student | number}} <br/>
    {{course.rating | number:'2.1-2' }} <br/>
    {{course.price | currency:'AUD': true:'3.2-2'}} <br/>
    {{course.releaseDate |date:'shortDate'}} <br/>

    Custom pipe <br/>
    {{text | summary :10}}

    `
    

})

export class CoursesCompnent{

    title = "List of courses";
    imageUrl = "";
    colSpan = 2;
    isActive = true;

    getTitle(){
        return this.title;
    }

    courses;

    constructor(service: CoursesService){
        // let service = new CoursesService(); -- remove it and add in parameter better way if change counstructor of  service
        this.courses = service.getCourses();
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        $event.stopPropagation(); // this will stop calling div click event (it will not call second handler)
        console.log("Button was clicked", $event);
    }

    onKeyUp($event){
        // if($event.keyCode === 13)  console.log("ENTER was presses");
        //Better way in angular
        console.log("ENTER was presses");
    }
    
    onKeyUpEnter(email){
        // get text box value
        console.log(email);
    }
    
    email = "hy@gmail.com";

    onKeyUpN(){
        console.log(this.email);
    }

    course = {
        title : "The Complete angular couse",
        rating : 4.9745,
        student: 30123,
        price:190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = "Long summary here Long summary here Long summary here Long summary hereLong summary hereLong summary here Long summary here";
}