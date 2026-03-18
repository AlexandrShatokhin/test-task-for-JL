import { useCallback, useState } from "react";
import UsersTable from "./components/UsersTable/UsersTable";
import AgreementModal from "./components/AgreementModal/AgreementModal";
import { ActionButton } from "./shared/button";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasAgreed, setHasAgreed] = useState(false);

    const handleAction = useCallback(() => {
        if (hasAgreed) {
            alert("Действие выполнено");
        } else {
            setIsModalOpen(true);
        }
    }, [hasAgreed]);

    const handleConfirm = useCallback(() => {
        setHasAgreed(true);
        alert("Действие выполнено");
    }, []);

    return (
        <>
            <UsersTable />
            <ActionButton style={{margin:'20px auto', width:'350px'}} onClick={handleAction}>
                Показать модальное окно
            </ActionButton>

            <AgreementModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
            />
        </>
    );
}

export default App;
