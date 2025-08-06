package codingWars;

class NonConsecutive {
    static Integer find(final int[] array) {
        for(int i = 1; i < array.length; ++i)
        {
            if(array[i] - array[i - 1] != 1)
            {
                return array[i];
            }
        }
        return null;
    }


    public static void main(String[] args) {
        System.out.println(find(new int[]{1, 2, 3, 4, 6, 7, 8}));
        System.out.println(find(new int[]{1, 2, 3, 4, 5, 6, 7, 8}));
        System.out.println(find(new int[]{4, 5, 6, 7, 8, 9, 11}));
    }
}
