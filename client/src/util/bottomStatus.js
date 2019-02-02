import BottomNav from '../components/layout/BottomNav';
import React from 'react';

export default (isLoggedIn) => {
    if(isLoggedIn){
        return <BottomNav />
    }
}