import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { BehaviorSubject } from 'rxjs';


export class Message {
  constructor(public content :string , public sentBy : string)
      {
        
      }

}

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {

  readonly token = "195a70973cbd48cfa8916fc64750b935";
  readonly client = new ApiAiClient({accessToken:this.token});
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}

converse(msg : string)
{
  const userMessage = new Message(msg,'user');
  console.log(userMessage)
  return this.client.textRequest(msg).then(result=>{
    const speech =result.result.fulfillment.speech;
    const botMessage = new Message(speech,'bot');
    console.log(botMessage)
    
  })
}
}
