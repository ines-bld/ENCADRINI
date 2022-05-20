import './uploadFiles.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

const UploadFiles = () => {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                Ajouter un fichier
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
    );
}

export default UploadFiles;
