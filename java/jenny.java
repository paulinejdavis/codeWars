public class Greeter {
  private static final String SPECIAL_GREETING = "Hello, my love!";

  public static String greet(String name) {
    if ("Johnny".equals(name)) {
      return SPECIAL_GREETING;
    } else {
      return String.format("Hello, %s!", name);
    }
  }
}



// public class Greeter {
//   public static String greet(String name) {
    
    
//     if(name.equals("Johnny")){
//       return "Hello, my love!";
      
//       } else {    
//     return String.format("Hello, %s!", name);
    
//     }
//   }
// }