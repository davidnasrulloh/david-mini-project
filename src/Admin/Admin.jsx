import React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "./TabSelector";
import TeamContainer from "./TeamContainer";

const Admin = () => {

    const [selectedTab, setSelectedTab] = useTabs([
        "promo",
        "sponsor",
        "team",
    ]);

    return(
        <>
            <div className="py-32">
                <div className="container mx-auto">
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-8">Selamat datang di halaman admin</h1>
                        <hr className="mb-8 border-2"/>
                        <nav className="flex border-b border-gray-300">
                            <TabSelector
                                isActive={selectedTab === "promo"}
                                onClick={() => setSelectedTab("promo")}>Sponsorship
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "sponsor"}
                                onClick={() => setSelectedTab("sponsor")}>Promo
                            </TabSelector>
                            <TabSelector
                                isActive={selectedTab === "team"}
                                onClick={() => setSelectedTab("team")}>Team Members
                            </TabSelector>
                        </nav>
                        <div className="p-4">
                            <TabPanel hidden={selectedTab !== "promo"}>My Account</TabPanel>
                            <TabPanel hidden={selectedTab !== "sponsor"}>Company</TabPanel>
                            <TabPanel hidden={selectedTab !== "team"}><TeamContainer/></TabPanel>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
}

export default Admin;