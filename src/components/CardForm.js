import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";


const LogoBitcoin = () => <svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.497 17.9058C24.5399 16.8521 25.8181 14.9964 25.5195 11.905C25.1174 7.68022 21.5145 6.26356 16.9662 5.86011L16.9653 0H13.4413L13.4403 5.706C12.5132 5.706 11.568 5.72444 10.6271 5.74356L10.6263 0.000777774L7.10548 0.000444465L7.10482 5.85911C6.34178 5.87489 5.59243 5.88989 4.86075 5.88989V5.87256L0 5.87056L0.000657952 9.67967C0.000657952 9.67967 2.60307 9.63011 2.5602 9.67822C3.98706 9.67922 4.45296 10.5181 4.58695 11.2422L4.58805 17.9181V27.2956C4.52522 27.75 4.26086 28.4761 3.26316 28.4774C3.30855 28.5179 0.699671 28.477 0.699671 28.477L0.000657952 32.7364H4.58586C5.44024 32.7374 6.27971 32.7509 7.10329 32.7576L7.10636 38.684L10.6263 38.685L10.6253 32.8207C11.5937 32.8407 12.5285 32.8493 13.4416 32.8481L13.4406 38.685H16.9645L16.9664 32.7684C22.8899 32.424 27.0368 30.9132 27.5524 25.2812C27.968 20.7469 25.8601 18.7229 22.497 17.9058ZM10.7113 9.93678C12.6988 9.93678 18.9494 9.296 18.9503 13.4994C18.9494 17.5293 12.7008 17.0586 10.7113 17.0586V9.93678ZM10.7098 28.5063L10.7113 20.6539C13.0992 20.6532 20.589 19.9582 20.59 24.5783C20.591 29.009 13.0992 28.5046 10.7098 28.5063Z" fill="#333333"/>
</svg> 


const LogoNinja = () => <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.58519 7.14646L2.66843 6.39479C1.69126 6.01896 1.24025 4.92904 1.61609 3.95186C1.99192 2.97469 3.08185 2.52369 4.05902 2.89952L5.03619 3.27536L4.77311 2.41094C4.47244 1.43377 5.03619 0.381426 6.05095 0.080758C7.02812 -0.21991 8.08046 0.343843 8.38113 1.3586L9.05763 3.65119C11.463 2.44852 14.169 1.73443 17.0253 1.73443C26.4212 1.73443 34.0507 9.36389 34.0507 18.7598C34.0507 28.1557 26.4212 35.7851 17.0253 35.7851C7.62946 35.7851 -3.8147e-06 28.1557 -3.8147e-06 18.7598C-3.8147e-06 14.2873 1.76642 10.1907 4.58519 7.14646ZM29.0145 19.9249C29.0521 19.549 29.0897 19.1732 29.0897 18.7598C29.0897 15.8658 28.0749 13.235 26.3836 11.1679H7.74221C6.05095 13.235 5.03619 15.9034 5.03619 18.7598C5.03619 19.1356 5.07378 19.549 5.11136 19.9249H29.0145Z" fill="white"/>
<path d="M21.9488 18.1209C20.5166 18.1209 19.3555 16.9598 19.3555 15.5276C19.3555 14.0954 20.5166 12.9343 21.9488 12.9343C23.381 12.9343 24.5421 14.0954 24.5421 15.5276C24.5421 16.9598 23.381 18.1209 21.9488 18.1209Z" fill="white"/>
<path d="M12.1019 18.1209C10.6697 18.1209 9.50866 16.9598 9.50866 15.5276C9.50866 14.0954 10.6697 12.9343 12.1019 12.9343C13.5341 12.9343 14.6952 14.0954 14.6952 15.5276C14.6952 16.9598 13.5341 18.1209 12.1019 18.1209Z" fill="white"/>
</svg>


const LogoEvil = () => <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 34C28.3888 34 36 26.3888 36 17C36 15.0145 35.6596 13.1084 35.034 11.3371C36.9119 8.43722 38 4.99367 38 1.3C38 0.631546 37.0585 0.568186 36.8231 1.19381C35.9585 3.49167 34.6482 5.57669 32.9956 7.34726C29.9283 2.9084 24.8038 0 19 0C13.1962 0 8.07166 2.9084 5.00438 7.34726C3.35177 5.57669 2.04152 3.49166 1.17691 1.19381C0.941502 0.568183 0 0.631543 0 1.3C0 4.99367 1.08809 8.43722 2.966 11.3371C2.34039 13.1084 2 15.0145 2 17C2 26.3888 9.61116 34 19 34ZM13.5138 13.1501C13.9809 12.9801 14.502 13.1791 14.7369 13.6172L17.3917 18.5671C17.8293 19.3831 17.0187 20.3043 16.1537 19.974L8.22051 16.9444C7.35555 16.6141 7.36528 15.3871 8.23536 15.0705L13.5138 13.1501ZM25.2875 13.15C24.8203 12.98 24.2993 13.179 24.0643 13.6171L21.4095 18.567C20.9718 19.3829 21.7825 20.3041 22.6475 19.9738L30.5807 16.9444C31.4456 16.6141 31.4359 15.3871 30.5658 15.0705L25.2875 13.15Z" fill="white"/>
</svg>

const LogoBlockChain = () => <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3113 2.69793C27.5678 0.955173 25.4272 -0.00284596 23.284 6.3508e-06C21.2396 0.00285866 19.2983 0.858551 17.6985 2.47866L11.719 8.49346C10.0468 10.1738 9.19931 12.1915 9.26848 14.3343C9.34085 16.3969 10.3003 18.4512 11.9689 20.1195C12.9055 21.0554 14.423 21.0554 15.3589 20.1195C16.2955 19.1825 16.2955 17.664 15.3589 16.7288C14.5513 15.9209 14.0899 15.0117 14.0607 14.1728C14.035 13.3788 14.3909 12.6058 15.1186 11.8742L21.0984 5.85971C21.1023 5.85615 21.1059 5.85258 21.1091 5.84866C21.8069 5.15092 22.5417 4.79652 23.2904 4.79509C24.1515 4.79402 25.0852 5.25324 25.9217 6.09004C26.8715 7.03807 28.1654 8.92987 26.1634 10.9415L23.2248 13.8897C23.1079 14.0073 23.0715 14.223 23.1392 14.3742C23.6181 15.4513 23.8894 16.5819 23.9268 17.7189C23.9429 18.1888 23.9201 18.6527 23.8605 19.1094C23.775 19.7669 24.0006 19.903 24.4681 19.4338L29.5605 14.3246C32.9038 10.9653 32.8011 6.18345 29.3113 2.69793Z" fill="white"/>
<path d="M20.0252 11.9669C19.0883 11.0328 17.5726 11.0345 16.6374 11.9694C15.7001 12.9099 15.7022 14.4277 16.6399 15.3629C17.4485 16.1683 17.9081 17.0757 17.9366 17.9211C17.9637 18.7108 17.6086 19.4831 16.8802 20.2154L10.9018 26.2274C10.8982 26.232 10.8947 26.2348 10.8911 26.2384C10.1923 26.9372 9.45745 27.292 8.70765 27.2938C7.8459 27.2948 6.9107 26.836 6.07675 26.0024C5.12729 25.0526 3.83413 23.1576 5.83324 21.1474L8.77468 18.1985C8.89163 18.0815 8.92764 17.8651 8.86025 17.715C8.38213 16.6393 8.11045 15.5112 8.07087 14.3771C8.05554 13.9054 8.07907 13.4394 8.13933 12.9812C8.22597 12.3249 7.99957 12.1872 7.53214 12.6557L2.4365 17.7628C-0.902484 21.1192 -0.800514 25.9011 2.68607 29.3927C4.43097 31.1351 6.57199 32.0913 8.71657 32.0885C10.7524 32.0849 12.6763 31.2342 14.2821 29.6291C14.2889 29.622 14.2957 29.6152 14.3025 29.6084L20.2816 23.595C21.9566 21.9093 22.8027 19.8895 22.7285 17.7589C22.6608 15.6934 21.6996 13.6366 20.0252 11.9669Z" fill="white"/>
</svg>



export const Chip = () => 
<svg width="50" height="84" viewBox="0 0 50 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="44" width="50" height="40" rx="8" fill="#ECE6DF"/>
<line y1="56.5" x2="18" y2="56.5" stroke="black" stroke-opacity="0.11"/>
<line x1="33" y1="56.5" x2="50" y2="56.5" stroke="black" stroke-opacity="0.11"/>
<line x1="32.5" y1="44" x2="32.5" y2="84" stroke="black" stroke-opacity="0.11"/>
<line y1="70.5" x2="18" y2="70.5" stroke="black" stroke-opacity="0.11"/>
<line x1="32" y1="70.5" x2="50" y2="70.5" stroke="black" stroke-opacity="0.11"/>
<line x1="18.5" y1="44" x2="18.5" y2="84" stroke="black" stroke-opacity="0.11"/>
<g opacity="0.5">
<path d="M32.8487 26.501C33.5267 27.1657 33.5267 28.2441 32.8487 28.9097C32.1698 29.5753 31.0693 29.5753 30.3913 28.9097C27.4169 25.9941 22.5778 25.9941 19.6038 28.9097C18.9249 29.5753 17.824 29.5753 17.146 28.9097C16.8067 28.5772 16.6378 28.1423 16.6378 27.7049C16.6378 27.2692 16.8072 26.8331 17.146 26.501C21.4756 22.2567 28.5191 22.2567 32.8487 26.501Z" fill="black"/>
<path d="M38.8186 21.073C39.4967 21.7382 39.4967 22.817 38.8186 23.4826C38.1397 24.1482 37.0397 24.1482 36.3612 23.4826C30.0956 17.339 19.9004 17.339 13.6348 23.4826C12.9563 24.1482 11.8554 24.1482 11.1778 23.4826C10.8386 23.15 10.6683 22.7135 10.6683 22.2778C10.6683 21.8412 10.8386 21.406 11.1778 21.073C14.869 17.4538 19.7772 15.4608 24.9978 15.4608C30.2184 15.4608 35.1266 17.4538 38.8186 21.073Z" fill="black"/>
<path d="M44.2866 15.0204C44.965 15.6856 44.965 16.7644 44.2866 17.4296C43.6081 18.0948 42.5081 18.0948 41.8296 17.4296C37.3332 13.0218 31.3554 10.5945 24.9974 10.5945C18.6394 10.5945 12.662 13.0218 8.16651 17.4296C7.48715 18.0948 6.38715 18.0948 5.70911 17.4296C5.36987 17.097 5.20047 16.6609 5.20047 16.2248C5.20047 15.7891 5.37031 15.353 5.70911 15.0204C10.8611 9.96902 17.7119 7.18753 24.9974 7.18753C32.2842 7.18753 39.1346 9.96902 44.2866 15.0204Z" fill="black"/>
</g>
</svg>


export const colorAndLogo = {
    bitcoinInc: {
        color:'#FFAE34',
        logo: <LogoBitcoin />, 
    },
    ninjaBank: {
        color:'#222222',
        logo: <LogoNinja />, 
    },
    blockChain: {
        color:'#8B58F9',
        logo: <LogoBlockChain />, 
    },
    evilCorp: {
        color:'#F33355',
        logo: <LogoEvil />, 
    }
}

export default function CardForm(){
    const navigate = useNavigate()
    const [newCard, setNewCard] = useState({
        color: '#dedede',
        logo: 'bitcoinInc',
        number: 'XXXX XXXX XXXX XXXX',
        name : 'FIRSTNAME LASTNAME ',
        date : 'MM/YY',
        ccv: 'XXX',
        id:''
    });
    
    const addCard = () => {
        let cards = [];

        if (localStorage.getItem('cards')) {
            cards = localStorage.getItem('cards');
            cards = JSON.parse(cards);
        }

        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));

        navigate('/cards');
    }


    return(
        <div className="form-container">
            <Card 
                color={newCard.color}
                chip={<Chip />}
                logo={colorAndLogo[newCard.logo].logo}
                number={newCard.number}
                name={newCard.name}
                date={newCard.date}
            />
            <label className="label-form">CARD NUMBER</label>
            <input
                className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        number: e.target.value
                    })
                }}
            />

            <label className="label-form">CARDHOLDER NAME</label>
            <input className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        name: e.target.value
                    })
                }}
            />

            <div className="form-row3">
                <div className="data-verification">
                    <label className="label-form">VALID THRU</label>
                    <input
                        className="input-form"
                        onChange={(e) => { 
                            setNewCard({ 
                                ...newCard, 
                                date: e.target.value
                            })
                        }}
                    />
                </div>

                <div className="data-verification">
                    <label className="label-form">CCV</label>
                    <input className="input-form"
                        onChange={(e) => { 
                            setNewCard({ 
                                ...newCard, 
                                ccv: e.target.value
                            })
                        }}
                    />
                </div>
            </div>
            

            <label for="cars" className="label-form">VENDOR</label>
            <select
                id="cars"
                name="cars"
                className="input-form"
                onChange={(e) => { 
                    setNewCard({ 
                        ...newCard, 
                        color: colorAndLogo[e.target.value].color,
                        logo: e.target.value,
                    })
                }}
            >
                <option value="bitcoinInc">BITCOIN INC</option>
                <option value="ninjaBank">NINJA BANK</option>
                <option value="blockChain">BLOCK CHAIN INK</option>
                <option value="evilCorp">EVIL CORP</option>
            </select>


            <button className="form-btn" onClick={addCard}>ADD CARD</button>
        </div>
    );
}