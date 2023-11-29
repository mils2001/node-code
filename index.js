
//
    
    //
// 

function sumofall(arr){
    let sum =0;
    for(let a of arr)
    sum += a;
    return sum;
}
console.log(sumofall([300,700,800]))

function sumofnums(arr){
    sum=0;
    for(let a of arr)
    sum +=a;
    return sum;
}
console.log(sumofnums([420,670,890,]))

function sumofvalues(arr){
    sum=0;
    for(let a of arr)
    sum +=a
    return sum;
}
console.log(sumofvalues([1500,800,1000,9000]))
  
   function sumofbudget(arr){
    sum=0;
       for(let a of arr)
       sum+=a;
       return sum;
   }
   console.log(sumofbudget([12000,10000,1000]))

   function sumofapps(arr){
       sum=0
       for(let a of arr)
       sum +=a;
       return sum;
   }
     console.log(sumofapps([4000,9000,8700,6700,5600]))

     const x=45
     const cars= x>76?  'prado': 'benz'

     switch (cars){
        case 'prado':
            console.log('price at 6 million');
            break;
            
        case 'benz':
            console.log('price at 7.5 million');
            break;

        default:
            console.log('no car for sale');
            break;
     }

     var hotels= ['pamana','hilton','shamrock','milan','dockers'];
        console.log(hotels);

        function sumup(arr){
            sum=0
            for(let a of arr)
            sum +=a;
        return sum;
        }
        console.log(sumup([500,600,400,800,700]))


        function sumadd(arr){
            sum=0
            for(let a of arr)
            sum +=a;
            return sum;
        }
        console.log(sumadd([340,500,800,900]))

        const r=52
        const estates=r>45? 'runda':'westlands'

        switch(estates){
            case 'runda':
                console.log('6 Air BNB available');
                break;

            case 'westlands':
                console.log('3 Air BNB available');
                break;

            default:
                console.log('NO Houses Available');
                break;
        } 

          function sumget(arr){
            sum=0
            for(let a of arr)
            sum+=a;
            return sum;
          }
             console.log(sumget([300,7000,4000,9870]))

             //

             function calculate_Rectarea(length,width){
                var Rectarea;

                Rectarea=(length*width);
                console.log("the area of given rectangle is:" +Rectarea);
             }

             calculate_Rectarea(200,780);

             function calculate_Rectperimeter(length,width){
                var Rectperimeter;

                Rectperimeter=(length+width)*2;
                console.log("the perimeter of rectangle is:" +Rectperimeter);
             }
             calculate_Rectperimeter(20,30);


             function calculate_rectperi(length,width){
                var rectperi;
                rectperi=2*(length+width);
                console.log("the perimeter of rectangle:" +rectperi);
             }
             calculate_rectperi(10,6);
             




             const p=30
             const food=p>100? 'pilau':'mokimo'

             switch (food){
                case 'pilau':
                    console.log('sold to male');
                    break;

               case 'mokimo':
                console.log('sold to female')
                break;

                default:
                    console.log('not sold to any');
                    break;
             }
          
             function  calculate_rectaarea(length,width){
                var rectaarea;
                rectaarea=(length*width)
                console.log("The area of the rectangle is," +rectaarea)

             }
             calculate_rectaarea(400,700)

             function  calculate_Rectperimeta(length,width){
                var Rectperimeta;
                Rectperimeta=2*(length+width)
                console.log("The perimeter of rectangle is," +Rectperimeta)
             }
             calculate_Rectperimeta(320,100)
             
             function sumadded(arr){
                sum=0
                for(let a of arr)
                sum +=a;
                return sum;
             }
             console.log(sumadded([960,560,700,450,400]));


             function calculate_rectdarea(length,width){
                var rectdarea;
                rectdarea= 2*(length+width);
                console.log("The area of the rectangle is," +rectdarea);

             }
             calculate_rectdarea(320,70);

             const u=56
             const dates= u>45? "java":"duckinn"

             switch (dates){
                case  "java":
                    console.log("perfomance by sauti sol");
                    break;

                case "duckinn":
                    console.log("perfomance by otile brown");
                    break;

                default:
                    console.log("perfomance by mejja");
                    break;
             }

             function calculate_rectsarea(length,width){
                var rectsarea;
                rectsarea=2*(length+width);
                console.log("The area of the rectangle is," +rectsarea);
             }
             calculate_rectsarea(430,560)

             class stack{
                 constructor(){
                    this.arr=[]
                 }
                 push(element){
                    this.arr.push(element);
                    return this.arr;
                 }
                 pop(){
                    return this.arr.pop();
                 }
                 peek(){
                    return this.arr[this.arr.length]
                 }
             }

             let s=new stack()
             s.push(8)
             s.push(4)
             s.push(16)
             console.log(s.peek());
             console.log(s.pop());
             console.log(s.push());



             function calculate_peritmeter(length,width){
                var peritmeter;
                peritmeter=(length +width)*2
                console.log("The perimeter of rectangle is," +peritmeter);
             }
             calculate_peritmeter(564,340);

             const y=45
             const burger= y>50? 'spiced':'non-spiced';

             switch (burger){
                case 'spiced':
                    console.log('avaiable 220 burgers');
                    break;

                case 'non-spiced':
                    console.log('available 180 burgers');
                    break;

                    default:
                        console.log('only burgers available');
                        break;
             }


const j=35
const football= j>25? 'man u': 'chelsea'

switch(football){
    case 'man u':
        console.log('red card for bruno');
        break;

        case "chelsea":
            console.log('red card for palmer');
            break;

            default:
                console.log('no red for any team');
                break;
}

         function calculate_periseta(length,width){
           var periseta;
           periseta=(length+width)*2
           console.log("The area of the rectangle,"+periseta) 
         }
         calculate_periseta(450,350);


         const h=65
         const saudi= h>51?  'nassr':'al-hilli';

         switch (saudi){
            case 'nassr':
                console.log('christiano scored hattrick');
                break;

        case 'al-hilli':
            console.log('benzema sent off');
            break;

        default:
        console.log('scores still at 3-3');
        break;
         }


         function calculate_rectaperi(length,width){
            var rectaperi;
            rectaperi=(length+width)*2
            console.log("The area of rectangle",+rectaperi);
         }
         calculate_rectaperi(300,780);


         const g=53
         const gates= 60>g? "greatrwall":"midilin";

         switch (gates){
            case "greatrwall":
                console.log("leads to jumia estates");
                break;

            case "midilin":
                console.log("leads to grimton estate");
                break;

            default:
                console.log("main road")
                break;

         }


         const i=3
         const books=i>54? "dragon":"data";
         
            switch(books){
                case "dragon":
                    console.log("this is a multi book");
                    break;
                case "data":
                    console.log("thsi is single book");
                    break;
                default:
                    console.log("no book to be read");
                    break;
            }

            function calculate_peridseta(length,width){
                var peridseta;
                peridseta=(length+width)*2
                console.log("The area of rectangle," +peridseta);
            }
                 calculate_peridseta(560,400);

                 const G=23
                 const movies=G>40? 'taken':'hijacked';

                   switch(movies){
                    case "taken":
                        console.log('movie premiere at 7pm');
                        break;
                    case "hijacked":
                        console.log('movie premieres at 9pm');
                        break;
                    default:
                        console.log('no movie available');
                        break;
                   }
//


    //
         
         //

         const S=65
         const locations=S>70? 'nyali':'palmbeach';

          switch (locations){
            case "nyali":
            console.log('all rooms are boooked');
            break;

            case "palmbeach":
            console.log('4 rooms available');
            break;

            default:
            console.log('no other hotel available');
            break;

          }

        

          function calculate_perisseta(length,width){
            var perisseta;
            perisseta=2*(length+width);
            console.log('The area of a rectangle,'+perisseta);
          }
          calculate_perisseta(500,780);  
          
           
        