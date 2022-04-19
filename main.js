const ulEl = document.querySelector('#list')
let poketmon = [];

loadItems()
  .then(items => {
    return poketmon.push(...items)
  }) 
// document.addEventListener('DOMContentLoaded',()=>{
  
// })

/* 데이터 받아오기 */
async function loadItems(){ 
  return await fetch('./poketmon.json') // fetch()함수로는 데이터를 바로 사용 할 수 없다
    .then(res => res.json()) //json() 으로 json 형태로 변환
    .then(json => json.poketmon)
}

/* forEach */
function showList(val=' '){
  ulEl.innerHTML = ``;
  poketmon.forEach(element => {
    // console.log(element.name)
    if(element.name.includes(val) || element.type.includes(val)){  // includes() 문자열이 특정 문자열을 포함하는지 확인하는 메서드 
      const li = document.createElement('li')
      li.innerHTML = `
        <img src='${element.url}' alt='${element.name}'>
        <p>이름: ${element.name}</p>
        <p>속성: ${element.type}</p>
      `
      ulEl.appendChild(li)
    }
  });

  /* filter */
  // poketmon.filter(element => {
  //   // console.log(element.name)
  //   // if(element.name.includes(val) || element.type.includes(val)){  // includes() 문자열이 특정 문자열을 포함하는지 확인하는 메서드 
  //   if(element.name.indexOf(val) > -1|| element.type.indexOf(val) > -1){ 
  //     const li = document.createElement('li')
  //     li.innerHTML = `
  //       <img src='${element.url}' alt='${element.name}'>
  //       <p>이름: ${element.name}</p>
  //       <p>속성: ${element.type}</p>
  //     `
  //     ulEl.appendChild(li)
  //   }
  // });
  /* map */
  // poketmon.map(element => {
  //   // console.log(element.name)
  //   if(element.name.includes(val) || element.type.includes(val)){  // includes() 문자열이 특정 문자열을 포함하는지 확인하는 메서드 
  //     const li = document.createElement('li')
  //     li.innerHTML = `
  //       <img src='${element.url}' alt='${element.name}'>
  //       <p>이름: ${element.name}</p>
  //       <p>속성: ${element.type}</p>
  //     `
  //     ulEl.appendChild(li)
  //   }
  // });
  
}


// items 를 그냥 push 하면 배열 안에 배열이 들어가서 이중 배열이 되버린다..
// 검색 결과 ... 전개연산자 배열을 풀어서 객체로 반환

const searchBtn = document.querySelector('#search-btn')
const searchInput = document.querySelector('#search')

searchInput.addEventListener('input',(e)=>{
  e.preventDefault();
  const val = searchInput.value;
  if(e.key === 'Enter') {
    showList(val)
  }
  // console.log(val)
  showList(val) //문자열이 검색창으로 들어간다
})
searchBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  const val = searchInput.value;
  showList(val)
})