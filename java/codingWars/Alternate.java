package codingWars;

public class Alternate {

    public static String toAlternativeString(String string) {
        String newString = "";
        for (char s : string.toCharArray()) {
            if(Character.isUpperCase(s)) {
                newString += Character.toLowerCase(s);
            } else {
                newString += Character.toUpperCase(s);
            }
        }
        return newString;
    }

    public static void main(String[] args) {
        System.out.println(toAlternativeString("heLLo WoRLd!!"));
    }
}
