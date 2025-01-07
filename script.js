//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	getArea(){
		return width * height;
	}
}

class Square extends Animal {
	constructor(side){
		this.side=side;
	}

	getPerimeter(){
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
