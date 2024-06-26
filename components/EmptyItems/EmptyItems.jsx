const EmptyItems = ({message})=> {
    return(
        <div className="EmptyItemsContainer">
            <span className="errorMessage">{message}</span>
        </div>
    )
}

export default EmptyItems
