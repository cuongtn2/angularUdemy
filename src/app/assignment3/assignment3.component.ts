import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css'
  // styles: [`
  //   .white{color:white}
  // `]
})
export class Assignment3Component {
  showSecret = false
  Secrets = []
  thoidiemHien = 0
  thoidiemHienHanh=0;
  constructor() {

  }
  onDisplayDetail() {
    this.showSecret =true
    // this.Secrets.push(this.Secrets.length + 1)
    this.Secrets.push(new Date())

  }
  getColor(item:any) {
    return item >=5 ? 'blue' : 'transparent'
  }
  ngAfterContentInit(){
    console.log("Hàm ngAfterContentInit chạy",this.thoidiemHien);
    this.thoidiemHien=Date.now();
  }
  ngAfterContentChecked(){
    console.log("Hàm ngAfterContentChecked chạy");
    this.thoidiemHienHanh=Date.now();
  }
  ngAfterViewInit(){
    console.log("Hàm ngAfterViewInit chạy")
}
}
