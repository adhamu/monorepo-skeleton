import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import Container from '@layout/Container'

const Header = styled.div`
  background: #f36f02;
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 1;

  a,
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  &:after {
    content: '';
    height: 4px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 65px;
  }
`

export default (): JSX.Element => (
  <Header>
    <Container>
      <Link to="/">
        <h3>App!</h3>
      </Link>
    </Container>
  </Header>
)
