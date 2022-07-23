1/How Much is True
const countTrue = r => r.filter(Boolean).length
2/Ageing the Population
const afterNYears = (list, n) => {
	for (let person in list) list[person] += Math.abs(n);
	return list;
}
3/Get Sum of Peopl's
function getAbsSum(arr){
  return arr.reduce((count, num) => count + Math.abs(num), 0)
}
4/Print Levels
function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}
5/International Greetings
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	return GUEST_LIST[name]?`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`:"Hi! I'm a guest.";
}
6/Area of Triangle
function isSameNum(num1, num2) {
	if(num1 === num2){
        return true
    }else{
        return false
    }
}
7/Convert key
function inkLevels(inks) {
	return Math.min(...Object.values(inks));
}
8/Absolute Sum
const getBudgets = arr => arr.reduce((a,v) => a + v.budget, 0);
9/
for (let person in list) list[person] += Math.abs(n);
	return list;
10/
const countTrue = r => r.filter(Boolean).length
