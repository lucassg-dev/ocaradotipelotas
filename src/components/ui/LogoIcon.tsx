interface LogoIconProps {
    width?: string;
    height?: string;
    color?: string;
}
const LogoIcon = ({ width, height, color }: LogoIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="100" rx="8" fill={color} />
            <rect x="50" y="150" width="100" height="10" rx="3" fill={color} />
            <circle cx="100" cy="90" r="20" stroke={color} stroke-width="4" fill='var(--color-1)' />
            <line x1="115" y1="105" x2="130" y2="120" stroke='var(--color-1)' stroke-width="4" stroke-linecap="round" />
        </svg>
    );
};

export default LogoIcon;
