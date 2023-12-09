import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import WithNavAndFooter from "../../components/with-nav-and-footer/WithNavAndFooter";
import { Container, Grid, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import Coverheader from '../../components/aboutus/Coverheader'
import Aboutproduct from "../../components/aboutus/Aboutproduct";
import Executiveteam from "../../components/aboutus/Executiveteam";
import Extrainfo from "../../components/aboutus/Extrainfo";
export default function Aboutus() {
	return (
        <WithNavAndFooter>
        <Coverheader/>
        <Aboutproduct />

        <Executiveteam />
        <Extrainfo />
		</WithNavAndFooter>
	);
}
