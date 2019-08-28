export class Tasksdata {
    public constructor(
        public Id:string,
        public Title:string,
        public Status:string
    ){

    }
}

export class Taskresolved{

  public constructor(
     public data:any[],
     public errormessage:string
     ){}
}
