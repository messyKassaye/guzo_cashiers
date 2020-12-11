import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core"
import { Language } from  "@material-ui/icons"
import useStyles from '../styles/homeStyle'
import React from 'react'
import i18next from 'i18next'
import Languages from '../data/Languages'
import {useTranslation} from 'react-i18next'
const LanguageChanger = ()=>{
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {t} = useTranslation()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = (lan) => {
        setAnchorEl(null);
        i18next.changeLanguage(lan)
      };

    return(
        <div className={classes.toolbarLanguage}>
            <Typography color={'inherit'}>
                {t('home.languages')}
            </Typography>
            <IconButton size={'medium'} color={'inherit'} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Language/>
            </IconButton>
            <Menu
                 id="simple-menu"
                 anchorEl={anchorEl}
                 keepMounted
                 open={Boolean(anchorEl)}
                 onClose={handleClose}
               >
                 {
                   Languages.map(language=>(
                    <MenuItem key={language.id} value={language.symbol} onClick={()=>handleClose(language.symbol)}>
                      {language.name}
                    </MenuItem>
                   ))
                 }
                 
               </Menu>
        </div>
    )
}

export default LanguageChanger