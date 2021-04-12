import React from 'react';
import { Redirect } from 'react-router-dom';

//Import Layout Types
import {CompleteLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {FooterLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {NavbarFooterLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {NavbarLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {NavbarSidebarLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {PlainLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {SidebarFooterLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';
import {SidebarLayout} from '../../components/Layout/LayoutTypes/SelectionHandler';

//Importing Components from view folder

//AUTHENTICATION
import AntDesignLoginFormView from '../../Views/Authentication/AntDesignLoginFormView';

//HOME
import HomeView from '../../Views/Home'

export default [
    {
        path: '/',
        exact: true,
        layout: CompleteLayout,
        component: () => <Redirect to='/React/Test/Home'/>
    },

    //AUTHENTICATION
    {
        path: '/React/Test/Login',
        layout: PlainLayout,
        component: AntDesignLoginFormView
    },

    //HOME
    {
        path: '/React/Test/Home',
        layout: CompleteLayout,
        component: HomeView
    }
]