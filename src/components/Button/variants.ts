import { ButtonDiagonalSwipe, ButtonLeftSwipe, ButtonRightSwipe, NormalButton } from "./styled";

export enum ButtonVariants {
    DIAGONAL="DIAGONAL",
    LEFT_SWIPE="LEFT_SWIPE",
    RIGHT_SWIPE="RIGHT_SWIPE",
    NORMAL="NORMAL"
}
export const variantMap = {
    [ButtonVariants.DIAGONAL]: ButtonDiagonalSwipe,
    [ButtonVariants.LEFT_SWIPE]: ButtonLeftSwipe,
    [ButtonVariants.RIGHT_SWIPE]: ButtonRightSwipe,
    [ButtonVariants.NORMAL]: NormalButton,
}