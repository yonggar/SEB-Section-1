let peopleList = [{
    firstName: 'Potter',
    lastName: 'Harry',
    age: 15,
    role: 'student'
  },
  {
    firstName: 'Dumbledore',
    lastName: 'Albus',
    age: 92,
    role: 'principal'
  }
]

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function test4(array) {
  for(let i=0;i<array.length;i++){
    const li=document.createElement('li')
    const a=document.createElement('a')
    a.classList.add('name')
    const div=document.createElement('div')
    div.classList.add('age')
    document.querySelector("#container").append(li)
    document.querySelectorAll('li')[i].append(a)
    document.querySelectorAll('li')[i].append(div)
    document.querySelectorAll('.name')[i].textContent=array[i].firstName+' '+array[i].lastName
    document.querySelectorAll('.name')[i].onclick=function(){printRole(array[i])}
    // document.querySelectorAll('.name')[i].setAttribute('onclick',printRole(array[i]))
    document.querySelectorAll('.age')[i].textContent=array[i].age
  }
}

// // test4 함수 작성을 완료한 뒤에 아래 주석을 풀어 실행해 봅니다
test4(peopleList)
