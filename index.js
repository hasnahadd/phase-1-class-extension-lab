// Your code here
class Polygon{
 constructor (sides){
        this.sides = sides;
    }
    get countSides (){
    return this.sides.length
}
    get perimeter (){
    return this.sides.reduce((pre, acc) => pre + acc, 0)
}

}
class Triangle extends Polygon{
    get isValid (){
        if(this.countSides === 3){
            const [a,b,c] = this.sides;
            return a + b > c && a + c > b && b + c > a; 
        }
        return false
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.countSides === 4){
            const [a,b,c,d] = this.sides;
            return a === b && b === c && c === d;
        }
        return false
    }

    get area(){
      const side = this.sides[0];
      return side * side;
    }
}



