import styled from 'styled-components'

export const Menu = styled.div`

  @media(max-width: 768px){
    position: fixed;
    top: 3rem;
    right: ${props => props.openMenu ? 0 : '-100%'};
    width: 80%;
    height: 100%;
    padding: 2rem;
    background-color: #0e2431;
    transition: .5s;
  } 
`;