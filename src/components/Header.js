import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <HeaderContainer>
        {/* Left Header */}
        <LeftHeader>
            <img src='/images/google-drive-logo.png' alt='Google Drive'/>
            <span><Link to="/">drive</Link></span>
        </LeftHeader>
        {/* Middle Header */}
        <MiddleHeader>
            <SearchContaier>
                < Icon icon={faMagnifyingGlass} />
                <SearchHeader type='text' placeholder='Search in Drive'/>
            </SearchContaier>
            <div>
                < Icon icon={faCircleQuestion} mask="fa-regular"/>
                < Icon icon={faGear}/>
            </div>
            
        </MiddleHeader>

        {/* Left Header */}
        <RightHeader>
            <Avatar icon={faCircleUser}/>
        </RightHeader>
    </HeaderContainer>
  )
}


const HeaderContainer=styled.header`
  display:flex;
  width:100vw;
  align-items:center;
  justify-content:space-between;
  padding:5px 20px;
  box-sizing:border-box;
  border-bottom:1px solid var(--hover-gray);
  position:fixed;
`; 

const LeftHeader = styled.div`
    flex:.3;
    display:flex;
    align-items:center;
    > img {
        cursor:pointer;
        width:75px;
    }
    > span a {
        text-decoration:none;
        text-transform:capitalize;
        font-size:21px;
        color:var(--dark-gray);
        margin:-5px;
        cursor:pointer;
        transition:var(--main-transition);;
        &:hover{
            opacity:.8;
        }


    }
`;
const MiddleHeader = styled.div`
    flex:.7;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    `;
const SearchContaier = styled.div`
    display:flex;
    align-items:center;
    width:600px;
    padding:0 20px;
    background-color:var(--light-gray);
    border-radius:8px;
   
`;

const Icon = styled(FontAwesomeIcon)`
        padding:10px;
    &:hover{
        background-color:var(--hover-gray);
        border-radius:50%;
    }
   
`;
const SearchHeader = styled.input`
    height:45px;
    background-color:var(--light-gray);
    min-width:550px;
    font-size:16px;
    margin:0 10px;
    border:none;
    outline:none;
`;
//Right Header
const RightHeader = styled.div`
    flex:.3;
    display:flex;
    align-items:center;
`;

const Avatar = styled(FontAwesomeIcon)`

    font-size:30px;
    display:flex;
    margin-left:auto;
    justify-content:flex-end;
    transition:var(--main-transition);
    &:hover{
        opacity:.7;
    }
`;



