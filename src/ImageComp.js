import React from 'react';
import styled from 'styled-components';
import me from './assets/cropped.jpeg'
import me2 from './assets/me.jpeg'

const Image = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(${me2}) center/cover fixed no-repeat;
  display:block;
  align-items:center;
  justify-content:center;
  opacity: 0.8;
  z-index: 0.9;
`

export default () => {
    return <>
      <Image>
      </Image>
    </>
  }