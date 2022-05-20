import './uploadExcel.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

const UploadExcel = () => {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                Ajouter un fichier excel
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default UploadExcel;
