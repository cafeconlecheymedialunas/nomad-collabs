import React, { useState } from "react";
import { FaRegTrashAlt, FaEdit, FaSave } from "react-icons/fa";
import { Form } from "react-bootstrap";

export default function SkillLevelForm({ freelancer, skills ,errors}) {
    // Estado para las habilidades del freelancer
    const [skillLevels, setSkillLevels] = useState(freelancer.skill_levels || []);

    // Estado para el formulario de agregar/editar
    const [newSkill, setNewSkill] = useState({ skill_id: "", level: "beginner" });
    const [editingIndex, setEditingIndex] = useState(null); // Índice de la habilidad en edición

    // Niveles de habilidad disponibles
    const skillLevelOptions = ["beginner", "intermediate", "advanced"];

    // Función para agregar o actualizar una habilidad
    const handleAddOrUpdateSkill = () => {
        if (newSkill.skill_id === "") {
            alert("Por favor, selecciona una habilidad.");
            return;
        }

        if (editingIndex !== null) {
            // Editar habilidad existente
            setSkillLevels((prevState) =>
                prevState.map((skill, index) =>
                    index === editingIndex ? newSkill : skill
                )
            );
            setEditingIndex(null); // Salir del modo edición
        } else {
            // Agregar nueva habilidad
            setSkillLevels((prevState) => [...prevState, newSkill]);
        }

        // Limpiar el formulario
        setNewSkill({ skill_id: "", level: "beginner" });
    };

    // Función para eliminar una habilidad
    const deleteSkill = (skillId) => {
        setSkillLevels((prevState) =>
            prevState.filter((skill) => skill.skill_id !== skillId)
        );
    };

    // Función para editar una habilidad
    const editSkill = (index) => {
        const skillToEdit = skillLevels[index];
        setNewSkill(skillToEdit); // Llenar el formulario con los datos de la habilidad
        setEditingIndex(index); // Entrar en modo edición
    };

    return (
        <div className="ps-widget bgc-white bdrs4 p30 mb30">
            <div className="bdrb1 pb15 mb25">
                <h5 className="list-title">Skills</h5>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <form className="form-style1">
                        {/* Formulario para agregar/editar habilidades */}
                        <div className="row align-items-center mb-3">
                            <div className="col-sm-5">
                                <Form.Select
                                    value={newSkill.skill_id}
                                    onChange={(e) =>
                                        setNewSkill({ ...newSkill, skill_id: e.target.value })
                                    }
                                >
                                    <option value="">Selecciona una habilidad</option>
                                    {skills.map((skill) => (
                                        <option key={skill.id} value={skill.id}>
                                            {skill.title}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className="col-sm-5">
                                <Form.Select
                                    value={newSkill.level}
                                    onChange={(e) =>
                                        setNewSkill({ ...newSkill, level: e.target.value })
                                    }
                                >
                                    {skillLevelOptions.map((level) => (
                                        <option key={level} value={level}>
                                            {level.charAt(0).toUpperCase() + level.slice(1)}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className="col-sm-2">
                                <button
                                    type="button"
                                    className="btn btn-primary w-100"
                                    onClick={handleAddOrUpdateSkill}
                                >
                                    {editingIndex !== null ? <FaSave /> : "Agregar"}
                                </button>
                            </div>
                        </div>

                        {/* Lista de habilidades */}
                        {skillLevels.map((skill_level, index) => (
                            <div className="row align-items-center mb-3" key={index}>
                                <div className="col-sm-5">
                                    <strong>
                                        {skills.find((skill) => skill.id === skill_level.skill_id)?.title}
                                    </strong>
                                </div>
                                <div className="col-sm-5">
                                    <span>
                                        {skill_level.level}
                                    </span>
                                </div>
                                <div className="col-sm-2">
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="btn btn-link icon"
                                            onClick={() => editSkill(index)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-link icon"
                                            onClick={() => deleteSkill(skill_level.id)}
                                        >
                                            <FaRegTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Botón de guardar */}
                        <div className="col-md-12">
                            <div className="text-start">
                                <button type="button" className="ud-btn btn-thm">
                                    Save <i className="fal fa-arrow-right-long" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}