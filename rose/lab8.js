
var Employee=function (params)
{ 
            this.name = params.name;
           this.surname = params.surname;
        this.years = params.years;
      
            this.base={
                key1:"Імя:"+this.name,
                key2:"Прізвище:"+this.surname,
                key3:"Стаж:"+this.years+ " р."
            }
          
            
       
            this.BaseSalary=1000;

            return this;
        
    }
    var Manag=function(params) 
    {      this.zero = 0;
        this.count = function () {
            this.zero++;
            console.log("Робітник:" + this.zero);

        };
        this.text=function()
        {     
            for(k in this.base)
            {
                console.log(this.base[k]);
            }
        };
        Departament.apply(this,arguments);
        Employee.apply(this,arguments);
       
         this.Developer=function(params)

      {
                
        for(k in this.base)
        {
            console.log(this.base[k]);
        }
       
    
    }
    this.Designer=function(params)
    {
        {     
            for(k in this.base)
            {
                console.log(this.base[k]);
            }
        
        }; 
    }
    this.devel=0;
    this.devel2=0;
    this.shet = function () {
        this.devel++;
        console.log("Number:" + this.devel);
    };

this.shet2 = function () {
    this.devel2++;
    console.log("Number:" + this.devel2);
};
   
return this;
    }


    var Departament=function(params) 
    {
        this.bonus=this.zero;
        this.plus=this.devel;
        this.plus2=this.devel2;
        Employee.apply(this,arguments);
        this.effCoeff=params.effCoeff;
        this.CountedSalary = function () {
           
            if( this.years<5)
            {
                this.earn=(this.BaseSalary+200);
                console.log("Заробітня плата: " + this.earn)
            }
            else
          {
            this.earn=((this.BaseSalary*1.2)+500);
            console.log("Заробітня плата: " + this.earn)
          }
        };
        this.CountedSalaryDesigner = function () {
           
            if(this.years>=2 && this.years<=5)
            {
                this.earn=(this.BaseSalary+200)*this.effCoeff;
                console.log("Заробітня плата: " + this.earn)
            }
            else
          {
            this.earn=((this.BaseSalary*1.2)+500)*this.effCoeff;
            console.log("Заробітня плата: " + this.earn)
          }
        };
        this.CountedSalaryManager=function()
        {
            if(this.plus2<this.plus)
            {
                if( this.years<5&& this.years>=2 && this.bonus>=10)
            {
                this.earn1=((this.BaseSalary+200)+300)*0.1;
              this.earn=((this.BaseSalary+200)+300)+this.earn1;
                console.log("Заробітня плата: " + this.earn)
            }
            if(this.years>=5  && this.bonus>=5 && this.bonus<10)
            {
                this.earn1=((this.BaseSalary+200)+200)*0.1;
                this.earn=((this.BaseSalary+200)+200)+this.earn1;
                console.log("Заробітня плата: " + this.earn)
            }
            if(this.years>=5  && this.bonus>=10)
          {
            this.earn1=(((this.BaseSalary*1.2)+500)+300)*0.1;
            this.earn=((this.BaseSalary*1.2)+500)+300 +this.earn1;
            console.log("Заробітня плата: " + this.earn)
          }
          else
          { this.earn1=(((this.BaseSalary*1.2)+500)+200)*0.1;
            this.earn=((this.BaseSalary*1.2)+500)+200+this.earn1;
            console.log("Заробітня плата: " + this.earn)
          }
            }

            else
            
            {
                if( this.years<5&& this.years>=2 && this.bonus>=10)
            {
                this.earn=(this.BaseSalary+200)+300;
                console.log("Заробітня плата: " + this.earn)
            }
            if(this.years>=5  && this.bonus>=5 && this.bonus<10)
            {
                this.earn=(this.BaseSalary+200)+200;
                console.log("Заробітня плата: " + this.earn)
            }
            if(this.years>=5  && this.bonus>=10)
          {
            this.earn=((this.BaseSalary*1.2)+500)+300;
            console.log("Заробітня плата: " + this.earn)
          }
          else
          {
            this.earn=((this.BaseSalary*1.2)+500)+200;
            console.log("Заробітня плата: " + this.earn)
          }
            }
        }
        this.CountedSalaryManager2=function()
        {
            if(this.plus2<this.plus)
            {
               
          
          if( this.years<5&& this.years>=2 && this.bonus>=10)
          {
              this.earn=(this.BaseSalary+200)+300;
              console.log("Заробітня плата: " + this.earn)
          }
          if(this.years>=5  && this.bonus>=5 && this.bonus<10)
          {
              this.earn=(this.BaseSalary+200)+200;
              console.log("Заробітня плата: " + this.earn)
          }
          if(this.years>=5  && this.bonus>=10)
        {
          this.earn=((this.BaseSalary*1.2)+500)+300;
          console.log("Заробітня плата: " + this.earn)
        }
        else
        {
          this.earn=((this.BaseSalary*1.2)+500)+200;
          console.log("Заробітня плата: " + this.earn)
        }
            }

            else
            
            {
                if( this.years<5&& this.years>=2 && this.bonus>=10)
                {
                    this.earn1=((this.BaseSalary+200)+300)*0.1;
                  this.earn=((this.BaseSalary+200)+300)+this.earn1;
                    console.log("Заробітня плата: " + this.earn)
                }
                if(this.years>=5  && this.bonus>=5 && this.bonus<10)
                {
                    this.earn1=((this.BaseSalary+200)+200)*0.1;
                    this.earn=((this.BaseSalary+200)+200)+this.earn1;
                    console.log("Заробітня плата: " + this.earn)
                }
                if(this.years>=5  && this.bonus>=10)
              {
                this.earn1=(((this.BaseSalary*1.2)+500)+300)*0.1;
                this.earn=((this.BaseSalary*1.2)+500)+300 +this.earn1;
                console.log("Заробітня плата: " + this.earn)
              }
              else
              { this.earn1=(((this.BaseSalary*1.2)+500)+200)*0.1;
                this.earn=((this.BaseSalary*1.2)+500)+200+this.earn1;
                console.log("Заробітня плата: " + this.earn)
              }
            }
        }
        
        return this;
    }
    

  

 //////////////////////////////////////////////////////////
 
   var writte=function()
   {
       console.log("Перша команда під Керивнитсвом 1 Менеджера:") ;
   }
   writte();
 var manag=new Manag({name:"Вікторія",surname:"Скрипник",years:9});
 var writte1=function()
   {
       console.log("/////Developer/////:") ;
   }
   writte1();
 manag.count();
 var employ1= new Manag({name:'Влад',surname:"Демченко ",years: 15 });
 employ1.Developer();
employ1.CountedSalary();
manag.shet();
manag.count();
 var employ2= new Manag({name:'Женя',surname:"Кравченко  ",years:7 });
 employ2.Developer();
 employ2.CountedSalary();
 manag.shet();

 
    
 //////////////////////////////////////////////////////////////////////////////
 var writte2=function()
   {
       console.log("/////Designer/////:") ;
   }
   writte2();
 manag.count();
 var employ11= new Manag({name:'Ангеліна',surname:"Рачковська ",years: 15 ,effCoeff:0.5});
 employ11.Designer();
employ11.CountedSalaryDesigner();
manag.count();
 var employ22= new Manag({name:'Ярослав',surname:"Пупін ",years:7,effCoeff:0.3 });
 employ22.Designer();
 employ22.CountedSalaryDesigner();
 manag.count();
 var employ33= new Manag({name:'Софія',surname:"Саржевська",years:8 ,effCoeff:0.9});
 employ33.Designer();
 employ33.CountedSalaryDesigner();
 manag.count();
 var employ44= new Manag({name:'Алина',surname:"Кононець ",years:4,effCoeff:1 });
 employ44.Designer();
 employ44.CountedSalaryDesigner();
 

 //////////////////////////////////////////////////////////////////
 var writte3=function()
   {
       console.log("Друга команда під Керивнитсвом 2 Менеджера:") ;
   }
   writte3();
 var manag2=new Manag({name:"",surname:"Скрипник",years:9});
 var writte4=function()
   {
       console.log("/////Developer/////:") ;
   }
   writte4();
manag2.count();
 var emplo2= new Manag({name:'Женя',surname:"Демченко ",years:7 });
 emplo2.Developer();
 emplo2.CountedSalary();
 manag2.shet2();
 manag2.count();
 var emplo3= new Manag({name:'Вика',surname:"Демченко ",years:8 });
 emplo3.Developer();
 emplo3.CountedSalary();
 manag2.shet2();
 manag2.count();
 var employ3= new Manag({name:'Вика',surname:"Дробович ",years:8 });
 employ3.Developer();
 employ3.CountedSalary();
 manag2.shet2();
 manag2.count();
 var employ4= new Manag({name:'Соня',surname:"Ткаченко ",years:4 });
 employ4.Developer();
 employ4.CountedSalary();
 manag2.shet2();
 manag2.count();
 var employ5= new Manag({name:'Толя',surname:"Кропивка ",years:2 });
 employ5.Developer();
 employ5.CountedSalary();
 manag2.shet2();
 
    
 //////////////////////////////////////////////////////////////////////////////
 var writte5=function()
   {
       console.log("/////Designer/////:") ;
   }
   writte5();
 manag2.count();
 var employ55= new Manag({name:'Анрей',surname:"Русецький ",years:2,effCoeff:0.6 });
 employ55.Designer();
 employ55.CountedSalaryDesigner();
 var writte7=function()
 {
     console.log("/////Manager 1/////:") ;
 }
 writte7();
 manag.text();
 manag.CountedSalaryManager();
 var writte6=function()
 {
     console.log("/////Manager 2/////:") ;
 }
 writte6();
 manag2.text();
 manag2.CountedSalaryManager2();