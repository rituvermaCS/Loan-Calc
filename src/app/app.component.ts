import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num : number = 0; 
  e : number = 0;
  public dropDownValue = 0-5;
  title: any;
  f : number = 0;

  SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
  } 

  EMI(){
    switch (this.dropDownValue) {
      case 0:
        this.e = this.num * 12 * ((1+12)^1/(((1+12)^1)-1));
        console.log(this.e);
          break;
      case 1:
        this.e = this.num * 10 * ((1+10)^2/(((1+10)^2)-1));
        console.log(this.e);
          break;
      case 2:
        this.e = this.num * 9 * ((1+9)^3/(((1+9)^3)-1));
        console.log(this.e);
          break;
      case 3:
        this.e = this.num * 8 * ((1+8)^4/(((1+8)^4)-1));
        console.log(this.e);
          break;
      case 4:
        this.e = this.num * 6 * ((1+6)^5/(((1+6)^5)-1));
        console.log(this.e);
          break;
      default:
          console.log("E: Select correct time");
        } 
  let f = this.e;    
  }
}  