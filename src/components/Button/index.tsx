import { ButtonDiagonalSwipe } from "./styled";
import { ButtonVariants, variantMap } from "./variants";


type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
    disabled?: boolean;
    variant?: ButtonVariants;
    borderRadius?: string;
}

const Button = ({onClick, buttonText, disabled = false, variant= ButtonVariants.LEFT_SWIPE, borderRadius = "0.75rem"}: Props) => {
    const Button = variantMap[variant] as React.ElementType;
    return(
        <Button radius={borderRadius} disabled={disabled} onClick={onClick}><div style={{position: 'relative', zIndex: 1}}>{buttonText}</div></Button>
    )
}
export default Button;