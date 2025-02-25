import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import Checkbox from '@/Components/Checkbox';
import { FaTrash, FaPlus, FaGraduationCap, FaSchool, FaBook, FaCheckCircle, FaEdit, FaSave } from 'react-icons/fa';

export default function EducationForm({ freelancer, educations: existingEducations = [] }) {
    const { data, setData, patch, processing, errors } = useForm({
        freelancer_id: freelancer.id,
        educations: existingEducations.map(edu => ({
            id: edu.id, // Incluir el ID para identificar registros existentes
            type: edu.type,
            institution: edu.institution,
            title: edu.title,
            description: edu.description,
            finish: edu.finish,
        })) || [
            {
                type: '',
                institution: '',
                title: '',
                description: '',
                finish: false,
            },
        ],
    });

    // Estado para rastrear el education que se está editando
    const [editingIndex, setEditingIndex] = useState(null);

    // Agregar una nueva fila de educación
    const addEducation = () => {
        const newEducation = {
            type: '',
            institution: '',
            title: '',
            description: '',
            finish: false,
        };
    
        // Agregar la nueva educación al estado
        setData('educations', [...data.educations, newEducation]);
    
        // Establecer el índice de la nueva educación en modo edición
        setEditingIndex(data.educations.length);

     
    };

    // Eliminar una fila de educación
    const removeEducation = (index) => {
        const updatedEducations = data.educations.filter((_, i) => i !== index);
        setData('educations', updatedEducations);
    };

    // Actualizar los datos de una fila específica
    const handleEducationChange = (index, field, value) => {
        const updatedEducations = data.educations.map((education, i) =>
            i === index ? { ...education, [field]: value } : education
        );
        setData('educations', updatedEducations);
    };

    // Activar el modo de edición para un education específico
    const editEducation = (index) => {
        setEditingIndex(index);
    };

    // Guardar los cambios de un education específico
    const saveEducation = (index) => {
        const education = data.educations[index];

        // Enviar solo el education editado al backend
        patch(route('freelancer.education.update', {
            freelancer: freelancer.id, // Parámetro freelancer
            education: education.id,   // Parámetro education
        }), {
            education: education, // Datos del education que se están actualizando
            preserveScroll:true
        });

        // Desactivar el modo de edición
        setEditingIndex(null);
    };

    return (
        <form className="mt-6 space-y-6">
            {data.educations.map((education, index) => (
                <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                        {/* Contenido de la fila */}
                        <div className="grid grid-cols-3 gap-4 w-full">
                            {/* Tipo de educación */}
                            <div>
                                <InputLabel htmlFor={`type-${index}`} value="Type" />
                                <div className="flex items-center mt-1">
                                    <FaGraduationCap className="text-gray-500 mr-2" />
                                    <TextInput
                                        id={`type-${index}`}
                                        name={`educations[${index}].type`}
                                        className={`block w-full ${editingIndex !== index ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-900'}`}
                                        value={education.type}
                                        onChange={(e) => handleEducationChange(index, 'type', e.target.value)}
                                        disabled={editingIndex !== index} // Deshabilitar si no está en modo de edición
                                        required
                                    />
                                </div>
                                <InputError className="mt-2" message={errors[`educations.${index}.type`]} />
                            </div>

                            {/* Institución */}
                            <div>
                                <InputLabel htmlFor={`institution-${index}`} value="Institution" />
                                <div className="flex items-center mt-1">
                                    <FaSchool className="text-gray-500 mr-2" />
                                    <TextInput
                                        id={`institution-${index}`}
                                        name={`educations[${index}].institution`}
                                        className={`block w-full ${editingIndex !== index ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-900'}`}
                                        value={education.institution}
                                        onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                        disabled={editingIndex !== index} // Deshabilitar si no está en modo de edición
                                        required
                                    />
                                </div>
                                <InputError className="mt-2" message={errors[`educations.${index}.institution`]} />
                            </div>

                            {/* Título */}
                            <div>
                                <InputLabel htmlFor={`title-${index}`} value="Title" />
                                <div className="flex items-center mt-1">
                                    <FaBook className="text-gray-500 mr-2" />
                                    <TextInput
                                        id={`title-${index}`}
                                        name={`educations[${index}].title`}
                                        className={`block w-full ${editingIndex !== index ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-900'}`}
                                        value={education.title}
                                        onChange={(e) => handleEducationChange(index, 'title', e.target.value)}
                                        disabled={editingIndex !== index} // Deshabilitar si no está en modo de edición
                                        required
                                    />
                                </div>
                                <InputError className="mt-2" message={errors[`educations.${index}.title`]} />
                            </div>

                            {/* Descripción */}
                            <div className="mt-4">
                                <InputLabel htmlFor={`description-${index}`} value="Description" />
                                <TextArea
                                    id={`description-${index}`}
                                    name={`educations[${index}].description`}
                                    className={`mt-1 block w-full ${editingIndex !== index ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : 'bg-white text-gray-900'}`}
                                    value={education.description}
                                    onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                                    disabled={editingIndex !== index} // Deshabilitar si no está en modo de edición
                                />
                                <InputError className="mt-2" message={errors[`educations.${index}.description`]} />
                            </div>

                            {/* ¿Finalizado? */}
                            <div className="mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name={`educations[${index}].finish`}
                                        checked={education.finish}
                                        onChange={(e) => handleEducationChange(index, 'finish', e.target.checked)}
                                        disabled={editingIndex !== index} // Deshabilitar si no está en modo de edición
                                        className={`${editingIndex !== index ? 'text-gray-400' : 'text-blue-500'}`}
                                    />
                                    <FaCheckCircle className="text-gray-500 ml-2" />
                                    <span className="ml-2 text-sm text-gray-600">Finished</span>
                                </label>
                                <InputError className="mt-2" message={errors[`educations.${index}.finish`]} />
                            </div>
                        </div>

                        {/* Botones de acciones */}
                        <div className="flex items-center space-x-2">
                            {editingIndex === index ? (
                                // Botón para guardar cambios
                                <button
                                    type="button"
                                    onClick={() => saveEducation(index)}
                                    className="text-green-500 hover:text-green-700 flex items-center"
                                >
                                    <FaSave className="mr-2" />
                                    Save
                                </button>
                            ) : (
                                // Botón para editar
                                <button
                                    type="button"
                                    onClick={() => editEducation(index)}
                                    className="text-blue-500 hover:text-blue-700 flex items-center"
                                >
                                    <FaEdit className="mr-2" />
                                    Edit
                                </button>
                            )}
                            {/* Botón para eliminar la fila */}
                            <button
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="text-red-500 hover:text-red-700 flex items-center"
                            >
                                <FaTrash className="mr-2" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Botón para agregar una nueva fila */}
            <div>
                <button
                    type="button"
                    onClick={addEducation}
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                    <FaPlus className="mr-2" />
                    Add Education
                </button>
            </div>
        </form>
    );
}