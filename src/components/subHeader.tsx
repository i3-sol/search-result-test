import React, { useState, useEffect } from 'react'
import styled from "styled-components";

const StyledSubHeader = styled.div<StyledSubHeaderProps>`
    background-color: ${({ theme }) => theme.color.background.app};
    border-bottom: ${({ theme }) => `1px solid ${theme.color.background.third}`};
    
    @media screen and (max-width: 500px){
        position: ${({isScrollSmall}) => isScrollSmall ? "fixed" : "auto"};
    }

    ul {
        overflow-x: auto;
        padding: 1px 0 12px 190px;
        list-style-type: none;
        display: flex;
        flex-wrap: nowrap;
        margin: 0;
        &::-webkit-scrollbar {
            height: 0px;
        }
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            border-bottom: ${({ theme }) => `1px solid ${theme.color.background.third}`};
            color: ${({ theme }) => theme.color.text.primary};
            background-color: ${({ theme }) => theme.color.background.app};
            border-radius: 20px;
            height: 40px;
            cursor: pointer;
            padding: 4px 12px;
            font-family: Google Sans,Roboto-medium,arial,sans-serif-medium,sans-serif;
            font-size: 14px;
            margin-inline: 4px;
            &:hover {
                box-shadow: ${({ theme }) => theme.color.boxshadow.shadow};
            }
        }
        
        @media screen and (max-width: 1300px) {
            padding: 1px 0 10px 65px;
        }
        @media screen and (max-width: 768px) {
            padding: 10px 10px 10px 10px;
            position: ${({isScrollSmall}) => isScrollSmall ? "fixd" : "auto" }
        }
    }
`;
const keyWords = ['Videos', 'Tutorial', 'Images', 'Download', 'Documentation', 'GitHub', 'W3schools'];

interface StyledSubHeaderProps {
    isScrollSmall: boolean,
}

const SubHeader: React.FC<StyledSubHeaderProps> = ({isScrollSmall}:StyledSubHeaderProps) => {

    return (
        <StyledSubHeader isScrollSmall={isScrollSmall}>
            <ul>
                {
                    keyWords.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </StyledSubHeader>
    );
}

export default SubHeader;