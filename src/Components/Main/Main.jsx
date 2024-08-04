import './Main.scss';
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi";
import {useEffect} from "react";
import Aos from "aos";

const Data = [
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL HISTORICAL',
        fees: '$850',
        description: 'Known as the city of love, Paris is famous for its art, fashion, and landmarks like the Eiffel Tower and Notre-Dame Cathedral.'
    },
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
        destTitle: 'Tokyo',
        location: 'Japan',
        grade: 'CULTURAL TECH',
        fees: '$950',
        description: 'A city that blends tradition and modernity, Tokyo offers historic temples, cutting-edge technology, and unique fashion districts.'
    },
    {
        id: 4,
        imgSrc: 'https://images.pexels.com/photos/442499/pexels-photo-442499.jpeg',
        destTitle: 'New York',
        location: 'USA',
        grade: 'URBAN ADVENTURE',
        fees: '$1200',
        description: 'New York is a bustling metropolis known for its iconic landmarks like Times Square, Central Park, and the Statue of Liberty.'
    },
    {
        id: 5,
        imgSrc: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg',
        destTitle: 'Sydney',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Sydney is known for its Sydney Opera House, Harbour Bridge, and beautiful beaches, making it a top travel destination.'
    },
    {
        id: 6,
        imgSrc: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
        destTitle: 'Rome',
        location: 'Italy',
        grade: 'HISTORICAL CULTURAL',
        fees: '$900',
        description: 'Rome is a city rich in history, featuring ancient ruins like the Colosseum, Roman Forum, and the Vatican City.'
    },
    {
        id: 7,
        imgSrc: 'https://images.pexels.com/photos/1796733/pexels-photo-1796733.jpeg',
        destTitle: 'Dubai',
        location: 'UAE',
        grade: 'LUXURY MODERN',
        fees: '$1500',
        description: 'Dubai is known for its modern architecture, luxury shopping, and vibrant nightlife, highlighted by the Burj Khalifa and Palm Jumeirah.'
    },
    {
        id: 8,
        imgSrc: 'https://images.pexels.com/photos/34639/pexels-photo.jpg',
        destTitle: 'Bangkok',
        location: 'Thailand',
        grade: 'CULTURAL ADVENTURE',
        fees: '$500',
        description: 'Bangkok is famous for its vibrant street life, ornate shrines, and bustling markets, offering a mix of modernity and tradition.'
    },
    {
        id: 9,
        imgSrc: 'https://images.pexels.com/photos/237494/pexels-photo-237494.jpeg',
        destTitle: 'Cape Town',
        location: 'South Africa',
        grade: 'NATURE ADVENTURE',
        fees: '$700',
        description: 'Cape Town is renowned for its stunning landscapes, including Table Mountain and Cape Point, as well as its rich cultural heritage.'
    },
    {
        id: 10,
        imgSrc: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg',
        destTitle: 'Rio de Janeiro',
        location: 'Brazil',
        grade: 'CULTURAL RELAX',
        fees: '$750',
        description: 'Rio de Janeiro is famous for its Carnival festival, Christ the Redeemer statue, and beautiful beaches like Copacabana and Ipanema.'
    },
    {
        id: 11,
        imgSrc: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL HISTORICAL',
        fees: '$700',
        description: 'Barcelona is known for its art and architecture, including landmarks like the Sagrada Família and Park Güell, designed by Gaudí.'
    },
    {
        id: 12,
        imgSrc: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg',
        destTitle: 'Santorini',
        location: 'Greece',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Santorini is famous for its white-washed buildings, stunning sunsets, and crystal-clear waters, making it a top destination for relaxation.'
    },
    {
        id: 13,
        imgSrc: 'https://images.pexels.com/photos/221455/pexels-photo-221455.jpeg',
        destTitle: 'Amsterdam',
        location: 'Netherlands',
        grade: 'CULTURAL ADVENTURE',
        fees: '$650',
        description: 'Amsterdam is known for its canals, historic buildings, and vibrant culture, offering a mix of history and modernity.'
    },
    {
        id: 14,
        imgSrc: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
        destTitle: 'Istanbul',
        location: 'Turkey',
        grade: 'HISTORICAL CULTURAL',
        fees: '$600',
        description: 'Istanbul is a city that bridges Europe and Asia, known for its historic sites like the Hagia Sophia, Blue Mosque, and Grand Bazaar.'
    },
    {
        id: 15,
        imgSrc: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
        destTitle: 'Marrakech',
        location: 'Morocco',
        grade: 'CULTURAL ADVENTURE',
        fees: '$550',
        description: 'Marrakech is famous for its vibrant souks, historic palaces, and beautiful gardens, offering a rich cultural experience.'
    },
    {
        id: 16,
        imgSrc: 'https://images.pexels.com/photos/1429964/pexels-photo-1429964.jpeg',
        destTitle: 'Moscow',
        location: 'Russia',
        grade: 'HISTORICAL CULTURAL',
        fees: '$700',
        description: 'Moscow is known for its iconic landmarks such as the Red Square, Kremlin, and Saint Basil\'s Cathedral, rich in history and culture.'
    },
    {
        id: 17,
        imgSrc: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg',
        destTitle: 'Lisbon',
        location: 'Portugal',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Lisbon is known for its scenic views, historic trams, and vibrant neighborhoods, offering a blend of tradition and modernity.'
    },
    {
        id: 18,
        imgSrc: 'https://images.pexels.com/photos/1098299/pexels-photo-1098299.jpeg',
        destTitle: 'Hanoi',
        location: 'Vietnam',
        grade: 'CULTURAL ADVENTURE',
        fees: '$400',
        description: 'Hanoi is famous for its centuries-old architecture, vibrant street markets, and rich history, blending French colonial and Asian influences.'
    },
    {
        id: 19,
        imgSrc: 'https://images.pexels.com/photos/27182278/pexels-photo-27182278/free-photo-of-hallgrimskirkja-church-in-reykjavik-in-iceland.jpeg',
        destTitle: 'Reykjavik',
        location: 'Iceland',
        grade: 'NATURE ADVENTURE',
        fees: '$1000',
        description: 'Reykjavik is known for its stunning natural beauty, including geysers, waterfalls, and the Northern Lights, offering unique outdoor experiences.'
    },
    {
        id: 20,
        imgSrc: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
        destTitle: 'Seoul',
        location: 'South Korea',
        grade: 'CULTURAL TECH',
        fees: '$750',
        description: 'Seoul is a vibrant city known for its modern skyscrapers, pop culture, and historical sites like Gyeongbokgung Palace.'
    }
];

const Main = () => {
    useEffect(()=>{
        Aos.init({duration: 4000})
    }, []);
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                     <HiOutlineLocationMarker className="icon"/>
                                     <span className="name">{location}</span>
                                 </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Main;