package aLee;

public class Greeter {
  public static String greet(String name) {
     if(name.equals("Johnny")){
      return "Hello, my love!";
    } else {
    
    return String.format("Hello, %s!", name);
       }
    
    } 
}