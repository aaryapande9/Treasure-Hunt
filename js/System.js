class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
  authenticate(ac,ec){
      textSize(20);
      fill("black");
      text(code,300,300);
      if(ac === ec)
          return true;
          else 
              return false;
          
      
  }
    

}
