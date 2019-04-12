import React, {useState} from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  background-color: gray;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Header = () => {
  const [count, setCount] = useState(2)

  return (
    <Background>
      <div onClick={() => setCount(count+1)}>Shared Header - Click Me {count}</div>
    </Background>
  )
}

export default Header