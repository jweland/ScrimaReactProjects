export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E931" : "#FFFFFF"
    }
    return (
        <button style={styles} onClick={() => props.hold(props.id)}>
            {props.value}
        </button>
    )
}