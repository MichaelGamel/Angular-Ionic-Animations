import { Component } from '@angular/core';
import { DetailPage } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';
import { myFadeInAnimation } from '../animations/fade-in';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public cards = new Array(10);

  constructor(private modalCtrl: ModalController) {}

  launchDetail(ev) {
    this.modalCtrl
      .create({
        component: DetailPage,
        enterAnimation: myFadeInAnimation,
        componentProps: {
          coords: {
            x: ev.target.x,
            y: ev.target.y
          }
        }
      })
      .then(modal => {
        modal.present();
      });
  }
}
