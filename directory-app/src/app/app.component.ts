import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pencil Store';
  myBike = {
    merk : "Yamaha",
    type : "Aerox"
  };

  onYell(e) {
    alert(e);
    console.log(e);
  }
}
