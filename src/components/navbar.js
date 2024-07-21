import * as React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { HiMenu } from "react-icons/hi";

import LanguageDropdown from "./language_selector";
import ThemeToggle from './theme_toggle';

export default function ButtonAppBar({ t, changeLanguage, defaultLanguage }) {
    return (
        <Navbar variant="black">
          <NavbarBrand>
            <HiMenu />
            <p className="font-bold text-inherit">Bruno Murer</p>
          </NavbarBrand>
          <NavbarContent className="sm:flex gap-4" justify="center">
            
            <NavbarItem><Link color="foreground" href="#">{t("Hedader Home")}</Link></NavbarItem>
            <NavbarItem isActive><Link href="#" aria-current="page">{t("Hedader About")}</Link></NavbarItem>
            <NavbarItem><Link color="foreground" href="#">{t("Hedader Projects")}</Link></NavbarItem>

          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="lg:flex"><LanguageDropdown changeLanguage={changeLanguage} /></NavbarItem>
            <NavbarItem className="lg:flex"><ThemeToggle /></NavbarItem>
          </NavbarContent>
        </Navbar>
      );
    /*
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HiMenu color="white" fontSize="1.5em" />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Bruno Murer
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("Hedader Home")}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("Hedader About")}
          </Typography>
          <LanguageDropdown changeLanguage={changeLanguage} />
        </Toolbar>
      </AppBar>
    </Box>
  );*/
}
