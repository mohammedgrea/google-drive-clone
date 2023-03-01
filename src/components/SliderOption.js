import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components/macro'
export default function SliderOption({icon,option}) {
  return (
    <SliderOptionContainer>
        <Option>
            <SideBarIcon icon={icon} />
            <span>{option}</span>
        </Option>
    </SliderOptionContainer>
  )
}


const SliderOptionContainer=styled.div`
    margin:5px 0;
    
`;
const Option=styled.div`
    display:flex;
    align-items:center;
    padding-left:33px;
    height:40px;
    border-radius:0 20px 20px 0;
    transition:var(--main-transition);
    &:hover{
        background-color:var(--light-gray);   
    }
    > span{
        font-size:13px;
        color:var(--dark-gray);
        font-weight:bold;
        text-transform:capitalize;
        margin-left:20px;
    }
`;
const SideBarIcon=styled(FontAwesomeIcon)`
    font-size:20px;
`;
