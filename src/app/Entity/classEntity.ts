export class ClassEntity{
        id: number ; 
        userId: number = 4;
        name: string;
        description: string;
        startDate: string;
      constructor(id: number ,
        userId: number ,
        name: string,
        description: string,
        startDate: string){
                this.description=description;
                this.userId=userId;
                this.name=name;
                this.startDate=startDate;
        }

}

