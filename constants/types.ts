export type Emotion = {
    date: Date,
      anger: string[],
      love: string[],
      sadness: string[],
      fear: string[],
      happiness:string[]
  }
  
  export type User = {
    id:number,
  userName:string,
  email:string,
  password:string,
  lang:string,
  isLoggedIn: boolean,
  history:Emotion[]
  
  
    }
    