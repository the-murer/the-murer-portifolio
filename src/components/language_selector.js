import * as React from 'react';
import { MenuItem, Select } from '@mui/material';
import _ from "lodash"


export default function LanguageDropdown({ changeLanguage = () => null }) {
  const [currentLang, setDefaultValue] = React.useState(localStorage.getItem("language"));
    const languageTable = {
    pt: {
      pt: "Português",
      en: "Ingles",
      es: "Espanhol",
      it: "Italiano",
    },
    en: {
      pt: "Portuguese",
      en: "English",
      es: "Spanish",
      it: "Italian",
    },
    es: {
      pt: "Português",
      en: "Inglés",
      es: "Español",
      it: "Italiano",
    },
    it: {
      pt: "Portoghese",
      en: "Inglese",
      es: "Spagnolo",
      it: "Italiano",
    },
  }

  const onSelect = (event) => {
    const abbreviation = _.findKey(languageTable[currentLang], (value) => value === event.target.value)
    localStorage.setItem('language', abbreviation)
    setDefaultValue(abbreviation)
    changeLanguage(abbreviation)
  }

  return (
    <div className="">
      <Select
          className='w-full'
          value={languageTable?.[currentLang]?.[currentLang]}
          onChange={(e) => onSelect(e)}
          displayEmpty
          variant='standard'
          style={{ border: 'none' }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            {Object.values(languageTable?.[currentLang]).map((value) => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
            ))}
        </Select>
    </div>
  )
}