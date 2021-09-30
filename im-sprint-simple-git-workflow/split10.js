///두 개의 수 입력받아 그 사이에 2의 배수 개수를 리턴

function makeMultiplesOfDigit2(num1, num2) {
    let start =num1 //시작숫자
    let end =num2 //끝숫자
    let even = 2 //2의배수
    let count = 0 //2의배수 갯수 세기
    if(num1>num2){
      start = num2
      end = num1
    }
      for(let i=start;i<=end;i+=1){
        if(even<=end){
          even+=2
          count+=1
        }
      return count
    }
  }