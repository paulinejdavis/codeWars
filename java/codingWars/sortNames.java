package codingWars;

import java.util.*;
import java.util.stream.Collectors;

public class sortNames {

    public static void main(String[] args) {
        String[] array = {"bob", "bob", "alice", "dave"};
        Set<String> set = new HashSet<>(Arrays.asList(array));
        System.out.println(set);

    /*public static List<String> removeDuplicatesAndSort(List<String> names) {
        return new ArrayList<>(new TreeSet<>(names));
    }

    public static void main(String[] args) {
        List<String> names = Arrays.asList("bob", "bob", "alice", "dave");
        List<String> result = removeDuplicatesAndSort(names);
        System.out.println(result);*/
    }
}
