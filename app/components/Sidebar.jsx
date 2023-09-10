import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function SideBar() {
    return (
        <div className="flex">
            <section className="sidebar z-0">
                <div className=" gradient-04 z-0" />

                <div className="dash-side">
                    {/* <div className="heading">I KNOW SPOTS</div> */}
                    <div className="heading">
                        <Link href="/">
                            <img
                                src="/logo.png"
                                className="w-[150px] "
                                alt=""
                            />
                        </Link>
                    </div>
                    <ConnectButton showBalance={false} accountStatus="icon"/>
                    {/* <ConnectButton/> */}


                    <div className="functions">
                        <div className="dash-content">
                            <div className="dash-wallet">
                                <div>
                                    <img src='/images/wallet.png' alt="" />
                                </div>
                                <div>
                                    <img src="/images/line.png" alt="" />
                                </div>
                            </div>
                            <div className="dash-username">
                                Sign in with your wallet
                            </div>
                        </div>
                        <div className="dash-content">
                            <div className="dash-wallet">
                                <div>
                                    <img src='/images/user.png' alt="" />
                                </div>
                            </div>
                            <div className="dash-username">
                                Claim your Quiz Prizes
                            </div>
                        </div>
                        <div className="dash-content">
                            <div>
                                <img src='/images/deploy.png' alt="" />
                            </div>
                            <div className="dash-username">
                                Congratulations 🎉
                            </div>
                        </div>
                        <img src="/Ellipse.svg" alt="/Ellipse.svg"/>
                    </div>
                </div>
            </section>
        </div>
    );
}
