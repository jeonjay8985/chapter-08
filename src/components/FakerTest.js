// 5000명의 가짜 사용자들을 임의로 생성
import { faker } from '@faker-js/faker';

const bigList=[...Array(5000)].map(()=>({
  name:faker.internet.userName(),
  email:faker.internet.email(),
  avatar:faker.image.avatar()
}))


//JSON 객체 두가지: stringify()-json을 문자열로 바꿔줌
//                 parse()-문자열을 json으로 바꿔줌
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


