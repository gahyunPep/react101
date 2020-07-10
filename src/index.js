import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import WineApp from './components/WineApp';
import {fetchRegions} from './components/APIService';
import {fetchWinesFrom} from './components/APIService';
import {fetchWine} from './components/APIService';


ReactDOM.render(<WineApp fetchRegions = {fetchRegions} fetchWinesFrom = {fetchWinesFrom} fetchWine = {fetchWine} />, document.getElementById('root'));
