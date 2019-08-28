export class UserData {
  public constructor(
    public user_email:string,
    public user_name:string,
    public user_password:string,
    public user_mobile_no:string
  ){}
}

export class resolved{

  public constructor(
     public data:any[],
     public errormessage:string
     ){}
}
