import React from "react";
import Link from "next/link";
export default function Hero() {
    return (
        <div className="hero">
            <img src="/background.png" alt="" className="bg" />
            <img src="/BG first Circle.png" alt="" className="bg-first" />
            <img src="BG Second Circle.png" alt="" className="bg-second" />
            <div className="text">
                <div className="intro">Introducing</div>
                <div className="event">iknowspots</div>
            </div>
            <p className="Seamless">
                Seamless granular events hosting with NFT tickets.
            </p>
            <br />
            <div className="big-box">
                <div className="box">
                

                    <div className="hero-box-text">
                        <Link href='/claim' >Claim Now</Link>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src="/front-ticket.png" alt="" className="front-ticket" />
            </div>
            <img src="/Union-down.png" alt="" className="union-down" />
            <img src="/Union-up.png" alt="" className="union-up" />
            <div className="right-ticket-div">
                <img src="/Ticket-right.png" alt="" className="right-ticket" />
            </div>
            <img src="/ticket-left.png" alt="" className="left-ticket" />
        </div>
    );
}
