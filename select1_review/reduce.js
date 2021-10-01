export function objToArr(obj) {
    // TODO: objToArr(obj)의 리턴 배열은 arr와 같은 요소를 가지고 있어야 한다.
    const result = [];
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for(let i=0;i<keys.length;i++){
      result.push([])
    }
    for (let i = 0; i < keys.length; i++) {
      result[i][0] = keys[i];
      result[i][1] = values[i];
    }
    return result;
  }
  
  export function arrToObj(arr) {
    // TODO: arrToObj(arr)의 리턴 객체는 obj와 같은 키와 속성을 가지고 있어야 한다.
    return arr.reduce((acc,cur)=>{
      acc[cur[0]]=cur[1]
      return acc
    },{})
  }
  
  export function objArrToArrArr(objArr) {
    // TODO: objArrToArrArr([obj, obj, obj])의 리턴 배열은 [arr, arr, arr]와 같은 요소를 가지고 있어야 한다.
    return objArr.reduce((acc,cur)=>{
      acc.push(objToArr(cur))
      return acc
    },[])
  }
  