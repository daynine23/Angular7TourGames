import { Component, OnInit, Inject } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  
     
     constructor(
      private gameService: GameService){}
     
     getGames(): void {
     this.gameService.getGames().subscribe(games => this.games = games);
     }
     selectedGame: Game;
     games: Game[];
     game: Game = {
      id : 1,
      name : 'Minecraft'
    };
     onSelect(game: Game): void {
     this.selectedGame = game;
     }
   
     

  ngOnInit() {
    this.getGames();
    //const dialogRef = this.dialog.open(MessagesComponent, {});
  }

  

}
