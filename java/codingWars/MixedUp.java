package codingWars;
import java.util.Arrays;
import java.util.List;
public class MixedUp {
    public int sum(List<?> mixed) {
        //initialise a sum set to 0
        int sum = 0;
        // loop and calculate the sum for each number
        for (Object mix : mixed) {
            //if here to check if mix is an int or a string
            if (mix instanceof String) {
                sum += Integer.parseInt((String) mix);
            } else {
                sum += (Integer) mix;
            }
            //if a string call parseint and if a int then add directly to sum

            //sum += Integer.parseInt(mix.toString());
        }
        //calculate into sum
        return sum;
    }
//    public class MixedSum {
//
//
//        public int sum(List<?> mixed) {
//            int total = 0;
//
//            for (int i = 0; i < mixed.size(); i++) {
//                total += Integer.parseInt(mixed.get(i).toString());
//            }
//            return total;
//        }
//    }

    /*public int sum(List<?> mixed) {
    int total = 0;
    int i = 0;

    while (i < mixed.size()) {
        total += Integer.parseInt(mixed.get(i).toString());
      i++;
    }
		return total;
	}
}*/

    public static void main(String[] args) {

    MixedUp m = new MixedUp();
    List<?> numbers = Arrays.asList(1,2,"3",4,5);
        System.out.println(m.sum(numbers));
    }
}
