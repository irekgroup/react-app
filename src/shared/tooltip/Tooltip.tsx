import {
    autoUpdate,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    offset,
    Placement,
} from '@floating-ui/react';
import React, {
    Children,
    FC,
    Fragment,
    MutableRefObject,
    ReactElement,
    RefCallback,
    RefObject,
    cloneElement,
    useCallback,
    useState,
} from 'react';
import styled, { css } from 'styled-components';

const setRefValue = (
    ref: MutableRefObject<any> | RefCallback<any>,
    value: any
): void => {
    if (typeof ref === 'function') {
        ref(value);
    } else {
        ref.current = value;
    }
};

const useForkRef = (...refs: (MutableRefObject<any> | RefCallback<any>)[]) => {
    return useCallback(
        (element: HTMLElement) => {
            refs.forEach((ref) => {
                if (ref) {
                    setRefValue(ref, element);
                }
            });
        },
        [refs]
    );
};

interface ITooltipProps {
    tittle: string;
    placement?: Placement;
    children: ReactElement;
}

const TooltipContainer = styled.div(
    ({ theme: { lightColors, boxShadow, borderRadius, fontSize } }) => css`
        display: flex;
        padding: 5px;
        background: ${lightColors.background.main};
        color: ${lightColors.white};
        border-radius: ${borderRadius.xxs};
        box-shadow: ${boxShadow.xxs};
        font-size: ${fontSize.s};
        width: max-content;
    `
);

const Tooltip: FC<ITooltipProps> = ({
    tittle,
    children,
    placement = 'bottom',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [offset(5)],
    });

    const hover = useHover(context);
    const focus = useFocus(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
    ]);

    if (children.props.disabled) {
        return children;
    }
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const unionRefs = useForkRef(refs.setReference, children.ref);

    return (
        <Fragment>
            {cloneElement(children, {
                ref: unionRefs,
                ...getReferenceProps,
            })}
            {isOpen && (
                <TooltipContainer
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps}>
                    {tittle}
                </TooltipContainer>
            )}
        </Fragment>
    );
};

export { Tooltip };
