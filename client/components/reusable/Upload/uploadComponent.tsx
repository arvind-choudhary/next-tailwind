import {useDropzone} from 'react-dropzone'
import React from 'react'

type Props = {}

const UploadComponent = (props: Props) => {

    const onDrop = React.useCallback(acceptedFiles => {
        // Do something with the files
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    


    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default UploadComponent