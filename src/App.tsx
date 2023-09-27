import React, { useState, useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import { Themes } from './styles/themes';
import SearchBar from './components/searchBar';
import SubHeader from './components/subHeader';
import Summary from './components/summary';
import SearchKeyword from './components/searchKeyword';
import VideoResult from './components/videoResult';
import DetailButton from './components/detailButton';
import Modal from './components/modal';
import Logo from "./assets/img/logo.png"
import LaravelIcon from "./assets/img/Laravel.png"
import BacancytechnologyIcon from './assets/img/bacancytechnology.png'
import GithubIcon from './assets/img/github.png'
import WoxroIcon from './assets/img/woxro.png'
import WikiPediaIcon from './assets/img/wikipedia.png'
import Video from './assets/img/video.png'
import SubVideo from './assets/img/subVideo.png'
import ClariontechIcon from './assets/img/clariontechIcon.png'
import SearchIcon from './assets/img/search.png'
import Laravel from './assets/img/Laravel.png'
import Book_1 from './assets/img/book_1.png'
import Book_2 from './assets/img/book_2.png'
import Book_3 from './assets/img/book_3.png'
import Book_4 from './assets/img/book_4.png'
import App_1 from './assets/img/app_1.png'
import App_2 from './assets/img/app_2.png'
import App_3 from './assets/img/app_3.png'
import App_4 from './assets/img/app_4.png'
import User from './assets/img/user.png'
import RelatedQuestion from './components/relatedQuestion';
const Header = styled.div<HeaderProps>`
    padding: 25px 80px 15px 65px;
    background-color: ${({ theme }) => `${theme.color.background.app}`};
    position: ${({ isscrolllarge }) => isscrolllarge ? "fixed" : "auto"};
    left: 0;
    right: 0;
    z-index: 3;
    border-bottom: ${({ isscrolllarge }) => isscrolllarge ? "1px solid" : "none"};
    border-bottom-color: ${({ theme }) => theme.color.background.third};
    >:first-child {
        display:flex;
        justify-content: space-between;
        
        >:first-child {
            display: flex;
            gap: 40px;

            .logoSection {
                margin-top: 8px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        
        &>:first-child {
            padding-bottom: 10px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 25px 15px 15px 10px;

        padding: 25px 15px 15px 10px;
    }

    @media screen and (max-width: 500px) {
        display: ${({ isScrollSmall }) => isScrollSmall ? "none" : "block"};
        
        &>:first-child {
            justify-content: start;
            gap: 130px;
        }
    }
`;

const Tools = styled.div`
    display: flex;
    align-self: center;
    >:first-child, >:nth-child(2) {
        padding-right: 14px;
        justify-self: center;
        align-self: center;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    >:nth-child(3) {
        padding-left: 4px;
        justify-self: center;
        align-self: center;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const MainContent = styled.div`
    background-color: ${({ theme }) => theme.color.background.app};
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    font-family: Google Sans,Roboto,arial,sans-serif;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-inline: 10px;
    }
    @media screen and (max-width: 664px) {
        display: flex;
        flex-direction: column;
    }
`;

const MainResult = styled.div`
    flex: 9;
    margin-right: 5%;
    padding-top: 5px;
    justify-self: end;
    color: ${({ theme }) => theme.color.text.primary};

    a {
        color: ${({ theme }) => theme.color.text.link};
    }
    div + span {
        font-size: 20px;
    }
    label {
        font-size: 22px;
    }

    .summary {
        padding-bottom: 25px;

        >:last-child {
            a {
                padding-left: 20px;
            }
        }
    }
    .title {
        display: flex;
    }
    
`;

const SearchResult = styled.div`
    padding-top: 25px;

    >:first-child {
        display: flex;
        align-items: center;
        >:first-child {
        img {
                border-radius: 50%; 
                padding: 4px;
                border: ${({ theme }) => `1px solid ${theme.color.text.link}`};
            }
            display: flex;
            align-items: center;
            gap: 10px;

            >:first-child {
                padding: 2px 2px 0px 2px;
            }

            >:last-child {
                display: flex;
                flex-direction: column;
                
                span {
                    line-height: 20px;
                    font-size: 14px;
                }
                div {
                    line-height: 20px;
                    font-size: 13px;
                }
            }
        }
        
        >:last-child {
            a {
                display: block;
                font-size: 20px;
                padding: 10px 0px;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }

            span {
                font-size: 15px;
                color: #4d5156;
            }
        }
        
    }
    >:last-child {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    
`;

const SubResult = styled.div`
    padding-left: 20px;
    flex: 6;
    justify-self: start;
    box-sizing: border-box;
    color: #4d5156;
    margin-top: 30px;
    color: ${({ theme }) => theme.color.text.primary};
    a {
        color: ${({ theme }) => theme.color.text.link};
    }
    img {
        border-radius: 5px;
    }
    >:first-child {
        >:first-child {
            .title {
                display: flex;
                align-items: center;
            }
            display: flex;
            justify-content: start;
            gap: 20px;
            margin-bottom: 15px;
            span {
                font-size: 20px;
            }                           
        }
        div + span {
            line-height: 24px;
        }
    }
    >:nth-child(2) {
        font-size: 14px;
        a {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    >:last-child {
        span {
            display: block;
            padding: 10px 0;
            font-size: 14px;
            a {
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const PopularResult = styled.div`
    flex: 6;
    box-sizing: border-box;
    color: #4d5156;
    margin-top: 30px;
    color: ${({ theme }) => theme.color.text.primary};
    span + div {
        display: flex;
        flex-wrap: wrap;
    }

    a {
        color: ${({ theme }) => theme.color.text.link};

    }
    img {
        border-radius: 5px;
        opacity: 0.8;
        &:hover {
            opacity: 1;
        }
    }
    .title {
        display: flex;
    }
    .styledBook {
        display: flex;
        margin: 20px 0 30px 0;
        padding-right: 10px;
        >:first-child {
            height: 120px;
            box-shadow: 0 2px 6px 2px rgb(64 60 67 / 16%);
            border-radius: 6px;
            overflow: hidden;
        }
    }

    .styledApp {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 10px 0 0;
        gap: 5px;
        span {
            font-size: 13px;
        }
        >:first-child {
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius: 8px;
        }
        
    }

    >:first-child >:last-child {
        display: flex;
    }
`;

const VideosResult = styled.div`
    >:first-child {
        display: flex;
        font-size: 20px; 
        line-height: 50px;
    }
    >:last-child {
        display: flex;
        justify-content: center;
        margin: 15px 0;
        
        button {
            text-align: center;
            box-sizing: border-box;
            background-color: ${({ theme }) => theme.color.background.secondly};
            color: ${({ theme }) => theme.color.text.primary};
            border-radius: 50px;
            padding: 10px 10%;
            min-width: 200px;
            border: none;
                &:hover {
                background-color: ${({ theme }) => theme.color.background.third};
                }
            
            }
        &::before {
                content: '';
                border-bottom: ${({ theme }) => `3px solid ${theme.color.background.secondly}`};
                width: 30%;
                height: 17px;
        }
        &::after {
                content: '';
                border-bottom: ${({ theme }) => `3px solid ${theme.color.background.secondly}`};
                width: 30%;
                height: 17px;
        }
    }
`;

const SearchKeywords = styled.div`
    >:first-child {
        font-size: 20px; 
        line-height: 50px;
    }

    >:last-child {
        display: flex;
        flex-wrap: wrap;
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    padding: 20px;
    background-color: ${({ theme }) => theme.color.background.secondly};
    box-shadow: ${({ theme }) => theme.color.boxshadow.shadow};
    z-index: 11;
`;

const summaries = [
    {
        id: 0,
        schema: 'Introduction',
        description: 'Laravel is a web application framework with expressive ...'
    },
    {
        id: 1,
        schema: 'Installation',
        description: 'Installation - Configuration - Sail - ...'
    },

    {
        id: 2,
        schema: 'Laravel Documentation',
        description: 'Laravel is a web application framework with expressive ...'
    },
    {
        id: 3,
        schema: 'Frontend',
        description: 'Laravel is a backend framework that provides all of the features ...'
    },

];

const questionsSearch = [
    {
        id: 0,
        title: 'What is Laravel used for?',
        answer: 'Laravel is PHP web application framework that is used for developing web applications and APIs. It provides a set of tools and features that make it easier for developers to build robust and scalable web applications quickly and efficiently.',
        imgUrl: ClariontechIcon,
        relatedSite: 'clariontech.com',
        relatedSiteUrl: 'https//www.clariontech.com',
        superSite: '10 Reasons Why Laravel Is the Best PHP Framework For 2023',
    },
    {
        id: 1,
        title: 'Which is better PHP or Laravel?',
        answer: 'Core PHP is a traditional tech stack with limited scope for features and efficiency. Laravel, on the other hand, allows you to create high-performing applications even when there is a limited scope of performance for specific features and functionalities.Aug 17, 2023',
        imgUrl: BacancytechnologyIcon,
        relatedSite: 'bacancytechonolgy.com',
        relatedSiteUrl: 'https;//www.bacancytechnology.com',
        superSite: 'Core PHP vs Laravel: The Best Choice for Web Apps in 2023',
    },
    {
        id: 2,
        title: 'Is Laravel still relevant in 2023?',
        answer: 'As 2023 approaches, Laravel development is still among the most widely used web development frameworks for PHP programmers. Since there are frequently issued updates and new features, developers must follow best practices to guarantee their projects are effective, scalable, and maintainable.Feb 23, 2023',
        imgUrl: WoxroIcon,
        relatedSite: 'woxro.com',
        relatedSiteUrl: 'https://woxro.com',
        superSite: 'Expert Insights: The Future of Laravel Development in 2023 - Woxro.com',
    },
    {
        id: 3,
        title: 'Why use Laravel over PHP?',
        answer: 'It reduces the development time and also helps in higher coding efficiency. Of all the frameworks, Laravel can easily handle everything from single database management with the innovative HTML generation. Laravel is enabled with the highly extensive full-stack model that would definitely be helpful for the developers.Jul 24, 2023',
        imgUrl: BacancytechnologyIcon,
        relatedSite: 'bacancytechnology.com',
        relatedSiteUrl: 'https://www/bacancytechnology.com',
        superSite: 'Why Use Laravel to Develop Faster Web-Based Apps in 2023?',
    },
];

const videos = [
    {
        id: 0,
        img: Video,
        title: 'Laravel in 100 Seconds',
        detail: 'YouTub Fireship',
        date: 'Sep 23, 2022',
        subImg: SubVideo,
        subTitle: '4 key monents in this video',
    },
    {
        id: 1,
        img: Video,
        title: 'Laravel From Scratch 2022 | 4+ Hour Course',
        detail: 'YouTub Traversy Media',
        date: 'Apr 26, 2022',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 2,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 3,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 4,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 5,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 6,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 7,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
    {
        id: 8,
        img: Video,
        title: 'Laravel PHP Framework Tutorial...',
        detail: 'YouTube freeCodeCamp org',
        date: 'May 7, 2019',
        subImg: SubVideo,
        subTitle: '25 key moments in this video',
    },
];

const searches = [
    {
        id: 0,
        img: SearchIcon,
        title: 'Laravel tutorial',
    },
    {
        id: 1,
        img: SearchIcon,
        title: 'laravel latest version',
    },
    {
        id: 2,
        img: SearchIcon,
        title: 'laravel documentation',
    },
    {
        id: 3,
        img: SearchIcon,
        title: 'github',
    },
    {
        id: 4,
        img: SearchIcon,
        title: 'laravel 10',
    },
    {
        id: 5,
        img: SearchIcon,
        title: 'laravel 9',
    },
    {
        id: 6,
        img: SearchIcon,
        title: 'laravel version',
    },
    {
        id: 7,
        img: SearchIcon,
        title: 'laravel - w3schools',
    },
];

const books = [
    {
        "id": 1,
        "img": Book_1,
        "name": "Laravel Application..."
    },
    {
        "id": 2,
        "img": Book_2,
        "name": "Laravel Essentials..."
    },
    {
        "id": 3,
        "img": Book_3,
        "name": "Laravel Starter"
    },
    {
        "id": 4,
        "img": Book_4,
        "name": "Getting Started with..."
    }
];

const apps = [
    {
        "id": 1,
        "img": App_1,
        "name": "Composer"
    },
    {
        "id": 2,
        "img": App_2,
        "name": "Bootstrap."
    },
    {
        "id": 3,
        "img": App_3,
        "name": "CodeIgniter"
    },
    {
        "id": 4,
        "img": App_4,
        "name": "XAMPP"
    }
];

interface HeaderProps {
    isscrolllarge: boolean,
    isScrollSmall: boolean,
}

const App: React.FC = () => {
    const [currentTheme, setCurrentTheme] = useState(Themes.dark);
    const screenSize: { small: boolean, large: boolean } = { small: false, large: false };
    const [isScreenChanged, setIsScreenChanged] = useState(screenSize);
    const [isScrollChanged, setIsScrollChanged] = useState<{ small: boolean, large: boolean }>({ small: false, large: false });
    const [isViewAll, setIsViewAll] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollChanged(prevScroll => ({
                ...prevScroll,
                large: window.scrollY >= 150,
            }))
            setIsScrollChanged(prevScroll => ({
                ...prevScroll,
                small: window.scrollY >= 60,
            }))
        };

        window.addEventListener("scroll", handleScroll);

        return window.removeEventListener("Scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScreen = () => {
            setIsScreenChanged(prevIsScreen => ({
                ...prevIsScreen,
                large: window.innerWidth <= 1024,
            }))

            setIsScreenChanged((prevIsScreen) => ({
                ...prevIsScreen,
                small: window.innerWidth <= 664
            }));
        }

        window.addEventListener("resize", handleScreen);

        return () => window.removeEventListener("resize", handleScreen);

    }, []);

    useEffect(() => {
        const handleCloseSidebar = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setIsSidebar(false);
            }
        }

        document.addEventListener("mousedown", handleCloseSidebar);

        return () => document.removeEventListener("mousedown", handleCloseSidebar)
    })

    const toggleTheme = () => {
        currentTheme.name === "dark"
            ? setCurrentTheme(Themes.light)
            : setCurrentTheme(Themes.dark);
    };

    const handleCloseModal = () => {
        setIsModal(false)
    };

    const onOpenModal = () => {
        setIsModal(true)
    };

    const onOpenSidebar = () => {
        setIsSidebar(true);
    };

    const onCloseSidebar = () => {
        setIsSidebar(false);
    };

    return (
        <>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <Header isscrolllarge={isScrollChanged.large} isScrollSmall={isScrollChanged.small}>
                    <div>
                        {
                            isScreenChanged.large && <div onClick={onOpenSidebar}>
                                <img src={currentTheme.images.toggleMenu} alt="hamburger" width={25} height={25} />
                            </div>
                        }

                        <div>
                            <div className="logoSection">
                                <img src={Logo} alt="logo" width={92} height={30} />
                            </div>
                            {!isScreenChanged.large && <SearchBar />}
                        </div>

                        <Tools>
                            <div onClick={toggleTheme}>
                                <img src={currentTheme.images.toggle} alt="dark" />
                            </div>
                            <div>
                                <img src={currentTheme.images.setting} alt="setting" />
                            </div>
                            <div>
                                <img src={User} alt="user" width={40} height={40} />
                            </div>
                        </Tools>
                    </div>
                    {isScreenChanged.large && <SearchBar />}
                </Header>

                <SubHeader isScrollSmall={isScrollChanged.small} />

                <MainContent>
                    <Wrapper>
                        <MainResult>
                            <SearchResult>
                                <div>
                                    <div>
                                        <div>
                                            <img src={LaravelIcon} alt="laravelIcon" width={30} height={30} />
                                        </div>
                                        <div>
                                            <span>Laravel</span>
                                            <div>http://laravel.com</div>
                                        </div>
                                    </div>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>

                                <div>
                                    <a href='#'>Laravel - The PHP Framework For Web Artisans</a>
                                    <span><strong>Laravel</strong> is a web application framework with expressive, elegant syntax. We've already laid the foundation freeing you to create without sweating the small ...</span>
                                </div>
                            </SearchResult>

                            <div className='summary'>
                                <div>
                                    {
                                        summaries.map((summary) => {
                                            return (
                                                <Summary key={summary.id} schema={summary.schema} description={summary.description} />
                                            );
                                        })
                                    }
                                </div>
                                <div>
                                    <a href="#">More results from laravel.com »</a>
                                </div>
                            </div>


                        </MainResult>

                        <SubResult>
                            <div>
                                <div>
                                    <img src={Laravel} alt="laravel" width={50} height={50} />
                                    <div className='title'>
                                        <span>Laravel</span>
                                        <div onClick={onOpenModal}>
                                            <DetailButton moreImg={currentTheme.images.moreDetail} />
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. <a href="#">Wikipedia</a>
                                </span>

                                <div>
                                    <span>
                                        <strong>Initial release date</strong>: June 2011
                                    </span>
                                    <span>
                                        <strong>Programming language</strong>: <a href="#">PHP</a>
                                    </span>
                                    <span>
                                        <strong>Developer</strong>: <a href="#">Taylor Otwell</a>
                                    </span>
                                    <span><strong>License</strong>: <a href="#">MIT License</a></span>
                                    <span><strong>Repository</strong>: <a href="#">github.com</a>/laravel/framework</span>
                                    <span><strong>Stable release</strong>: 10.2.4. / June 2023: 2 months ago</span>
                                </div>
                            </div>
                        </SubResult>
                    </Wrapper>
                </MainContent>
                <MainContent>
                    <Wrapper>
                        <MainResult>
                            <div>
                                <div className='title'>
                                    <label>Questions related to your search</label>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>

                                <div>
                                    {
                                        questionsSearch.map((question) => {
                                            return (
                                                <RelatedQuestion
                                                    id={question.id}
                                                    title={question.title}
                                                    answer={question.answer}
                                                    imgUrl={question.imgUrl}
                                                    relatedSite={question.relatedSite}
                                                    relatedSiteUrl={question.relatedSiteUrl}
                                                    superSite={question.superSite}
                                                    arrowIconUp={currentTheme.images.arrowUp}
                                                    arrowIconDown={currentTheme.images.arrowDown}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {isScreenChanged.small &&
                                <PopularResult>
                                    <div>
                                        <div className='title'>
                                            <span>Books On Laravel</span>
                                            <div onClick={onOpenModal}>
                                                <DetailButton moreImg={currentTheme.images.moreDetail} />
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                books.map((book) => {
                                                    return (
                                                        <div className='styledBook' key={book.id}>
                                                            <div>
                                                                <img src={book.img} alt="book" width={80} height={125} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <span>People also search for</span>
                                        <div>
                                            {
                                                apps.map((app) => {
                                                    return (
                                                        <div className='styledApp' key={app.id}>
                                                            <div>
                                                                <img src={app.img} alt={app.img} width={60} height={60} />
                                                            </div>
                                                            <span>{app.name}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </PopularResult>
                            }
                            <SearchResult>
                                <div>
                                    <div>
                                        <div>
                                            <img src={WikiPediaIcon} alt="wikiPediaIcon" width={30} height={30} />
                                        </div>
                                        <div>
                                            <span>Laravel</span>
                                            <div>http://laravel.com</div>
                                        </div>
                                    </div>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>

                                <div>
                                    <a href='#'>Laravel - The PHP Framework For Web Artisans</a>
                                    <span><strong>Laravel</strong> is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the ...</span>
                                </div>
                            </SearchResult>

                            <VideosResult>
                                <div>
                                    <span>Videos</span>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>
                                {!isViewAll ? (
                                    <>
                                        {videos.slice(0, 3).map((video) => (
                                            <VideoResult
                                                key={video.id}
                                                id={video.id}
                                                img={video.img}
                                                title={video.title}
                                                detail={video.detail}
                                                date={video.date}
                                                subImg={video.subImg}
                                                subTitle={video.subTitle}
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {videos.map((video) => (
                                            <VideoResult
                                                key={video.id}
                                                id={video.id}
                                                img={video.img}
                                                title={video.title}
                                                detail={video.detail}
                                                date={video.date}
                                                subImg={video.subImg}
                                                subTitle={video.subTitle}
                                            />
                                        ))}
                                    </>
                                )}
                                <div>
                                    <button onClick={() => setIsViewAll(!isViewAll)}>{isViewAll ? "View Less" : "View All"}</button>
                                </div>
                            </VideosResult>

                            <SearchResult>
                                <div>
                                    <div>
                                        <div>
                                            <img src={GithubIcon} alt="githubIcon" width={30} height={30} />
                                        </div>
                                        <div>
                                            <span>Wikipedia</span>
                                            <div>http://en.wikipedia.org</div>
                                        </div>
                                    </div>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>

                                <div>
                                    <a href='#'>Laravel - The PHP Framework For Web Artisans</a>
                                </div>
                            </SearchResult>

                            <SearchKeywords>
                                <div className='title'>
                                    <span>Related searches</span>
                                    <div onClick={onOpenModal}>
                                        <DetailButton moreImg={currentTheme.images.moreDetail} />
                                    </div>
                                </div>

                                <div>
                                    {searches.map((search) => {
                                        return (
                                            <SearchKeyword
                                                key={search.id}
                                                img={search.img}
                                                title={search.title}
                                            />
                                        )
                                    })}
                                </div>
                            </SearchKeywords>
                        </MainResult>
                        {!isScreenChanged.small &&
                            <PopularResult>
                                <div>
                                    <span>Books On Laravel</span>
                                    <div>
                                        {
                                            books.map((book) => {
                                                return (
                                                    <div className='styledBook' key={book.id}>
                                                        <div>
                                                            <img src={book.img} alt="" width={80} height={125} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span>People also search for</span>
                                    <div>
                                        {
                                            apps.map((app) => {
                                                return (
                                                    <div className='styledApp' key={app.id}>
                                                        <div>
                                                            <img src={app.img} alt={app.img} width={60} height={60} />
                                                        </div>
                                                        <span>{app.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </PopularResult>
                        }
                    </Wrapper>
                </MainContent>

                {isModal && (
                    <Modal imgLaravel={Laravel} onCloseModal={handleCloseModal} setIsModal={handleCloseModal} arrowImg={currentTheme.images.arrowDown} cancelImg={currentTheme.images.cancelImg} />
                )}

                {isSidebar && (
                    <Sidebar ref={sidebarRef}>
                        <img src={Logo} alt="logo" width={93} height={30} />
                    </Sidebar>
                )}

            </ThemeProvider>
        </>
    );
}

export default App;
