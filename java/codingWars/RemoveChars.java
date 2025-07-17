package codingWars;

public class RemoveChars {

    public static String remove(String str) {
        String result = "";
        for (int i = 1; i < str.length() - 1; i++) {
            result += str.charAt(i);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(remove("eBrightone"));
    }
}
