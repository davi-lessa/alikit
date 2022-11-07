import React from 'react';

import { Container } from './styles';

interface Props{
  children: any;
}

const Skeleton: React.FC<Props> = ({children}) => {
  return <Container>{children}</Container>
}

export default Skeleton