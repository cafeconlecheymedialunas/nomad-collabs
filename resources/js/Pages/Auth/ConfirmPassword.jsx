import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { FaPlus, FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from "@/Components/InputError"; // Importa el componente InputError

export default function JobexperienceForm({ freelancer }) {
   

    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const [editingIndex, setEditingIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [currentJobexperience, setCurrentJobexperience] = useState({
        id: null,
        title: '',
        type: '',
        company: '',
        location: '',
        init_at: '',
        finish_at: '',
        description: '',
        current: false,
        freelancer_id: freelancer?.id ?? ''
    });

    // Abrir modal para agregar experiencia laboral
    const addJobexperience = () => {
        setCurrentJobexperience({
            id: null,
            title: '',
            type: '',
            company: '',
            location: '',
            init_at: '',
            finish_at: '',
            description: '',
            current: false,
            freelancer_id: freelancer?.id ?? ''
        });
        setEditingIndex(null);
        setModalOpen(true);
    };

    // Abrir modal para editar experiencia laboral
    const editJobexperience = (index) => {
        setCurrentJobexperience(freelancer.job_experiences[index]);
        setEditingIndex(index);
        setModalOpen(true);
    };

    // Guardar experiencia laboral (nuevo o edición)
    const saveJobexperience = (e) => {
        e.preventDefault();

        if (editingIndex === null) {
            // Agregar nuevo
            router.post(`/freelancer/${freelancer.id}/job-experience`, currentJobexperience, {
                onSuccess: (response) => {
                    setModalOpen(false); // Cerrar el modal
                },
                onError: (errors) => {
                    // Los errores de validación se manejan automáticamente
                    console.error("Error al crear la experiencia laboral:", errors);
                },
            });
        } else {
            // Editar existente
            router.put(`/freelancer/${freelancer.id}/job-experience/${currentJobexperience.id}`, currentJobexperience, {
                onSuccess: (response) => {
                    setModalOpen(false); // Cerrar el modal
                    console.log(response)
                },
                onError: (errors) => {
                    console.error("Error al actualizar la experiencia laboral:", errors);
                },
            });
        }
    };

    // Abrir modal de confirmación para eliminar experiencia laboral
    const openConfirmModal = (id) => {
        setCurrentJobexperience(freelancer.job_experiences.find(exp => exp.id === id));
        setConfirmModalOpen(true);
    };



    // Eliminar experiencia laboral después de confirmar
    const confirmRemoveJobexperience = () => {
        if (currentJobexperience.id) {
            router.delete(`/freelancer/${freelancer.id}/job-experience/${currentJobexperience.id}`, {
                onSuccess: (response) => {
                    setConfirmModalOpen(false); // Cerrar el modal de confirmación
                    console.log("Éxito");
                },
                onError: (errors) => {
                    console.error("Error al eliminar la experiencia laboral:", errors);
                },
            });
        }
    };

    // Manejar cambios en los inputs
    const handleChange = (field, value) => {
        setCurrentJobexperience((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
            <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                <h5 className="list-title">Job Experience</h5>
                <a href="#" className="add-more-btn text-thm" onClick={addJobexperience}>
                    <FaPlus /> Add Work
                </a>
            </div>

            <div className="position-relative">
                <div className="jobexperienceal-quality">
                    {freelancer.job_experiences && freelancer.job_experiences.map((jobexperience, index) => (
                        <div key={jobexperience.id}>
                            <div className="m-circle text-thm">M</div>
                            <div className="mb40 position-relative">
                                <div className="del-edit">
                                    <div className="d-flex">
                                        <a href="#" className="icon me-2" onClick={() => editJobexperience(index)}>
                                            <FaPencil />
                                        </a>
                                        <a href="#" className="icon" onClick={() => openConfirmModal(jobexperience.id)}>
                                            <FaRegTrashCan />
                                        </a>
                                    </div>
                                </div>

                                <span className="tag">
                                    {jobexperience.init_at && (() => {
                                        const [initYear, initMonth] = jobexperience.init_at.split("-");
                                        const [finishYear, finishMonth] = jobexperience.finish_at ? jobexperience.finish_at.split("-") : [];

                                        const initMonthText = monthNames[parseInt(initMonth, 10) - 1];
                                        const finishMonthText = finishMonth ? monthNames[parseInt(finishMonth, 10) - 1] : "";

                                        if (finishYear && initYear === finishYear) {
                                            return `${initMonthText} ${initYear} - ${finishMonthText} ${finishYear}`;
                                        }

                                        return `${initYear}${finishYear ? ` - ${finishYear}` : ""}`;
                                    })()}
                                </span>

                                <h5 className="mt15">{jobexperience.title}</h5>
                                <h6 className="text-thm">{jobexperience.company}</h6>
                                <p>{jobexperience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para agregar/editar experiencia laboral */}
            <Modal show={modalOpen} size="lg" centered onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingIndex !== null ? "Edit work" : "Add Work"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={saveJobexperience}>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentJobexperience?.title || ""}
                                        onChange={(e) => handleChange("title", e.target.value)}
                                        isInvalid={!!errors.title}
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Type of Job</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentJobexperience?.type || ""}
                                        onChange={(e) => handleChange("type", e.target.value)}
                                        isInvalid={!!errors.type}
                                    />
                                    <InputError message={errors.type} className="mt-2" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentJobexperience?.company || ""}
                                        onChange={(e) => handleChange("company", e.target.value)}
                                        isInvalid={!!errors.company}
                                    />
                                    <InputError message={errors.company} className="mt-2" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentJobexperience?.location || ""}
                                        onChange={(e) => handleChange("location", e.target.value)}
                                        isInvalid={!!errors.location}
                                    />
                                    <InputError message={errors.location} className="mt-2" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>Inish At</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={currentJobexperience?.init_at || ""}
                                        onChange={(e) => handleChange("init_at", e.target.value)}
                                        isInvalid={!!errors.init_at}
                                    />
                                    <InputError message={errors.init_at} className="mt-2" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <Form.Group>
                                    <Form.Label>¿It is your current work?</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        checked={currentJobexperience?.current || false}
                                        onChange={(e) => handleChange("current", e.target.checked)}
                                    />
                                </Form.Group>
                            </Col>
                            {!currentJobexperience?.current && (
                                <Col sm={6} className="mb-2">
                                    <Form.Group>
                                        <Form.Label>Finish at</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={currentJobexperience?.finish_at || ""}
                                            onChange={(e) => handleChange("finish_at", e.target.value)}
                                            isInvalid={!!errors.finish_at}
                                        />
                                        <InputError message={errors.finish_at} className="mt-2" />
                                    </Form.Group>
                                </Col>
                            )}
                        </Row>

                        <Form.Group className="mb-5">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={currentJobexperience?.description || ""}
                                onChange={(e) => handleChange("description", e.target.value)}
                                isInvalid={!!errors.description}
                            />
                            <InputError message={errors.description} className="mt-2" />
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

            {/* Modal de confirmación para eliminar experiencia laboral */}
            <Modal show={confirmModalOpen} centered onHide={() => setConfirmModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Estás seguro de que deseas eliminar esta experiencia laboral?</p>
                </Modal.Body>
                <Modal.Footer>
                    <PrimaryButton variant="danger" onClick={confirmRemoveJobexperience}>
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