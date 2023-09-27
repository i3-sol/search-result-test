import React from "react";
import styled from "styled-components";

const StyledSummary = styled.div`
    padding: 10px 20px 3px 20px;

    div{
        font-size: 20px;
        padding: 10px 0 0px 0;

        a {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    span{
        font-size: 14px !important;
    }

`;

interface SummaryProps {
    schema: string
    description: string
}

const Summary: React.FC<SummaryProps> = ({schema, description}: SummaryProps) => {

    return (
        <StyledSummary>
            <div><a href="#">{schema}</a></div>
            <span>{description}</span>
        </StyledSummary>
    );
}

export default Summary;