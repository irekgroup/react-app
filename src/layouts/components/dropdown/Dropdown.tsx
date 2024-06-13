import {
    Placement,
    useDismiss,
    useFloating,
    useInteractions,
    offset,
    autoUpdate,
} from '@floating-ui/react';
import { FC, PropsWithChildren, SetStateAction } from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';

const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 200px;
    height: 300px;
    background: red;
`;

interface IDropdownProps {
    className?: string;
    isOpen: boolean;
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setOpen: Dispatch<SetStateAction<boolean>>;
    placement: Placement;
    target: HTMLElement | null;
}

const Dropdown: FC<IDropdownProps & PropsWithChildren> = ({
    className,
    isOpen,
    setOpen,
    children,
    target,
}) => {
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [offset(5)],
        elements: {
            reference: target,
        },
    });

    const dismiss = useDismiss(context);

    const { getFloatingProps } = useInteractions([dismiss]);
    if (!isOpen || !target) {
        return null;
    }
    return (
        <DropdownContainer
            className={className}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}>
            {children}
        </DropdownContainer>
    );
};

export { Dropdown };
