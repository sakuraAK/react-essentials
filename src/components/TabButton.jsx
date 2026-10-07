

function TabButton({onClickEventHandler, children}) {
    return (
        <>
            <button onClick={onClickEventHandler}>{children}</button>            
        </>
    );
}


export default TabButton;