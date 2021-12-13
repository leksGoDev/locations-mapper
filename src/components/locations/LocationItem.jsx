export default function LocationItem(props){
    const styles = {
        div:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            lineHeight: '1.5'
        },
        img:{
            width: '0.8em',
            height: '0.8em',
            verticalAlign: 'middle',
            marginRight: '0.2em',
            flex: '0 0 auto'
        },
        button:{
            backgroundColor: '#D9372C',
            border: '1px solid rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '17.2px',
            transform: 'scale(0.5)',
            flex: '0 0 auto'
        }
    }
    return <li style={{fontSize: '1.15em'}}>
        <div style={styles.div}>
            <span>
                <img src={'logo-location.svg'}
                     alt='logo'
                     style={styles.img}/>
                {props.index}: {props.value}
            </span>
            <button type="reset"
                    style={styles.button}
                    onClick={props.onRemoveClick}>
                &times;
            </button>
        </div>
    </li>
}