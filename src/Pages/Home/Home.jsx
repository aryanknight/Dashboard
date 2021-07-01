import React from 'react';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import Chart from '../../Components/Chart/Chart';
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import { userData } from "../../dummyData";
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
