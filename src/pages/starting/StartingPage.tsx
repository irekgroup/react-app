import { FC, useRef, useState } from 'react';
import { CenteredPage } from '../../layouts';
import { Button, Panel } from '../../layouts/components';

import { Tooltip } from '../../shared/tooltip';
import { Dropdown } from '../../layouts/components';

import { Placement } from '@floating-ui/react';
import styled from 'styled-components';

const ContextMenu = styled(Dropdown)`
    background: yellow;
    gap: 5px;
`;

interface ITooltipProps {
    tittle: string;
    placement?: Placement;
}

const StartingPage: FC<ITooltipProps> = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CenteredPage>
            <Panel ref={(element) => {}} width={500} height={500}>
                <Tooltip tittle="Tooltip for button" placement="top">
                    <Button
                        size="s"
                        width={'110px'}
                        ref={buttonRef}
                        onClick={() => setIsOpen((prev) => !prev)}>
                        Click me
                    </Button>
                </Tooltip>
                <ContextMenu
                    target={buttonRef.current}
                    isOpen={isOpen}
                    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    setOpen={setIsOpen}>
                    <Button size="m" width={'170px'}>
                        Добавить анализ
                    </Button>
                    <Button size="m" width={'170px'}>
                        Добавить анализ
                    </Button>
                    <Button size="m" width={'170px'}>
                        Добавить анализ
                    </Button>
                    <Button size="m" width={'170px'}>
                        Добавить анализ
                    </Button>
                </ContextMenu>
            </Panel>
        </CenteredPage>
    );
};

export default StartingPage;
