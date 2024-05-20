import { FC } from 'react';
import { Input, Modal } from '../../../layouts/components';
import { IAnalyze } from './type';

interface IAnalyzeModalProps {
    analyze?: any;
    onClose: VoidFunction;
}

const AnalyzeModal: FC<IAnalyzeModalProps> = ({ analyze, onClose }) => {
    return (
        <Modal
            size="m"
            title={analyze ? analyze.name : 'Добавить анализ'}
            onClose={onClose}>
            <Input value="23" label="Значение" onChange={() => {}} />
        </Modal>
    );
};

const ANALYZE_MODAL_TYPE = 'ANALYZE_MODAL_TYPE';

export { AnalyzeModal, ANALYZE_MODAL_TYPE };
