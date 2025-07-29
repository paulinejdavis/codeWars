package codingWars;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class VowelMapper {

    public static List<Object> isVow(List<Integer> a) {
        //create a new arraylist
        List<Object> result = new ArrayList<>();
        //loop through input array
        for (int num : a) {
            //switch to check if vowels
            switch (num) {
                case 97:
                    result.add("a");
                    break;
                case 101:
                    result.add("e");
                    break;
                case 105:
                    result.add("i");
                    break;
                case 111:
                    result.add("o");
                    break;
                case 117:
                    result.add("u");
                    break;
                default:
                    result.add(num);
            }
        }
            //return result
            return result;
        }

    public static void main(String[] args) {
        System.out.println(isVow(List.of(97, 101, 105, 111, 117)));
    }

}


