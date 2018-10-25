import { Component, OnInit } from '@angular/core';
import {User} from '../models/users'
 
@Component({
selector: 'app-user-form',
templateUrl: '../register-user/register-user.component.html',
styleUrls: ['../register-user/register-user.component.scss']
})
export class RegisterUserComponent {
 URL = "http://localhost:3000"
model = new User("","","","","","",0)
submitted = false;
 
constructor(){ }


 
onSubmit(){ this.submitted = true;
let theReq = new Request (`${URL}/users`, {
method: "POST", // *GET, POST, PUT, DELETE, etc.
// mode: "cors", // no-cors, cors, *same-origin
// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// credentials: "same-origin", // include, same-origin, *omit
headers: {
"Content-Type": "application/json; charset=utf-8",
// "Content-Type": "application/x-www-form-urlencoded",
},
// redirect: "follow", // manual, *follow, error
// referrer: "no-referrer", // no-referrer, *client
body: this.convertUser() // body data type must match "Content-Type" header
})
fetch(theReq)
.then(response => response.json());
} // parses response to JSON
// .then(function(response) {
// return response.json()
// }).then(function(myJson) {
// console.log(myJson);
// });
 
 
// console.log(this.convertShow)
// return this.convertShow;
// };
ngOnInit(){
}
newUser(){
this.model = new User('','','','','','',0,)
}
convertUser(){
const test = JSON.stringify(this.model);
console.log(test);
 
const newJsonObject=JSON.parse(test)
console.log(newJsonObject);
return test
}
getUsers(){
fetch(`${URL}/users`).then(function(response) {
return response.json()
}).then(function(myJson) {
console.log(myJson);
});
}
}