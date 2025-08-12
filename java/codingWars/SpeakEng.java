package codingWars;

public class SpeakEng {

 public static boolean spEng(String sentence){
        return sentence.toLowerCase().contains("english");
    }

    public static void main(String[] args) {
        System.out.println(spEng("english"));
        System.out.println(spEng("lisheng"));
    }

}
