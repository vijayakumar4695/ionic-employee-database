import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  bind:any;
  erase:any;
  d:any;
  constructor(private dataservice:DataService, private  navController: NavController) { }

  ngOnInit() {
    this.get();
  }
  get(){
    this.dataservice.getData().subscribe(res=>{
      this.bind=res;
      console.log(res)
    })
  }
  del(value){
    this.dataservice.del(value.id).subscribe(res=>{
      this.d=res;
      this.get();
      swal("Deleted Successfull!");
    })
    this.erase=value
    console.log(value.id)
  }
  YourFancyButton(){
    this.navController.navigateBack('/home');
    }
}
