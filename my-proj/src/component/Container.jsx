import React from 'react';
import { SideBarFilter } from './Filter'
import { ContentBlock } from './ContentBlock';
import '../styles/Container.css'
import 'boxicons';


export const Container = () => {
    return (
        <div className="container">
            <SideBarFilter />
            <ContentBlock />
        </div>
    );
}