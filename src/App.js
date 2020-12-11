import { AppBar, Card, CardContent, CardHeader, Container, Divider, Toolbar, Typography } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import LanguageChanger from './commons/LanguageChanger';
import Footer from './components/Footer';
import Login from './components/Login';
import Logo from './components/Logo'
import useStyles from './styles/homeStyle'
import {useTranslation} from 'react-i18next'
export const  App = () =>{
  const classes = useStyles()
  const {t} = useTranslation()
  return (
    <div>
     <AppBar>
       <Toolbar>
         <Container maxWidth={'lg'} className={classes.innerContainer}>
              <Logo/>
              <div className={classes.grow}/>
              <LanguageChanger/>
         </Container>
       </Toolbar>
     </AppBar>
     <div className={classes.container}>
          <Container maxWidth={'sm'}>
          <Card>
            <CardHeader
            title={t('home.login_info')}
            avatar={<Person/>}/>
            <Divider/>
            <CardContent>
              <Login/>
            </CardContent>
          </Card>
          </Container>
          <Footer/>
     </div>
    </div>
  );
}

export default App;
