let list = [
    [
      ['firstName', 'Joe'],
      ['age', 42],
      ['gender', 'male'],
    ],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['gender', 'female'],
    ],
    [
      ['lastName', 'Kim'],
      ['age', 40],
      ['gender', 'female'],
    ],
  ];

function test5(arr) {
    //우선 정보를 객체로 만든다.
    arr.map((el)=>{
        const obj={}
        for(let i of el){
            obj[i[0]]=i[1]
        }
        return obj
    })
  }

console.log(test5(list))