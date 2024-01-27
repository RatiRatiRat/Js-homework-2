//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.
// Function that takes a callback

// function processNumbers(Num1, Num2, callBack) {
//   const result = Num1 - Num2;
//   callBack(result);
// }

// function handleResult(result) {                //function handleResults vawvdit rogorc callbacks
//   console.log("Result is", result);
// }

// processNumbers(7, 5, handleResult);

//2)
//შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// function isValidUser(username,password) {
//     if (typeof username==='string'&& typeof password==='string') {
//        return username==='' && password ===''
//     }else{
//         console.log('INVALID INPUT TYPE  Both username and password should be strings');
//     }
// }
//   const emptyUser = isValidUser('', ''); //TRUE
//   const nonEmptyUser = isValidUser('user123', 'pass456'); // Daabrunebs FALSE
//   const invalidInput = isValidUser(123, 'password'); //Daabrunebs FALSE

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// let seconds=15;

// function Countdown() {
//     if (seconds>=0) {
//         console.log(`Time is Remaning:${seconds} seconds`); // TEMPLATE LITERALS Viyenebt cvlads gamoxatavs stringad
//         seconds--;
//     } else {
//       clearInterval(timer)
//       console.log("Time is up");
//     }
// }

// const timer =setInterval(Countdown,1500);

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// function calculateAge(birthDate) {
//     // Parse the birthDate string to a Date object
//     const dateofbirth = new Date(birthDate);

//     // Get the current date
//     const currentDate = new Date();

//     // Calculate the difference in years
//     const age = currentDate.getFullYear() - dateofbirth.getFullYear();

//     // Check if the birthday has occurred this year
//     if (
//         currentDate.getMonth() < dateofbirth.getMonth() ||
//         (currentDate.getMonth() === dateofbirth.getMonth() &&
//             currentDate.getDate() < dateofbirth.getDate())
//     ) {

//         return age - 1;
//     } else {

//         return age;
//     }
// }

// const birthDate = "2000-09-01";
// const age = calculateAge(birthDate);
// console.log("Age:", age);




//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!



// function printCurrentDay() {
//    const daysOfWeek=[
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//    ];

//    const currentDate=new Date();
   
//    const currentDayOfWeek= daysOfWeek[currentDate.getDay()];
   
//    console.log("Current day of the week is: " + currentDayOfWeek)
// }

// printCurrentDay();



//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში. 

// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2);  //F(n)=F(n+1)+F(n-2)  sadac F(0)=0 F(1)=1
//     }
//   }
  
//   const result = fibonacci(10);
//   console.log(result); 