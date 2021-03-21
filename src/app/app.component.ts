import { Component, OnInit } from '@angular/core';


type user = { 
  userName: string,
  userId: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  users:user[] = [];
  constructor(){}
  ngOnInit(): void {
    this.reset();
  }

  // Assigning Initial Data.
  reset(){
    this.users = [
      { userName: "Ali", userId:1 },
      { userName: "Tarik", userId:2 },
      { userName: "Defne", userId:3 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
    ]
  }

  // adding a user to current array
  case1(){
    this.users.push({userName:"pushUser",userId:6})
  }

  // assigning same array with new reference
  case2(){
    this.users = [
      { userName: "Ali", userId:1 },
      { userName: "Tarik", userId:2 },
      { userName: "Defne", userId:3 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
    ];
  }

  // assigning new Array with a additional value.
  case3(){
    this.users = [
      { userName: "Ali", userId:1 },
      { userName: "Tarik", userId:2 },
      { userName: "Defne", userId:3 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
      { userName: "Berk", userId:6 },
    ];
  }

  // assigning new Array with shaked values.
  case4(){
    this.users = [
      { userName: "Ali", userId:1 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
      { userName: "Tarik", userId:2 },
      { userName: "Defne", userId:3 },
    ];
  }

  // assigning new Array with new value which is currently exist in older array. 
  case5(){
    this.users = [
      { userName: "Ali", userId:1 },
      { userName: "Tarik", userId:2 },
      { userName: "Defne", userId:3 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
      { userName: "Ali", userId:1 },
    ];
  }
  
  // pushing a value which is currently inside array.
  case6(){
    this.users.push({ userName: "Ali", userId:1 });
  }

  // changing values of users which same id.
  case7(){
    this.users = [
      { userName: "Tarik", userId:1 },
      { userName: "Ali", userId:2 },
      { userName: "Defne", userId:3 },
      { userName: "Fatih", userId:4 },
      { userName: "Erdem", userId:5 },
    ];
  }

  trackBy(index:number,user:user){
    return user.userId;
  }


}
