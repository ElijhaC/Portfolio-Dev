public static String getInputFromScanner(int currentYear){
    Scanner scan = new Scanner(System.in);

    System.out.println("Hi, What's your name? ");
    String name = scan.nextLine();

    System.out.println("H1 " + name + ", Thanks for taking the course!");

    System.out.println("What year were you born? ");
    boolean validDob = false;
    int age = 0;

    do {
        System.out.println("Enter a year of birth >= " + (currentYear - 125) + " and <= " + (currentYear));
        age = checkData(currentYear, scan.nextLine());
        validDob = age < 0 ? false : true;
    } while (!validDob);

    return "So you are " + age + " years old";
}

public static int checkData(int currentYear, String dateOfBirth){
    int dob = Integer.parseInt(dateOfBirth);
    int minYear = currentYear - 125;

    if((dob < minYear) || (dob > currentYear)){
        return -1;
    }
    return (currentYear - dob);
}
