export default function TabButton({children,onSelect,isSelected}) {
    function handleClick() {
        console.log('clicked')
    }
    return (
        <li>
            <button className={isSelected ? 'active':null} onClick={onSelect}>{children}</button>
        </li>
    )
}