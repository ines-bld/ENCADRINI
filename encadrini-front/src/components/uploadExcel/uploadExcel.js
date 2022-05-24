import './uploadExcel.css';
import DropFileInput from './drop-file-input/drop-file-input';

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