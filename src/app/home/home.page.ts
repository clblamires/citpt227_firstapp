import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // a constructor is the first function that runs when the app loads (auto)
  constructor(
    public alertCtrl: AlertController,
    public router: Router
  ) {
    this.counter = 0;
  }


  async buttonClicked(){
    var alert = await this.alertCtrl.create({
      header: "Alert",
      message: "You clicked the button!",
      buttons: ['OK']
    });
    await alert.present();
  }

  // properties of the Home Page (variables)
  counter: number;
  username: string;

  increaseCounter(){
    this.counter++;
  }


  gotoAbout(){
    this.router.navigate(['/about']);
  }


  saveName(){
    this.router.navigate(['/name/' + this.username ])
  }

}
