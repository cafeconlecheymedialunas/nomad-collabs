import React, { useState, useCallback } from "react";
import { useForm } from "@inertiajs/react";
import { FaPlus, FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import PrimaryButton from "@/Components/PrimaryButton";

export default function EducationForm({ freelancer, educations: existingEducations = [] }) {
    const { data, setData, post, put, destroy, processing, errors } = useForm({
        freelancer_id: freelancer?.id ?? '',
        educations: existingEducations.map(edu => ({
            id: edu.id || null,
            type: edu.type || '',
            institution: edu.institution || '',
            title: edu.title || '',
            description: edu.description || '',
            finish: edu.finish || false,
            init_at: edu.init_at || '',
            finish_at: edu.finish_at || '',
        })),
    });

    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const [editingIndex, setEditingIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentEducation, setCurrentEducation] = useState(null);

    // Función para abrir modal y preparar el estado
    const openModal = useCallback((index = null) => {
        setEditingIndex(index);
        setCurrentEducation(index === null ? {
            id: null,
            type: '',
            institution: '',
            title: '',
            description: '',
            finish: false,
            init_at: '',
            finish_at: '',
        } : { ...data.educations[index] });
        setModalOpen(true);
    }, [data]);

    // Función para cerrar el modal
    const closeModal = () => setModalOpen(false);

    // Función común para actualizar educaciones
    const updateEducations = useCallback((educations) => {
        setData("educations", educations);
    }, [setData]);

    // Guardar educación (nuevo o edición)
    const saveEducation = (e) => {
        e.preventDefault();

        const routeName = editingIndex === null ? "freelancer.education.store" : "freelancer.education.update";
        const routeParams = editingIndex === null
            ? { freelancer: freelancer?.id }
            : { freelancer: freelancer?.id, education: currentEducation.id };

        const method = editingIndex === null ? post : put;

        method(route(routeName, routeParams), {
            data: currentEducation,
            preserveScroll: true,
            onSuccess: (response) => {
                updateEducations(response.props.educations);
                closeModal();
            },
        });
    };

    // Eliminar educación
    const removeEducation = (index, id) => {
        if (!window.confirm("Are you sure you want to delete this education?")) return;

        destroy(route("freelancer.education.destroy", { freelancer: freelancer?.id, education: id }), {
            preserveScroll: true,
            onSuccess: (response) => {
                updateEducations(response.props.educations);
            },
        });
    };

    // Manejar cambios en los inputs
    const handleChange = (field, value) => {
        setCurrentEducation((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
            <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                <h5 className="list-title">Education</h5>
                <a href="#" className="add-more-btn text-thm" onClick={() => openModal()}>
                    <FaPlus /> Add Education
                </a>
            </div>

            <div className="position-relative">
                <div className="educational-quality">
                    {data.educations.map((education, index) => (
                        <div key={education.id}>
                            <div className="m-circle text-thm">M</div>
                            <div className="mb40 position-relative">
                                <div className="del-edit">
                                    <div className="d-flex">
                                        <a href="#" className="icon me-2" onClick={() => openModal(index)}>
                                            <FaPencil />
                                        </a>
                                        <a href="#" className="icon" onClick={() => removeEducation(index, education.id)}>
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

            <Modal show={modalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingIndex === null ? "Add Education" : "Edit Education"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveEducation}>
                        <Row>
                            <Col xs={12} sm={6}>
                                <Form.Group>
                                    <Form.Label>Institution</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentEducation?.institution || ''}
                                        onChange={(e) => handleChange("institution", e.target.value)}
                                    />
                                    {errors.institution && <span className="text-danger">{errors.institution}</span>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={currentEducation?.title || ''}
                                        onChange={(e) => handleChange("title", e.target.value)}
                                    />
                                    {errors.title && <span className="text-danger">{errors.title}</span>}
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        value={currentEducation?.description || ''}
                                        onChange={(e) => handleChange("description", e.target.value)}
                                    />
                                    {errors.description && <span className="text-danger">{errors.description}</span>}
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={currentEducation?.init_at || ''}
                                        onChange={(e) => handleChange("init_at", e.target.value)}
                                    />
                                    {errors.init_at && <span className="text-danger">{errors.init_at}</span>}
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label>Finish Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={currentEducation?.finish_at || ''}
                                        onChange={(e) => handleChange("finish_at", e.target.value)}
                                    />
                                    {errors.finish_at && <span className="text-danger">{errors.finish_at}</span>}
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <Form.Check
                                    type="checkbox"
                                    label="Finished"
                                    checked={currentEducation?.finish || false}
                                    onChange={(e) => handleChange("finish", e.target.checked)}
                                />
                            </Col>
                        </Row>

                        <div className="mt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                {editingIndex === null ? "Save Education" : "Update Education"}
                            </PrimaryButton>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
