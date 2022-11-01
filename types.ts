declare global {
	interface Window {
		confirmDialog: {
			hide: () => void;
			showModal: () => void;
			close: () => void;
		 };
	}
}
