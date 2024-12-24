import java.util.Scanner;

public class salaryCalculator {
  public static void main(String[] args) {
    Scanner inputReader = new Scanner(System.in);

    float salaryValue = inputReader.nextFloat();
    float benefitsValue = inputReader.nextFloat();

    float taxValue = 0;
    if (salaryValue >= 0 && salaryValue <= 1000) {
      taxValue = 0.05F * salaryValue;
    } else if (salaryValue >= 1000.01 && salaryValue <= 2500.00) {
      taxValue = 0.10F * salaryValue;
    } else {
      taxValue = 0.15F * salaryValue;
    }

    float output = salaryValue - taxValue + benefitsValue;
    System.out.println(String.format("%.2f", output));
  }
}
