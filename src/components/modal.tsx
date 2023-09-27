import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledDetailModal = styled.div`
    position: fixed;
    top: 87px;
    right: 280px;
    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.background.app};
    border-radius: 10px;
    font-family: sans-serif;
    width: 424px;
    height: 664px;
    padding: 12px;
    box-shadow: ${({ theme }) => theme.color.boxshadow.hover};
    z-index: 10;
    @media screen and (max-width: 1481px) {
        right: 150px;
    }

    @media screen and (max-width: 1290px) {
        right: 60px;
    }
    
    .header {
        display: flex;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        justify-content: space-between;
        margin: 6px 0 10px 0px;

        div {
            border: none;
        }
    }

    .subheader {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        span {
            box-shadow: ${({ theme }) => theme.color.boxshadow.shadow};
            padding: 7px 10px;
            border-radius: 40px;
            margin-right: 10px;
        }
    }

    .underline {
        display: flex;
        margin-bottom: 20px;
        span {
            width: 25%;
            height: 2px;
        }
        >:first-child {
            background-color: #4487f6;
        }

        >:nth-child(2) {
            background-color: #219540;
        }

        >:nth-child(3) {
            background-color: #8a4a00;
        }

        >:last-child {
            background-color: #ff7769;
        }
    }

    .underline + div {
        margin-bottom: 7px;
    }

    .cancel {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 14px;
        border-radius: 50%;
        border: ${({ theme }) => `1px solid ${theme.color.background.app}`};
        cursor:pointer;
        
        span {
            background-color: ${({ theme }) => theme.color.background.primary};
        }
    }
    & + span {
        padding-bottom: 10px
    }
    .link {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px 0;
    }

    a {
        font-size: 14px;
        color: ${({ theme }) => theme.color.text.link};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    .result {
        overflow-y: scroll;
        height: 522px;
        &::-webkit-scrollbar {
            width: 0px;
        }
        span {
            font-size: 14px;
        }

        >:last-child {
            padding-inline: 10px;
            line-height: 22px;
            font-size: 14px;
            span {
                display: block;
                margin-bottom: 7px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        top: 400px;
        left: 0;
        right: 0;
        width: 96%;
        .result {
            height: 122px;
        }
    }

`;

const Section = styled.div`
    padding: 12px;
    box-shadow: ${({ theme }) => theme.color.boxshadow.shadow};
    margin: 16px 2px;
    border-radius: 8px;
    
    label {
        font-size: 18px;
        display: block;
        padding-bottom: 10px
    }

    span {
        display: block;
        line-height: 20px;
    }
`;

const Button = styled.div`
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    span {
        padding: 7px 10px;
        box-shadow: ${({ theme }) => theme.color.boxshadow.shadow};
        border-radius: 50px;
    }
`;

interface DetailModalProps {
    imgLaravel: string,
    onCloseModal: any,
    cancelImg: string,
    arrowImg: string,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<DetailModalProps> = ({ imgLaravel, onCloseModal, setIsModal, cancelImg, arrowImg }: DetailModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutSide);

        return () => document.removeEventListener("mousedown", handleClickOutSide)
    }, [setIsModal])

    return (
        <StyledDetailModal ref={modalRef}>
            <div className="header">
                <span>More options</span>
                <div onClick={onCloseModal} className="cancel">
                    <img src={cancelImg} alt="cancel" width={20} height={20} />
                </div>
            </div>
            <div className="subheader">
                <div>
                    <span>Share</span>
                    <span>Save</span>
                    <span>Remove result</span>
                </div>
                <div className="cancel">
                    <img src={arrowImg} alt="arrowImg" width={20} height={20} />
                </div>
            </div>

            <div className="underline">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div >
                <span>About this result</span>
            </div>
            <div className="result">
                <div className="link">
                    <img src={imgLaravel} alt="laravel" width={20} height={20} />
                    <a href="#">https.//laravel.com</a>
                </div>

                <Section>
                    <label>Source</label>
                    <span> Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. <a href="#">Wikipedia</a>
                    </span>

                    <Button><span>More about this page</span></Button>
                </Section>

                <Section>
                    <label>Not personalize</label>
                    <span> A result is only personalized when it seems helpful for you, based on your Google Account activity. <a href="#">Learn more</a>
                    </span>

                    <Button><span>Privacy settings</span></Button>
                    <Button><span>Manage personal results</span></Button>
                </Section>

                <Section>
                    <label>Your search & this result</label>
                    <span>
                        · This search term appears in the result: laravel
                    </span>
                    <span>
                        · Other websites with your search terms link to this result
                    </span>
                    <span>
                        · The result is in English
                    </span>
                    <span>
                        · This result seems relevant for searches from many regions, including: United States
                    </span>

                    <Button><span>How Search Works</span></Button>
                    <Button><span>Learn more search tips</span></Button>
                </Section>
                <div>
                    <span>This is a search result, not an ad. Only ads are paid, and they'll always be labeled with "Sponsord" or "Ad"</span>
                    <a href="#">Send feedback</a>
                </div>
            </div>
        </StyledDetailModal>
    )
}

export default Modal;