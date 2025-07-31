package codingWars;

public class reverseWords {
        public static String reverseWords(final String original) {
            //if string is empty return as is
            if (original.trim().isEmpty()) return original;

            //split the string by spaces using limit to keep empty strings
            String[] words = original.split(" ", -1);
            //SB to build final result
            StringBuilder stringBuilder = new StringBuilder();

//loop through each or empty string represetning a space
            for (int j = 0; j < words.length; j++) {
                //append reversed word to the result
                String reversedWord = new StringBuilder(words[j]).reverse().toString();
                stringBuilder.append(reversedWord);
                //add a space if its the last word to preserve original spacing
                if (j < words.length - 1) {
                    stringBuilder.append(" ");
                }
//convert result to a string and return
            }
            return stringBuilder.toString();
        }

    public static void main(String[] args) {
        System.out.println(reverseWords("llaC em"));
    }

}

