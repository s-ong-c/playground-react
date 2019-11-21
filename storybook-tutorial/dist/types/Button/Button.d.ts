/// <reference types="react" />
declare type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: "primary" | "secondary" | "tertiary";
    /** 버튼의 크기를 설정합니다. */
    size: "small" | "medium" | "big";
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
    iconOnly?: boolean;
};
/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
declare const Button: {
    ({ children, theme, size, disabled, width, iconOnly, onClick }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
