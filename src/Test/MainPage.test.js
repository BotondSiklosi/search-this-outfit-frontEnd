import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "../components/main_page/MainPage";
import {PictureProvider} from "../context/PictureContext";

Enzyme.configure({adapter: new Adapter()});

describe('MainPage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <PictureProvider>
                <MainPage/>
            </PictureProvider>);
    });

    it('should render div.main-page', function () {
        expect(wrapper.find('div.main-page').length).toEqual(1);
    });

    it('should render <InputField/>', function () {
        expect(wrapper.find('InputField').length).toEqual(1);
    });

    it('should render <SideBar/>', function () {
        expect(wrapper.find('SideBar').length).toEqual(1);
    });

    it('should render <PictureResults/>', function () {
        expect(wrapper.find('PictureResults').length).toEqual(1);
    });

})