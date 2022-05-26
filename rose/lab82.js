class Employeer
{
    constructor(name,lastName,experience,baseSalary)
    {
        this.name=name;
        this.lastName=lastName;
      this.experience=experience;
       this.baseSalary=baseSalary;
    }
  
}

class Depart extends Employeer
{
    GetSalary()
    {
        if( this.experience<5 && this.experience>=2)
        {
            this.earn=(this.baseSalary+200);
            console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
        }
        else if(this.experience>=5) 
      {
        this.earn=((this.baseSalary*1.2)+500);
        console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
      }
     
    }
    return;
}
class Develop extends Depart
{
    constructor( name,lastName,experience,baseSalary,count)
  {
      super(name,lastName,experience,baseSalary);
      this.count=0;
  }
  
   GetSalary1()
  {
      super.GetSalary();
  }
 

 return;
}
 class Design extends Depart
 {
  
  constructor( name,lastName,experience,baseSalary,effcoef)
  {
      super(name,lastName,experience,baseSalary);
      this.effcoef=effcoef;
  }
GetSalary()
{
    if( this.experience<5 && this.experience>=2)
        {
            this.earn=(this.baseSalary+200);
            console.log(this.name+" "+this.lastName+" "+" got " + (this.earn*this.effcoef)+" salary" )
        }
        else if(this.experience>=5)
      {
        this.earn=((this.baseSalary*1.2)+500);
        console.log(this.name+" "+this.lastName+" "+" got " + (this.earn*this.effcoef) +" salary" )
      }
}   
 return;
 
}
class Managers extends Depart
{
    constructor( name,lastName,experience,baseSalary,team,count)
  {
      super(name,lastName,experience,baseSalary);
    this.team= team;
    this.count=count;
  }
  
    GetSalary()
    {
         
        if (this.team >= 10 && this.experience<5 && this.experience>=2) {
            this.earn =(this.baseSalary+200) + 300;
            console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
        } 
        else if (this.team>= 5 && this.experience<5 && this.experience>=2) {
            this.earn(this.baseSalary+200) + 200;
            console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
        }
        else if(this.team >= 10  &&this.experience>=5 )
        {
            this.earn=((this.baseSalary*1.2)+500) + 300;
            console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
        }
        else{
            this.earn=((this.baseSalary*1.2)+500) + 200;
            console.log(this.name+" "+this.lastName+" "+" got " + this.earn +" salary" )
        }
     
       if (this.count > (this.team / 2)) {
           this.earn =  this.earn* 1.1;
        }
    }
    return;
}
let counter=0;
let c=0;
for (let i=0;i<6;i++)
{
    if(i=1)
    {
        let person= new Develop("Vika","Kovalenko",4,1000);
        person.GetSalary1(); 
        counter++;
        c++;
    }
    if(i=2)
    {
        person= new Develop("Fifi","Yeldis",7,1000);
        person.GetSalary1();
        counter++;
        c++;
    }
    if(i=3)
    {
        person= new Develop("Kiril","Kukol",2,1000);
        person.GetSalary1();
        counter++;
        c++;
    }
    if(i=4)
    {
        let person3= new Design("Pavel","Ryseckiy ", 15,1000,0.5);
person3.GetSalary();
        c++;
    }
    if(i=5)
    {
        person3= new Design("Sophia","Crem ", 9,1000,0.2);
        person3.GetSalary();
        c++;
    }
 
  
}
//console.log(counter);
//console.log(c);
let person5= new Managers("Nikita","Gerst ", 7,1000,counter,c);
person5.GetSalary();