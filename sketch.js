/*
 * @name Input and Button
 * @description Input text and click the button to see it affect the the canvas.
 */
let input,button1,button2,button3 ,greeting;
let img;
let bDraw_button2 = false;
let bDraw_button3 = false;
let text_out;
var button_name = ['風力發電的方便之處','風能台灣發電','通常擺放位子'];
var news = [' what happen ,today']

function setup() {
  // create canvas
  createCanvas(710, 400);
  img = loadImage('News_Image.png'); // Load the image

  input = createInput();
  input.position(20, 65);

  button1 = createButton(button_name[0]);
  button1.position(input.x + input.width, 65);
  button1.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  button2 = createButton(button_name[1]);
  button2.position(400, 65);
  button2.mousePressed(load_image);

  button3 = createButton(button_name[2]);
  button3.position(600, 65);
  button3.mousePressed(load_image_txt);

  text_out = createElement('h3', ' please fill what you want to say');
  greeting.position(300, 5);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  if(bDraw_button2){
          image(img, 0, height / 2, img.width / 2, img.height / 2);
  }
  if(bDraw_button3){
          image(img, 400 , height / 2, img.width / 2, img.height / 2);
  }
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 5; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}

function load_image() {
     bDraw_button2 = true;
}

function load_image_txt() {
     bDraw_button3 = true;
     text_out.html(news);
}
