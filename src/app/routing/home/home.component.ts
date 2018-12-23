import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
//import { combineLatest } from 'rxjs/add/observable'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private userId = 0;

  constructor(private route: ActivatedRoute) {
    this.userId = route.paramMap['id'];
   }


  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.fakeUsers;
        //return this.service.getAll();
      })
    )
    .subscribe(followers => {

      //this.followers = followers;

      //----------------------------------
      //let id = combine[0].get('id');
      //let page = combine[1].get('page');

      //this.service.getAll({id:id, page:page});
    });

    //Query string
    console.log(this.route.snapshot.queryParamMap.get('page'));
    this.route.queryParamMap
    .subscribe(queryParam => {
      console.log(queryParam);
      let page = +queryParam.get('page');
    });

    //Get value from url route
    console.log(this.route.snapshot.paramMap.get('userid'));
    this.route.paramMap
    .subscribe(params => {
      console.log(params);
      this.userId = +params.get('userid');
      //here + use for convert string to number
    });
  }


  private  fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];

}
