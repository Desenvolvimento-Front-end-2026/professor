
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Logo = ( {titulo} ) => {


    return (

        <p style={{ fontSize: 20 }}>
            <AccessAlarmIcon  sx={{ fontSize: 48 }}
                        style={{paddingTop : '15px'}}  /> 
                        {titulo}
        </p>
    )

}

export default Logo