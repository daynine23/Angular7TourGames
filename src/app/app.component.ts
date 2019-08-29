import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GamesComponent } from './games/games.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog
  ){}

  openDialog():void{
    const dialogRef = this.dialog.open(MessagesComponent, {});
    dialogRef.afterClosed().subscribe( res => {
      console.log(res);
    });
  }
  ngOnInit(): void {
    
  }
  title = 'Tours of Games';  
}
