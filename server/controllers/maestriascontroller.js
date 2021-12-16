const { response } = require("express");


//CARGAMOS EL MODELO DE DATOS
const Maestrias = require('../models/Maestrias');

const maestriaController = {};

//Obtener todos los Maestrias
maestriaController.getMaestrias = async(req, res) => {
    const maestrias = await Maestrias.find();
    res.json(maestrias);

}


//CREAR UN maestria
maestriaController.createMaestria = async(req, res) => {
    //el objeto request.body, contiene la información del docente a crear
    //console.log(req.body); 
    //res.json("Recibido");
    const maestria = new Maestrias({
        nombre_maestria: req.body.nombre_maestria,
        abreviatura_maestria: req.body.abreviatura_maestria,
        general: {
            GObjetivoGeneral: req.body.GObjetivoGeneral,
            GObjetivosEspecificos: req.body.GObjetivosEspecificos,
            GMetas: req.body.GMetas,
            GPerfil_ingreso: {
                GPI_start: req.body.GPI_start,
                GPI_conocimientos_basicos: req.body.GPI_conocimientos_basicos,
                GPI_conocimientos_habilidades: req.body.GPI_conocimientos_habilidades,
                GPI_conocimientos_aptitudes_valores: req.body.GPI_conocimientos_aptitudes_valores,
            },
            GPerfil_egreso: {
                GPE_start: req.body.GPE_start,
                GPE_capacidades: req.body.GPE_capacidades,
                GPE_competencias: req.body.GPE_competencias,
                GPE_conocimientos: req.body.GPE_conocimientos,
                GPE_habiliades: req.body.GPE_habiliades,
                GPE_aptitudes: req.body.GPE_aptitudes
            },
            GPlanesEstudio: {
                GPES_objetivo_general: req.body.GPES_objetivo_general,
                GPES_objetivos_especificos: req.body.GPES_objetivos_especificos,
                GPES_metas: {
                    GPES_star: req.body.GPES_star,
                    GPES_metas: req.body.GPES_metas,
                    GPES_mision: req.body.GPES_mision,
                    GPES_vision: req.body.GPES_vision
                },
                GPES_asignaturas_basicas: {
                    GPESAB_datos: req.body.GPESAB_datos
                },
                GPES_asignaturas_optativas: {
                    GPESAOdatos: req.body.GPESAOdatos
                },
                GPES_seminario_tesis: req.body.GPES_seminario_tesis
            },
            GLGAC: req.body.GLGAC,
            GProceso_seleccion_aspirantes: {
                GPSA_requisitos: {
                    GPSA_start: req.body.GPSA_start,
                    GPSA_requisitos: req.body.GPSA_requisitos

                }
            },
            GCaracteristicas_tesis: {
                GCT_start: req.body.GCT_start,
                GCT_requisitos: req.body.GCT_requisitos

            },
        },
        procesos_administrativos: {
            PARequisitos_ingreso: {
                PARI_start: req.body.PARI_start,
                PARI_requisitos: req.body.PARI_requisitos,
                PARI_documentacion_start: req.body.PARI_documentacion_start,
                PARI_documentos: req.body.PARI_documentos

            },
            PARequisitos_permanencia: {
                PARP_start: req.body.PARP_start,
                PARP_requisitos: req.body.PARP_requisitos,
            },
            PARequisitos_egreso: {
                PARE_start: req.body.PARE_start,
                PARE_requisitos: req.body.PARE_requisitos,
                PARE_obtencion_grado_start: req.body.PARE_obtencion_grado_start,
                PARE_obtencion_grado_requisitos: req.body.PARE_obtencion_grado_requisitos
            },
            PABecas: {
                PAB_start: req.body.PAB_start,
                PAB_requisitos: req.body.PAB_requisitos
            },
            PADescargas: req.body.PADescargas

        },
        docentes: {
            NADocentes: req.body.NADocentes
        }

        ,
        Estudiantes: {

            Estudiante: req.body.Estudiante

        },
        vinculacion: {
            VInformacion: req.body.VInformacion,
            VConvenios: req.body.VConvenios
        },
        contacto: {
            CTelefonos: req.body.CTelefonos,
            CRedes: req.body.CRedes,
            CDireccion: req.body.CDireccion
        },
        normas_estatutos: {
            NEInformacion: req.body.NEInformacion


        }

    });
    await maestria.save();
    res.json({
        'status': 'Maestria Guardada',
        "enviado": maestria
    })

}


//ACTUALIZAR UN maestria
maestriaController.updateMaestria = async(req, res) => {
    const { id } = req.params;
    const maestria = {
        nombre_maestria: req.body.nombre_maestria,
        abreviatura_maestria: req.body.abreviatura_maestria,
        general: {
            GPerfil_ingreso: {
                GPI_start: req.body.GPI_start,
                GPI_conocimientos_basicos: req.body.GPI_conocimientos_basicos,
                GPI_conocimientos_habilidades: req.body.GPI_conocimientos_habilidades,
                GPI_conocimientos_aptitudes_valores: req.body.GPI_conocimientos_aptitudes_valores,
            },
            GPerfil_egreso: {
                GPE_start: req.body.GPE_start,
                GPE_capacidades: req.body.GPE_capacidades,
                GPE_competencias: req.body.GPE_competencias,
                GPE_conocimientos: req.body.GPE_conocimientos,
                GPE_habiliades: req.body.GPE_habiliades,
                GPE_aptitudes: req.body.GPE_aptitudes
            },
            GPlanesEstudio: {
                GPES_objetivo_general: req.body.GPES_objetivo_general,
                GPES_objetivos_especificos: req.body.GPES_objetivos_especificos,
                GPES_metas: {
                    GPES_star: req.body.GPES_star,
                    GPES_metas: req.body.GPES_metas,
                    GPES_mision: req.body.GPES_mision,
                    GPES_vision: req.body.GPES_vision
                },
                GPES_asignaturas_basicas: {
                    GPESAB_datos: req.body.GPESAB_datos
                },
                GPES_asignaturas_optativas: {
                    GPESAOdatos: req.body.GPESAOdatos
                }
            },
            GLGAC: req.body.GLGAC,
            GProceso_seleccion_aspirantes: {
                GPSA_requisitos: {
                    GPSA_start: req.body.GPSA_start,
                    GPSA_requisitos: req.body.GPSA_requisitos

                }
            },
            GCaracteristicas_tesis: {
                GCT_start: req.body.GCT_start,
                GCT_requisitos: req.body.GCT_requisitos

            },
        },
        procesos_administrativos: {
            PARequisitos_ingreso: {
                PARI_start: req.body.PARI_start,
                PARI_requisitos: req.body.PARI_requisitos,
                PARI_documentacion_start: req.body.PARI_documentacion_start,
                PARI_documentos: req.body.PARI_documentos

            },
            PARequisitos_permanencia: {
                PARP_start: req.body.PARP_start,
                PARP_requisitos: req.body.PARP_requisitos,
            },
            PARequisitos_egreso: {
                PARE_start: req.body.PARE_start,
                PARE_requisitos: req.body.PARE_requisitos,
                PARE_obtencion_grado_start: req.body.PARE_obtencion_grado_start,
                PARE_obtencion_grado_requisitos: req.body.PARE_obtencion_grado_requisitos
            },
            PABecas: {
                PAB_start: req.body.PAB_start,
                PAB_requisitos: req.body.PAB_requisitos
            },
            PADescargas: req.body.PADescargas

        },
        docentes: {
            NADocentes: req.body.NADocentes
        }

        ,
        Estudiantes: {

            Estudiante: req.body.Estudiante

        },
        vinculacion: {
            VInformacion: req.body.VInformacion,
            VConvenios: req.body.VConvenios
        },
        contacto: {
            CTelefonos: req.body.CTelefonos,
            CRedes: req.body.CRedes,
            CDireccion: req.body.CDireccion
        },
        normas_estatutos: {
            NEInformacion: req.body.NEInformacion


        }

    };

    //console.log(id);
    //console.log(maestria);
    await Maestrias.findByIdAndUpdate(id, { $set: maestria }, { new: true });
    res.json({
        status: 'maestria actualizado correctamente'
    })
}

//Consultar un maestria
maestriaController.getMaestria = async(req, res) => {
    //obtener el id de la peticion
    //el objeto re.params contiene el id que se va a enviar
    //console.log(req.params);
    //res.json(Recibido);
    const maestria = await Maestrias.findById(req.params.id);
    res.json(maestria);
}

//ELIMINAR UNE maestria
maestriaController.deleteMaestria = async(req, res) => {
    const { id } = req.params;
    await Maestrias.findByIdAndDelete(id);
    res.json({
        status: 'maestria eliminado correctamente'
    })
}

//exportamos emleados.controller
module.exports = maestriaController;