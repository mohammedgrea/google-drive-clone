import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

export default function Folder({ folderName }) {
  const [isChecked, setIsChecked] = useState(false);
  function checkAction(e) {
    e.stopPropagation();
    setIsChecked(!isChecked);
  }

  return (
    <>
      <FolderContainer onClick={() => setIsChecked(true)} state={isChecked}>
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            checked={isChecked}
            onChange={checkAction}
          />
        </CheckBoxContainer>
        <MediaIcon icon={faFolder} />
        <Title>{folderName}</Title>
      </FolderContainer>
    </>
  );
}

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px;
  border-radius: 50%;
  transition: var(--mainTransition);
  display: none;
  &:hover {
    background-color: var(--mainBgColor);
  }
`;
const MediaIcon = styled(FontAwesomeIcon)`
  color: var(--mainIconColor);
  padding: 10px;
  font-size: 20px;
`;

const FolderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) =>
    props.state ? " var(--activeBgColor)" : "var(--mainDarkBgColor)"};
  border-radius: 8px;
  height: 60px;
  padding-left: 10px;
  transition: var(--mainTransition);

  ${CheckBoxContainer} {
    display: ${(props) => (props.state ? "flex" : "none")};
  }
  ${MediaIcon} {
    display: ${(props) => (props.state ? "none" : "flex")};
  }
  &:hover {
    background-color: ${(props) =>
      props.state ? " var(--activeBgColor)" : "var(--hoverBgColor)"};
  }
  &:hover ${CheckBoxContainer} {
    display: flex;
  }
  &:hover ${MediaIcon} {
    display: none;
  }
`;

const CheckBox = styled.input`
  border-width: 2px;
  border-radius: 2px;
  height: 14px;
  width: 14px;
`;

const Title = styled.div`
  font-weight: lighter;
  color: var(--mainTextColor);
  font-size: 16px;
`;
