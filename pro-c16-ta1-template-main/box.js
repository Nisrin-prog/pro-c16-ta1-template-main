class Box{
    //Define the properties of the object
    //constructor is the default method
    // as soon as u create an object , constructor will execute
    // initialise the values to your properties
    constructor(){
      this.w = 50
      this.h = 50
      this.x = 0 
      this.y = 200 
    }
    show(){
      rect (this.x,this.y,this.w,this.h)
    }
    speed1(y){
      this.x = this.x+y
    }
  }