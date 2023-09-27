import React, { useState } from "react";
import styled from "styled-components";

const Question = styled.div<QuestionProps>`
    border-bottom: ${({ theme }) => `1px solid ${theme.color.background.third}`};
    .searchResult {
        display: flex;
        gap: 10px;

        div {
            font-size: 13px;
        }
    }

    >:first-child {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            align-self: center;
        }
    }

    >:last-child {
        height: ${({ isCollapse }) => !isCollapse ? "0" : "auto"};
        overflow: hidden;
        transition: height 0.4s;
        font-size: 15px;
        line-height: 25px;
        padding: 15px, 0;

        
        >:nth-child(2) {
        padding: 15px 0;
        }

        img {
            border-radius: 50%; 
            padding: 4px;
            border: ${({ theme }) => `1px solid ${theme.color.text.link}`};
        }
        .searchFor {
            padding-bottom: 20px;
            border: ${({ isCollapse }) => isCollapse ? "red" : "sdf"}
        }
    }

`;

interface RelatedQuestionProps {
    id: number,
    title: string,
    answer: string,
    imgUrl: string,
    relatedSite: string,
    relatedSiteUrl: string,
    superSite: string,
    arrowIconUp: string,
    arrowIconDown: string,
}
interface QuestionProps {
    isCollapse: boolean,
}
const RelatedQuestion: React.FC<RelatedQuestionProps> = ({ id, title, answer, imgUrl, relatedSite, relatedSiteUrl, superSite, arrowIconUp, arrowIconDown }: RelatedQuestionProps) => {
    const [isCollapse, setisCollapse] = useState<boolean>(false);
    const handleCollapse = () => setisCollapse(!isCollapse);

    return (
        <Question key={id} isCollapse={isCollapse}>
            <div onClick={handleCollapse}>
                <span>{title}</span>
                {isCollapse ? <img src={arrowIconUp} alt="" width={25} height={25} onClick={handleCollapse} />
                    : <img src={arrowIconDown} alt="" width={25} height={25} />}
            </div>
            <div>
                <span>{answer}</span>
                <div>
                    <div className='searchResult'>
                        <div>
                            <img src={imgUrl} alt={imgUrl} width={30} height={30} />
                        </div>
                        <div>
                            <span>{relatedSite}</span>
                            <div>{relatedSiteUrl}</div>
                        </div>
                    </div>
                    <div>
                        <a href='#'>{superSite}</a>
                    </div>
                </div>
                <div className='searchFor'>
                    Search for: {title}
                </div>
            </div>
        </Question>
    );
}

export default RelatedQuestion;