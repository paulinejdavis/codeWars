package aLee;

import java.util.List;

public class Thirteeth {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers)
    {
        for (int i = listOfNumbers.size() - 1; i >= 0; i--)
        {
            if (listOfNumbers.get(i)%2 == 0)
            {
                listOfNumbers.remove(i);
            }
        }
        return listOfNumbers;
    }
}