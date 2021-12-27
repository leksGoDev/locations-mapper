import React from "react";

interface Props{
    onAddClick: (text: string) => void
}

export const LocationsCreator: React.FC<Props> = ({onAddClick}) => {
    const style = {
        border: '0.15rem groove #2db232',
        borderRadius: '8%',
        marginLeft: 'auto',
        display: 'block'
    }
    const searchKey = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if (e.key === "Enter"){
            e.preventDefault()
            onAddClick(e.currentTarget.value)
            e.currentTarget.value = ''
        }
    }
    return <input style={style}
                  size={25}
                  type="text"
                  placeholder="enter address"
                  onKeyDown={(event)=>searchKey(event)}
    />
}