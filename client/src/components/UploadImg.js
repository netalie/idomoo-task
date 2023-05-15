import Dropzone from "react-dropzone";
import { Button } from "react-bootstrap";

const UploadImg = () => {
    return (
        <div className="mb-2">
            <Button>
                <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>click to select an image</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </Button>
        </div>
    );
};

export default UploadImg;