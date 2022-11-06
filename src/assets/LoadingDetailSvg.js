export default function LoadingDetailSvg() {
    return (
        <svg
            style={{
                margin: "auto",
                background: "rgb(255, 255, 255)",
                display: "block",
                shapeRendering: "auto"
            }}
            width="210px"
            height="210px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="84"
                cy="50"
                r="10"
                fill="#00a9b7"
            >
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.8928571428571428s"
                    calcMode="spline" keyTimes="0;1"
                    values="8;0" keySplines="0 0.5 0.5 1"
                    begin="0s"
                >

                </animate>
                <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#00a9b7;#dff4f6;#aae2e7;#55c6cf;#00a9b7"
                    begin="0s">

                </animate>
            </circle>
            <circle
                cx="16"
                cy="50"
                r="10"
                fill="#00a9b7">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;8;8;8"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s">

                </animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"></animate>
            </circle>
            <circle
                cx="50"
                cy="50"
                r="10"
                fill="#55c6cf"
            >
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;8;8;8"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.8928571428571428s">

                </animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.8928571428571428s">

                </animate>
            </circle>
            <circle
                cx="84"
                cy="50"
                r="10"
                fill="#aae2e7"
            >
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;8;8;8"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.7857142857142856s">

                </animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.7857142857142856s">

                </animate>
            </circle>
            <circle
                cx="16"
                cy="50"
                r="10"
                fill="#dff4f6">
                <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;8;8;8"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-2.6785714285714284s">

                </animate>
                <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="3.571428571428571s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-2.6785714285714284s">

                </animate>
            </circle>
        </svg>
    )
}