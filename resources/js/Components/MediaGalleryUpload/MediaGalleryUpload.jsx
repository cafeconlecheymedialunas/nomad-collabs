import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Col, Form, Image, Modal, Row } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from "../InputError";
import "./media-gallery.css";
import { FaPencil, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

export default function MediaGalleryUpload({ files, relatedEntityType, relatedEntityId, errors, fileMimeType, isMultiple = false }) {
    // Estado del formulario y modales
    const { data, setData, post, put, delete: destroy, processing } = useForm({
        file: null,
        file_id: null,
        alt: "",
        name: "",
        fileable_id: relatedEntityId,
        fileable_type: relatedEntityType,
        type: "cover",
        file_mime_type: fileMimeType,
    });

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editingFile, setEditingFile] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]); // Estado para los archivos seleccionados

    // Configuración de Dropzone
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setData({ ...data, file: acceptedFiles[0] });
        },
    });

    // Handlers para cambios en el formulario
    const handleFileChange = (e) => setData("file", e.target.files[0]);
    const handleAltChange = (e) => setData("alt", e.target.value);
    const handleNameChange = (e) => setData("name", e.target.value);

    // Seleccionar/deseleccionar un archivo de la lista
    const handleSelectFile = (file) => {
        if (isMultiple) {
            const isSelected = selectedFiles.some((f) => f.id === file.id);
            if (isSelected) {
                setSelectedFiles(selectedFiles.filter((f) => f.id !== file.id)); // Deseleccionar
            } else {
                setSelectedFiles([...selectedFiles, file]); // Seleccionar
            }
        } else {
            setSelectedFiles([file]);
        }
    };

    // Seleccionar un archivo para editar
    const handleEditFile = (file) => {
        setData({
            ...data,
            file_id: file.id,
            name: file.name,
            alt: file.alt,
        });
        setEditMode(true);
        setEditingFile(file);
    };

    // Subir un archivo
    const handleUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", data.file);
        formData.append("fileable_id", relatedEntityId);
        formData.append("fileable_type", relatedEntityType);
        formData.append("type", "cover");
        formData.append("file_mime_type", fileMimeType);

        post(route("files.upload"), {
            data: formData,
            preserveScroll: true,
            onSuccess: (response) => {
                console.log(response);
                const newFile = response.props.freelancer.user.files[response.props.freelancer.user.files.length - 1]; // Obtener el archivo recién añadido
                setSelectedFiles([...selectedFiles, newFile]);
                setModalAddOpen(false); // Cerrar el modal
                setData({ ...data, file: null }); // Limpiar el archivo seleccionado
            },
            onError: (errors) => console.log("Error al subir:", errors),
        });
    };

    // Eliminar un archivo
    const handleDelete = () => {
        if (!data.file_id) return;
        destroy(route("files.destroy", data.file_id), {
            preserveScroll: true,
            onSuccess: () => {
                setConfirmModalOpen(false);
                setData({ ...data, file_id: null });
                setEditMode(false);
                setEditingFile(null);
            },
            onError: (errors) => console.log("Error al eliminar:", errors),
        });
    };

    // Asignar archivos seleccionados a la entidad
    const handleAssignToEntity = () => {
        if (selectedFiles.length === 0) return;

        console.log(selectedFiles)
        selectedFiles.forEach((file) => {
            post(route("files.assign"), {
                data: {
                    file_id: file.id,
                    fileable_id: relatedEntityId,
                    fileable_type: relatedEntityType,
                    type: "cover",
                    alt: file.alt,
                },
                preserveScroll: true,
                onSuccess: () => {
                    setSelectedFiles([]);
                    setModalOpen(false);
                },
                onError: (errors) => console.log("Error al asignar:", errors),
            });
        });
    };

    // Acortar el nombre del archivo para mostrarlo
    const truncateFileName = (name, maxLength = 10) => {
        if (name.length <= maxLength) return name;
        const extension = name.split(".").pop();
        const nameWithoutExt = name.substring(0, name.lastIndexOf("."));
        return `${nameWithoutExt.substring(0, maxLength)}...${extension}`;
    };

    return (
        <>
            {/* Botón para abrir el modal */}
            <a href="#" className="upload-btn ml10" onClick={(e) => { e.preventDefault(); setModalOpen(true); }}>
                Upload image
            </a>

            {/* Modal de confirmación de eliminación */}
            <Modal show={confirmModalOpen} onHide={() => setConfirmModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Estás seguro de que deseas eliminar esta imagen?</p>
                </Modal.Body>
                <Modal.Footer>
                    <PrimaryButton variant="danger" onClick={handleDelete} disabled={processing}>
                        Delete
                    </PrimaryButton>
                    <SecondaryButton onClick={() => setConfirmModalOpen(false)} disabled={processing}>
                        Cancel
                    </SecondaryButton>
                </Modal.Footer>
            </Modal>

            {/* Modal de la biblioteca de medios */}
            <Modal show={modalOpen} dialogClassName="modal-90w" scrollable centered onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <h3 className="list-title">Media Gallery</h3>
                    <button className="add-more-btn text-thm btn" onClick={() => setModalAddOpen(true)}>
                        <FaPlus /> Add file
                    </button>
                </Modal.Header>
                <Modal.Body className="py-0">
                    <Row>
                        {/* Lista de archivos */}
                        <Col sm={9}>
                            <div className="row">
                                {files.map((file) => (
                                    <div key={file.id}
                                    onClick={() => handleSelectFile(file)} 
                                     className="col-sm-6 col-lg-4 col-xl-3">
                                        <div
                                        
                                            className={`position-relative listing-style1 ${
                                                selectedFiles.some((f) => f.id === file.id) ? "selected" : ""
                                            }`}
                                        >
                                            {/* Checkbox para seleccionar el archivo */}
                                          
                                            <div
                                                className={`selection-indicator ${
                                                    selectedFiles.some((f) => f.id === file.id) ? "selected" : ""
                                                }`}
                                            >
                                                {selectedFiles.some((f) => f.id === file.id) && (
                                                    <div className="checkmark">✓</div>
                                                )}
                                            </div>
                                            <img src={file.image_url} alt={file.name} className="w-100 h-auto rounded" />
                                            <div className="px-4 py-3">
                                                <h6 className="title">{truncateFileName(file.name, 15)}</h6>
                                                <p>{file.mime_type}</p>

                                                <div className="d-flex">
                                                    <a
                                                        href="#"
                                                        className="icon me-2"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Evitar la propagación del evento
                                                            handleEditFile(file);
                                                        }}
                                                    >
                                                        <FaPencil />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="icon"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Evitar la propagación del evento
                                                            setConfirmModalOpen(true);
                                                        }}
                                                    >
                                                        <FaRegTrashCan />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>

                        {/* Formulario de edición en el costado */}
                        <Col md={3} style={{ background: "#f8f9fa", padding: "20px" }}>
                            {editMode && editingFile && (
                                <>
                                    <Image src={editingFile.image_url} rounded className="mb-3 img-fluid" />
                                    <Form onSubmit={handleEditFile}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" value={data.name ?? ""} onChange={handleNameChange} />
                                            <InputError message={errors.name} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Alt Text</Form.Label>
                                            <Form.Control type="text" value={data.alt ?? ""} onChange={handleAltChange} />
                                            <InputError message={errors.alt} />
                                        </Form.Group>
                                        <PrimaryButton type="submit" disabled={processing}>
                                            Save Changes
                                        </PrimaryButton>
                                        <SecondaryButton className="ms-2" onClick={() => setEditMode(false)}>
                                            Cancel
                                        </SecondaryButton>
                                    </Form>
                                </>
                            )}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <PrimaryButton disabled={selectedFiles.length === 0 || processing} onClick={handleAssignToEntity}>
                        Assign to Entity
                    </PrimaryButton>
                    <SecondaryButton onClick={() => setModalOpen(false)}>Cancel</SecondaryButton>
                </Modal.Footer>
            </Modal>

            {/* Modal para añadir archivo */}
            <Modal show={modalAddOpen} centered onHide={() => setModalAddOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Arrastra y suelta una imagen aquí, o haz clic para seleccionar una.</p>
                        {data.file && (
                            <div>
                                <Image src={URL.createObjectURL(data.file)} rounded className="mb-3 img-fluid" />
                                <p>{data.file.name}</p>
                            </div>
                        )}
                    </div>
                    <PrimaryButton onClick={handleUpload} disabled={!data.file || processing}>
                        Save
                    </PrimaryButton>
                    <SecondaryButton className="ms-2" onClick={() => setModalAddOpen(false)}>
                        Cancel
                    </SecondaryButton>
                </Modal.Body>
            </Modal>
        </>
    );
}