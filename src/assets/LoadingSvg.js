export default function LoadingSvg() {
    return (
        <svg
            style={{
                margin: "auto",
                background: "rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto",
            }}
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#00a9b7"
                stroke-width="10"
                r="29"
                stroke-dasharray="136.659280431156 47.553093477052"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1.2195121951219512s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1">

                </animateTransform>
            </circle>
        </svg >
    )
}