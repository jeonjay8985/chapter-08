//FakerTest.js
//5천 명의 가짜 사용자를 임의로 생성
import { faker } from '@faker-js/faker';

const bigList=[...Array(5000)].map(()=>({
  name:faker.internet.userName(),
  email:faker.internet.email(),
  avatar:faker.image.avatar()
}))
//JSON, stringify()-json을 문자열 
//parse()-문자열을 json
export function FakerTest(){
  // console.log(bigList)
  return (
    <div>
      {bigList.map((item)=>(
      <div style={{display:"flex"}}>
        <img src={item.avatar} alt={item.name}
          width={50}/>
        <p>{item.name}-{item.email}</p>
      </div>
      ))}
    </div>
  )
}