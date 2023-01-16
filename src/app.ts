// // const names: Array<string | number> = []; // string[]
// // // names[0].split(' ')

// // const promise: Promise<string | number> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("This is done!");
// //   }, 2000);
// // });

// // promise.then((data) => {
// //   if (typeof data === "string") data.split(" ");
// // });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "seunghun", hobbies: ["Sports"] }, { age: 30 });
// console.log(mergedObj.age);

// interface Lengthy {
//   length: number;
// }

// function countAndPrint<T extends Lengthy>(el: T): [T, string] {
//   let descriptionText = "Got no value";
//   if (el.length === 1) {
//     descriptionText = "Got " + el.length + " elements";
//   } else if (el.length > 1) {
//     descriptionText = "Got " + el.length + " element";
//   }
//   return [el, descriptionText];
// }

// console.log(countAndPrint(["Sports", "Cooking"]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// extractAndConvert({ name: "seunghun" }, "name");

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
