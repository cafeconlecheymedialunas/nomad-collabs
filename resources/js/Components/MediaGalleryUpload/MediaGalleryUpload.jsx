import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import "./media-gallery.css";
import InputError from "../InputError";
import { FaClosedCaptioning, FaMinus, FaPencil, FaRegTrashCan } from "react-icons/fa6";

export default function MediaGalleryUpload({ files, relatedEntityType, relatedEntityId, errors, fileMimeType }) {

    const { data, setData, post, put, delete: destroy, processing } = useForm({
        file: null,
        file_id: null,
        alt: "",
        fileable_id: relatedEntityId,
        fileable_type: relatedEntityType,
        type: "cover",
        file_mime_type: fileMimeType
    });

    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [formOpened, setFormOpened] = useState(false); // Controla la visibilidad del formulario
    const [editMode, setEditMode] = useState(false); // Modo de edición
    const [editingFile, setEditingFile] = useState(null); // Archivo que se está editando

    /** Maneja la selección de archivos */
    const handleFileChange = (e) => setData("file", e.target.files[0]);
    const handleAltChange = (e) => setData("alt", e.target.value);
    const handleNameChange = (e) => setData("name", e.target.value);

    const handleSelectFile = (file) => {
        setData("file_id", data.file_id === file.id ? null : file.id);
    };

    /** Subir archivo */
    const handleUpload = (e) => {
        e.preventDefault();
        if (editMode) {
            const { file_id, name, alt } = data;
            put(route("files.update", file_id), {
                data: { file_id, name, alt },
                preserveScroll: true,
                onSuccess: () => {
                    setData("file_id", null);
                    setEditMode(false);
                    setEditingFile(null);
                },
                onError: (errors) => console.log("Error al actualizar:", errors),
            });
        } else {
            post(route("files.upload"), {
                preserveScroll: true,
                data: data,
                onSuccess: () => {
                    setData({ ...data, file: null, alt: "" });
                    setFormOpened(false); // Oculta el formulario tras la subida
                },
                onError: (errors) => console.log("Error al subir:", errors),
            });
        }
    };

    /** Eliminar archivo */
    const handleDelete = () => {
        if (!data.file_id) return;
        destroy(route("files.destroy", data.file_id), {
            preserveScroll: true,
            onSuccess: () => {
                setConfirmModalOpen(false);
                setData("file_id", null);
            },
            onError: (errors) => console.log("Error al eliminar:", errors),
        });
    };

    /** Asignar archivo a entidad */
    const assignToEntity = () => {
        const { file_id, fileable_id, fileable_type, type, alt } = data;
        post(route("files.assign"), {
            data: { file_id, fileable_id, fileable_type, type, alt },
            preserveScroll: true,
            onSuccess: () => {
                setData("file_id", null);
                setModalOpen(false);
            },
            onError: (errors) => console.log("Error al asignar:", errors),
        });
    };

    const truncateFileName = (name, maxLength = 10) => {
        if (name.length <= maxLength) return name;

        const extension = name.split(".").pop(); // Extraer extensión
        const nameWithoutExt = name.substring(0, name.lastIndexOf(".")); // Nombre sin extensión

        return `${nameWithoutExt.substring(0, maxLength)}...${extension}`;
    };

    const handleEditFile = (file) => {
        setEditMode(true);
        setEditingFile(file);
        setData({
            ...data,
            file_id: file.id,
            name: file.name,
            alt: file.alt,
        });
        setFormOpened(true);
    };

    return (
        <>
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
                </Modal.Header>
                <Modal.Body className="py-0">


                    <Row>
                        <Col sm={9}>
                            <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                                <h3 className="list-title">Media Gallery</h3>
                                <button
                                    className="add-more-btn text-thm btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setModalAddOpen(!modalAddOpen);
                                        setEditMode(false);
                                        setEditingFile(null);
                                    }}
                                >
                                    <FaPlus /> Add file
                                </button>
                            </div>
                            {/* Lista de archivos */}
                            <div className="row">
                                {files && files.map((file) => (
                                    <div key={file.id} className="col-sm-6 col-lg-4 col-xl-3">
                                        <div
                                            className={`position-relative listing-style1 ${data.file_id === file.id ? 'selected' : ''}`}
                                            onClick={(e) => handleSelectFile(file)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={file.image_url} alt={file.name} className="w-100 h-auto rounded" />
                                            <div className="px-4 py-3">
                                                <h6 className="title">{truncateFileName(file.name, 15)}</h6>
                                                <p>{file.mime_type}</p>
                                                <div className="del-edit position-static">
                                                    <div className="d-flex justify-content-end">
                                                        <a href="#" className="icon me-2 d-flex justify-content-center align-items-center" onClick={(e) => { e.stopPropagation(); handleEditFile(file); }}>
                                                            <FaPencil />
                                                        </a>
                                                        <a href="#" className="icon d-flex justify-content-center align-items-center" onClick={(e) => {
                                                            e.stopPropagation(); // Evita la propagación del evento al div contenedor
                                                            setConfirmModalOpen(true);
                                                            setData("file_id", file.id); // Solo selecciona para eliminar
                                                        }}>
                                                            <FaRegTrashCan size={30} className="p-1" disabled={processing} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col md={3} style={{ background: "#ccc" }}>
                            <form onSubmit={handleUpload} className="mb-4">
                                <Image src={file.image_url} rounded />
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={data.name}
                                        onChange={handleNameChange}
                                    />
                                    <InputError message={errors.name} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Image Alt Text</Form.Label>
                                    <Form.Control type="text" onChange={handleAltChange} value={data.alt} />
                                    {errors.alt && <InputError message={errors.alt} />}
                                </Form.Group>

                                <PrimaryButton type="submit" className="px-3 py-1 me-2" disabled={processing}>Upload</PrimaryButton>
                                <SecondaryButton className="px-3 py-1" onClick={(e) => { e.preventDefault(); setFormOpened(false); setEditMode(false); setEditingFile(null); }}>Cancel</SecondaryButton>
                            </form>
                        </Col>
                    </Row>







                </Modal.Body>
                <Modal.Footer className="d-flex align-items-center media-gallery-files">
                    <PrimaryButton disabled={!data.file_id || processing} onClick={assignToEntity}>
                        Asignar a la entidad
                    </PrimaryButton>
                    <SecondaryButton onClick={() => setModalOpen(false)}>Cancelar</SecondaryButton>
                </Modal.Footer>
            </Modal>
            {"Add File Modal Form"}
            <Modal show={modalAddOpen} centered onHide={() => setModalAddOpen(false)}>
                <Modal.Header closeButton>
                    Add File
                </Modal.Header>
                <Modal.Body>



                    <form onSubmit={handleUpload} className="mb-4">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={data.name}
                                onChange={handleNameChange}
                            />
                            <InputError message={errors.name} />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Image Alt Text</Form.Label>
                            <Form.Control type="text" onChange={handleAltChange} value={data.alt} />
                            {errors.alt && <InputError message={errors.alt} />}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control disabled={editMode} type="file" onChange={handleFileChange} />
                            {errors.file && <InputError message={errors.file} />}
                        </Form.Group>

                        <PrimaryButton type="submit" className="px-3 py-1 me-2" disabled={processing}>Upload</PrimaryButton>
                        <SecondaryButton className="px-3 py-1" onClick={(e) => { e.preventDefault(); setFormOpened(false); setEditMode(false); setEditingFile(null); }}>Cancel</SecondaryButton>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
}