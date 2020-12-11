import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import SettingIcon from '@material-ui/icons/Settings'
import VideocamIcon from '@material-ui/icons/Videocam'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import MusicNotIcon from '@material-ui/icons/MusicNote'
import PersonIcon from '@material-ui/icons/Person';
import ExtensionIcon from '@material-ui/icons/Extension';
import BusinessIcon from '@material-ui/icons/Business'
import React from "react";
import { DirectionsBus, GroupAdd, GroupWork, Payment, Person, Receipt, Streetview } from '@material-ui/icons'
const adminDrawerMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    {
        name:'Buses',
        route:'/auth/admin/buses',
        icon:<DirectionsBus/>
    },
    
      {
        name:'Cashiers',
        route:'/auth/admin/cashiers',
        icon:<AttachMoneyIcon/>
      },
      {
        name:'Drivers',
        route:'/auth/admin/drivers',
        icon:<Person/>
      },
      {
        name:'Routes',
   