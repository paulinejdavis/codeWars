package aLee;

class SeaStrings {
    public static String buildString(String... args) {
      return "I like " + String.join(", ", args) + "!";
    }
}