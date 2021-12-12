export default function RouteItem(props){
    const styles = {
        li:{
            display: 'list-item',
            listStyle: 'outside url("logo-location.svg")',
            fontSize: '1.15em',
            '& li::marker': {
                textTransform: 'uppercase'
            }
        },
        span:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            lineHeight: '1.5'
        },
        button:{
            backgroundColor: '#D9372C',
            border: '1px solid rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '17.2px',
            transform: 'scale(0.5)'
        }
    }
    return <li style={styles.li}>
        <span style={styles.span}>
            {props.value}
            <button type="reset" style={styles.button}>&times;</button>
        </span>
    </li>
}