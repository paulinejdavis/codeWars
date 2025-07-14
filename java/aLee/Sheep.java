package aLee;

public class Sheep {
    public static String countingSheep(int num) {
        StringBuilder sheepNum = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            sheepNum.append(i).append(" sheep...");
        }
        return sheepNum.toString();
    }
}