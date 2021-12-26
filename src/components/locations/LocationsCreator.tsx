import React from "react";

interface Props{
    onAddClick: (text: string) => void
}

const LocationsCreator: React.FC<Props> = ({onAddClick}) => {
    const style = {
        border: '0.15rem groove #2db232',
        borderRadius: '8%'
    }
    const searchKey = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if (e.key === "Enter"){
            e.preventDefault()
            onAddClick(e.currentTarget.value)
            e.currentTarget.value = ''
        }
    }
    return <input style={style}
                  size={15}
                  type="text"
                  placeholder="enter address"
                  onKeyDown={(event)=>searchKey(event)}
    />
}

export {LocationsCreator}