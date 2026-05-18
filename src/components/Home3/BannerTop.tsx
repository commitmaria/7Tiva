import React from 'react'
import Marquee from 'react-fast-marquee'

interface Props {
    props: string
    textColor: string
    bgLine: string
}

const BannerTop: React.FC<Props> = ({ props, textColor, bgLine }) => {
    return (
        <>
            <div className={`banner-top ${props}`}>
                <Marquee>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>Get 10% off on selected items</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>Get real followers — not bot followers</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>10% off swim suits</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>Instant Download on all orders over $50</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>10% off on all summer essentials!</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>Get summer-ready: 10% off swim suits</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                    <div className={`text-button-uppercase px-8 ${textColor}`}>10% off on all product</div>
                    <div className={`line w-8 h-px ${bgLine}`}></div>
                </Marquee>
            </div>
        </>
    )
}

export default BannerTop