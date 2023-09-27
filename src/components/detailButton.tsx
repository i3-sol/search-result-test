import React from "react";
import styled from "styled-components";

interface DetailButtonProps {
    moreImg: string
}

const StyledDetailButton = styled.div`
    margin-left: 7px;
    align-self: center;
    cursor: pointer;
`;

const DetailButton: React.FC<DetailButtonProps> = ({ moreImg }: DetailButtonProps) => {

    return (
        <StyledDetailButton>
            <img src={moreImg} alt="DetailButton" width={15} height={15} />
        </StyledDetailButton>
    );
}

export default DetailButton;