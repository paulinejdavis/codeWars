package aLee;

public class Ghost{
  public static String helloName(final String name){
  // u000d name="dumb";
    if(name == null || name.equals(""))
      return "Hello world!";
    else
      return "Hello my name is " + name;
  }
}