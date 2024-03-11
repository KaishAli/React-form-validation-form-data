1. Simple  for Loop 
for (let index = 0; index < 5; index++) {
console.log("Hello");  
}


2. to reverse a string in javascript using for loop

  var string = prompt("enter String");
  var strinLeng = string.length;
  var tempString = ""
  for (let i = strinLeng - 1; i >= 0; i--) {
    tempString += string[i]
    console.log(tempString);
  }



3. To reverse a array in javascript using for loop

  var arrr = [1, 2, 3, 4, 5];
  var arrLen = arrr.length;
  var tempArr = ""
  for (let i = arrLen - 1; i >= 0; i--) {
    tempArr += arrr[i]
    console.log(tempArr);
  }
 
4. To find max value in an array in javascript using for loop =>
  var array = [1, 2, 3, 4, 5, 6, 88];
  var arrLen = array.length;
  var maxNumber = array[0];
  for (let i = 0; i < arrLen; i++) {
    const oringnalArr = array[i]
    if (oringnalArr > maxNumber) {
      maxNumber = oringnalArr;
    }
  }
  console.log(maxNumber);

5. Remove Duplicates from an Array: Write a function that removes duplicate elements from an array and returns a new array without duplicates. =>
   function UniqueArr(arr) {
    var arrLen = arr.length;

    var foundElem = {};
    var newArr = [];

    for (let i = 0; i < arrLen; i++) {
      let element = arr[i];
      if (!foundElem[element]) {
        newArr.push(element);
        foundElem[element] = true
      }
    }
    return newArr

  }
  var oringNalArr = [1, 2, 3, 5, 3, 4, 1, 6, 2]
  var newUniqueArr = UniqueArr(oringNalArr)
  console.log(newUniqueArr);

6. Print the given string character in double digits "hello"
 function dynamicInput(params) {

    var paramsLen = params.length;
    var repeated = "";
    var occurence = 3;
    for (let index = 0; index < paramsLen; index++) {
      var word = ""
      for (let j = 0; j < occurence; j++) {
        var element1 = params[index];
        word += element1;

      }
    var abc =   repeated += word;
    
    }
    console.log(abc);
    return repeated

  }
  var str = "Hello"
  dynamicInput(str);

7. Reverse sentence word ..

  function ReverserSentence(sentence) {
    return sentence.split(" ").map(word => word.split('').reverse().join('')).join(' ');
  }
  const oringinalSentence = 'Hello World! This is me';
  const ReverserSentenceResult = ReverserSentence(oringinalSentence)
  console.log(ReverserSentenceResult);

8. Second Largest Element Find.
  var dummyArray = [1, 2, 6, 4, 5, 7];
  const largestElement = (arr) => {
    var largestVal = Math.max(...arr);
    var index = arr.indexOf(largestVal)
    console.log(arr.splice(index, 1));
    arr.splice(index, 1)
    var secondLargest = Math.max(...arr);
    return secondLargest
  }
  console.log(largestElement(dummyArray));
