import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus ,faSquareCheck ,faHardDrive,faUserGroup ,faClock, faStar, faTractor, faTrashCan, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import SliderOption from './SliderOption'

export default function SideBar() {
  return (
    <SideBarContainer>
        <AddButton>
            <PlusIcon icon={faPlus} />
            <span>new</span>
        </AddButton>
        <SliderOption icon={faSquareCheck} option="priority"/>
        <SliderOption icon={faHardDrive} option="my drive"/>
        <SliderOption icon={faDesktop} option="computer"/>
        <SliderOption icon={faUserGroup} option="share with me"/>
        <SliderOption icon={faClock} option="recent"/>
        <SliderOption icon={faStar} option="shared"/>
        <SliderOption icon={faTrashCan} option="trash"/>
        <hr/>
        <SliderOption icon={faCloud} option="storage"/>
    </SideBarContainer>

  )
}


const SideBarContainer = styled.div`
        position:fixed;
        top:60px;
        height:100vh;
        width:250px;
        > hr {
            border:1px solid var(--light-gray);
        }
`;

const AddButton = styled.button`
    display:flex;
    align-items:center;
    border:none;
    outline:none;
    background-color:white;
    padding: 10px 33px 10px 20px;
    margin:20px 10px;
    border-radius: 35px;
    box-shadow:1px 1px 3px -2px #000000 , -1px -1px 3px -2px #000000;
    transition:var(--main-transition);

    &:hover{
        background-color:var(--light-gray)
    }

    > span {
        font-size:16px;
        text-transform:capitalize;
        margin-left:15px;
    }
`;

const PlusIcon = styled(FontAwesomeIcon)`
    font-size:30px;
    color:green;
`;