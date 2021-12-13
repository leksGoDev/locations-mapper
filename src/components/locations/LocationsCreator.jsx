export default function LocationsCreator(props){
    const style = {
        border: '0.15rem groove #2db232',
        borderRadius: '8%'
    }
    function searchKey(event){
        if (event.keyCode === 13){
            event.preventDefault()
            props.onAddClick(event.target.value)
            event.target.value = ''
        }
    }
    return <input style={style}
                  size="15"
                  type="text"
                  placeholder="enter address"
                  onKeyDown={(event)=>searchKey(event)}
    />
}