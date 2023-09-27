import React from "react"
import { Search } from "react-router-dom";
import styled from "styled-components";

const StyledSearches = styled.div`
    box-sizing: border-box;
    display: flex;
    align-self: center;
    width: 45%;
    background-color: ${({theme}) => theme.color.background.secondly};
    padding: 16px 30px 12px 30px;
    border-radius: 50px;
    margin: 10px 10px 10px 0;
    justify-self: center;
    gap: 15px;

    >:first-child {
        align-self: center;
    }

    &:hover {
        background-color: ${({theme}) => theme.color.background.third};
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 664px) {
        width: 45%;
    }

    @media screen and (max-width: 464px) {
        width: 100%;
    }
`;

interface SearchKeywordProps {
    img: string,
    title: string,
}
const SearchKeyword: React.FC<SearchKeywordProps> = ({img, title}: SearchKeywordProps) => {

    return (
        <StyledSearches>
            <div>
                <img src={img} alt={img} width={20} height={20} />
            </div>
            <div>{title}</div>
        </StyledSearches>
    );

}

export default SearchKeyword