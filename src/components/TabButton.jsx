export default function TabButton({children}) {
    function handleClick(){
        console.log('test');
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}