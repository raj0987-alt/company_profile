import React, {Component, Fragment} from 'react';
import Header from "../components/SharedComponents/HeaderComponents/Header";
import HomePageSlider from "../components/SharedComponents/HomePageSlider/HomePageSlider";
import HomePageContainer from "../components/SharedComponents/HomePageContainer/HomePageContainer";
import FooterComponent from "../components/SharedComponents/FooterComponent/FooterComponent";


class HomePage extends Component {

    render() {
        return (
            <>
                <div className="">


                    <HomePageSlider/>
                    <HomePageContainer/>

                    {/*<h1>ALlah Vorsha</h1>*/}
                </div>




            </>
        );
    }
}

export default HomePage;
