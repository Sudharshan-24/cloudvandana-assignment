import java.util.Scanner;

class Program {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);

      System.out.print("Enter a sentence: ");
      String sentence = sc.nextLine().toLowerCase();

      System.out.print("Enter a letter: ");
      String letter = sc.next().toLowerCase();

      // System.out.println(sentence);
      // System.out.println(letter);

      if (sentence.indexOf(letter) == -1) {
         System.out.println("The letter does not exist in the sentence.");
      } else {
         String sentencePart = sentence.substring(sentence.indexOf(letter) + 1);
         System.out.println(sentencePart);
      }

      sc.close();
   }
}