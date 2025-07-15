package codingWars;

import java.sql.SQLOutput;

public class Clock{

    public static int Past(int h, int m, int s) {
        return (h  * 3600 + m * 60 + s) * 1000;
    }

    public static void main(String[] args) {
        System.out.println(Past(10,10,10));
    }
}