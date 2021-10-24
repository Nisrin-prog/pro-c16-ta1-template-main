var box;
function setup() 
{
  createCanvas(400, 400);
  //creating an object/instance of your class
  // new is the keyword to create an object
  // new keyword should be followed by class name
  box = new Box()
  //dot notation to connect ur object
  console.log(box.w)
  
  box1 = new Box()
  
}

function draw() 
{
  background(220);
  box.show()
  box.speed1(4)

 
  box1.show()
  box1.speed1(2)
}

