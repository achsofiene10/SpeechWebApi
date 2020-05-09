import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class Message {
  constructor(public content :string , public sentBy : string)
      {
        
      }

}

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {


baseURL: string ="https://api.dialogflow.com/v1/query?v=20150910";
token1: string = '195a70973cbd48cfa8916fc64750b935'; // use your token from dialog flow

  constructor(private http: HttpClient){}


converse(msg : string)
{
const data = {
  query: msg,
  lang: 'en',
  sessionId: '12345'
  };
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token1}` });
let options = { headers: headers };
  this.http.post(this.baseURL, data,options ).subscribe(
  res => {
  console.log(res)
  });
  }
}
