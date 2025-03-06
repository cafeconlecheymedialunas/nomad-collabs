import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { FaPlus, FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";

export default function EducationForm({ freelancer }) {
    const { errors } = usePage().props;

    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const [editingIndex, setEditingIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [currentEducation, setCurrentEducation] = useState({
        id: null,
        type: '',
        institution: '',
        title: '',
        description: '',
        finished: false,
        init_at: '',
        finish_at: '',
        freelancer_id: freelancer?.id ?? ''
    });

    // Abrir modal para agregar educación
    const addEducation = () => {
        setCurrentEducation({
            id: null,
            type: '',
            institution: '',
            title: '',
            description: '',
            finished: false,
            init_at: '',
            finish_at: '',
            freelancer_id: freelancer?.id ?? ''
        });
        setEditingIndex(null);
        setModalOpen(true);
    };

    // Abrir modal para editar educación
    const editEducation = (index) => {
        setCurrentEducation(freelancer.educations[index]);
        setEditingIndex(index);
        setModalOpen(true);
    };

    // Guardar educación (nuevo o edición)
    const saveEducation = (e) => {
        e.preventDefault();
        

        if (editingIndex === null) {
            // Agregar nuevo
            router.post(`/freelancer/${freelancer.id}/education`, currentEducation, {
                onSuccess: (response) => {
                    setModalOpen(false); // Cerrar el modal
                },
                onError: (errors) => {
                    // Los errores de validación se manejan automáticamente
                    console.error("Error al crear la educación:", errors);
                },
            });
        } else {
            // Editar existente
            router.put(`/freelancer/${freelancer.id}/education/${currentEducation.id}`, currentEducation, {
                onSuccess: (response) => {
                    setModalOpen(false); // Cerrar el modal
                    console.log("Exito");
                },
                onError: (errors) => {
                    console.error("Error al actualizar la educación:", errors);
                },
            });
        }
    };

    // Abrir modal de confirmación para eliminar educación
    const openConfirmModal = (id) => {
        setCurrentEducation(freelancer.educations.find(edu => edu.id === id));
        setConfirmModalOpen(true);
    };

    // Eliminar educación después de confirmar
    const confirmRemoveEducation = () => {
        if (currentEducation.id) {
            router.delete(`/freelancer/${freelancer.id}/education/${currentEducation.id}`, {
                onSuccess: (response) => {
                    setConfirmModalOpen(false); // Cerrar el modal de confirmación
                    console.log("Exito");
                },
                onError: (errors) => {
                    console.error("Error al eliminar la educación:", errors);
                },
            });
        }
    };

    // Manejar cambios en los inputs
    const handleChange = (field, value) => {
        setCurrentEducation((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
            <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                <h5 className="list-title">Education</h5>
                <a href="#" className="add-more-btn text-thm" onClick={addEducation}>
                    <FaPlus /> Add Education
                </a>
            </div>

            <div className="position-relative">
                <div className="educational-quality">
                    {freelancer.educations.map((education, index) => (
                        <div key={education.id}>
                            <div className="m-circle text-thm">M</div>
                            <div className="mb40 position-relative">
                                <div className="del-edit">
                                    <div className="d-flex">
                                        <a href="#" className="icon me-2" onClick={() => editEducation(index)}>
                                            <FaPencil />
                                        </a>
                                        <a href="#" className="icon" onClick={() => openConfirmModal(education.id)}>
                                            <FaRegTrashCan />
                                        </a>
                                    </div>
                                </div>

                                <span className="tag">
                                    {education.init_at && (() => {
                                        const [initYear, initMonth] = education.init_at.split("-");
                                        const [finishYear, finishMonth] = education.finish_at ? education.finish_at.split("-") : [];

                                        const initMonthText = monthNames[parseInt(initMonth, 10) - 1];
                                        const finishMonthText = finishMonth ? monthNames[parseInt(finishMonth, 10) - 1] : "";

                                        if (finishYear && initYear === finishYear) {
                                            return `${initMonthText} ${initYear} - ${finishMonthText} ${finishYear}`;
                                        }

                                        return `${initYear}${finishYear ? ` - ${finishYear}` : ""}`;
                                    })()}
                                </span>

                                <h5 className="mt15">{education.title}</h5>
                                <h6 className="text-thm">{education.institution}</h6>
                                <p>{education.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para agregar/editar educación */}
            <Modal show={modalOpen} size="lg" centered onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingIndex !== null ? "Edit Education" : "Add Education"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={saveEducation}>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Type of Degree</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentEducation?.type || ""}
                                        onChange={(e) => handleChange("type", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Institution</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentEducation?.institution || ""}
                                        onChange={(e) => handleChange("institution", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentEducation?.title || ""}
                                        onChange={(e) => handleChange("title", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={currentEducation?.init_at || ""}
                                        onChange={(e) => handleChange("init_at", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Finished?</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        checked={currentEducation?.finished || false}
                                        onChange={(e) => handleChange("finished", e.target.checked)}
                                    />
                                </Form.Group>
                            </Col>
                            {currentEducation?.finished && (
                                <Col sm={6} className="mb-2">
                                    <Form.Group>
                                        <Form.Label>Finish Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={currentEducation?.finish_at || ""}
                                            onChange={(e) => handleChange("finish_at", e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            )}
                        </Row>

                        <Form.Group className="mb-5">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={currentEducation?.description || ""}
                                onChange={(e) => handleChange("description", e.target.value)}
                            />
                        </Form.Group>

                        <div className="mt-3 d-flex gap-3">
                            <PrimaryButton type="submit">Save</PrimaryButton>
                            <SecondaryButton type="button" onClick={() => setModalOpen(false)}>
                                Cancel
                            </SecondaryButton>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Modal de confirmación para eliminar educación */}
            <Modal show={confirmModalOpen} centered onHide={() => setConfirmModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this education?</p>
                </Modal.Body>
                <Modal.Footer>
                    <PrimaryButton variant="danger" onClick={confirmRemoveEducation}>
                        Delete
                    </PrimaryButton>
                    <SecondaryButton onClick={() => setConfirmModalOpen(false)}>
                        Cancel
                    </SecondaryButton>
                </Modal.Footer>
            </Modal>
        </div>
    );
}