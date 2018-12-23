import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
    .glyphicon{
      color: green;
    }
    
  .glyphicon-star {
    background: black;
  }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
  //shadow DOM apply css to specific scope
})


export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite:boolean;
  //is-favorite is a alias

  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs{
  newValue: boolean;
}