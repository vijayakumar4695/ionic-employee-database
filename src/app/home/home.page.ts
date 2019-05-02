import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public dataservice:DataService, private navCtrl: NavController) { }
  data1:any;
 register(value){
  this.dataservice.adddata(value).then((value)=>{
    this.data1=value;
    swal("Register Successfull!");
    this.navCtrl.navigateBack('/list');
  });
 

   console.log(value)
  }
 customAlertOptions: any = {
  header: 'Gender',
  subHeader: 'Select One',
  translucent: true
};

}
