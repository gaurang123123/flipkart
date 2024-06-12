import React from 'react'
import { AppBar, Toolbar ,Box, styled,Drawer, IconButton,List, ListItem,Badge , Typography} from '@mui/material'
import Search from './Search'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom';


const StyleHeader = styled(AppBar)`
background : 	#FFFFFF;
height : 65px;
box-shadow : none;
`
const Component = styled(Box)`
  margin-left:5%;
  line-height: 0;
`
const SubHeading = styled(Typography)`
font-size: 12px;
font-style: italic;
font-weight: bold;
`
const PlusImage = styled('img')(
    {
        width: 10,
        height: 10,
        marginLeft : 4,
        marginTop :4

    }
)


const Header = () => {

    const logo = '/images/flip.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
  <StyleHeader>
    <Toolbar>
        <Component>
      <Link to={`/`} style={{textDecoration : 'none'}} >

            <img src={logo} alt="logo" style={{ width:100}}/>
            </Link>
            <Box style={{display: 'flex'}}>
                <SubHeading style={{color: 'grey'}}>Explore&nbsp;
                <Box component="span" style={{color : '#FFE500'}}>
                   Plus
                </Box>
                </SubHeading>
                <PlusImage src={subURL} alt="img" />
            </Box>
        </Component>
    <Search/>
    <CustomButton/>
    </Toolbar>
  </StyleHeader>
  )
}

export default Header