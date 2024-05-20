export interface IModalContext {
    modalType: string | null;
    modalProps: object | undefined;
}

export interface IModalHandlersContext {
    onModalOpen: (type: string, props?: any) => void;
    onModalClose: VoidFunction;
}
