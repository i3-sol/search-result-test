import React, {useState} from "react";
import styled from "styled-components";

const StyledVideos = styled.div`
    >:first-child {
        display: flex;
        gap: 20px;
        img {
            border-radius: 10px;
        }
        >:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;
            a {
                font-size: 15px;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
            span {
                display: block;
                color: #4d5156;
                font-size: 14px;
            }
        }
    }

    >:last-child {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 10px 0 17px 0;
        >:last-child {
            font-size: 14px;
            font-weight: bold;
            color: #545454;
        }
    }
`;

interface VideoResultProps {
    id: number,
    img: string,
    title: string,
    detail: string,
    date: string,
    subImg: string,
    subTitle: string
}

const VideoResult: React.FC<VideoResultProps> = ({id, img, title, detail, date, subImg, subTitle}: VideoResultProps) => {

    return (
        <StyledVideos key={id}>
            <div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <a href='http:/localhost'>{title}</a>
                    <div>
                        <span>{detail}</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={subImg} alt={subImg} />
                </div>
                <div>{subTitle}</div>
            </div>
        </StyledVideos>
    );
}

export default VideoResult;