use('ticketera');

//clientes
db.getCollection('clientes').insertMany([
    {

        nombre: "Hector",
        apellido: "Salvatore",
        email: "hectorsal@gmail.com",
        documento: 33465478,
        operario: false
        ,
        ubicacionInstalacion: {
            type: "Point",
            coordinates: [-73.856077, 40.848447]
        },
        plan:
        {
            nombre: "SuperPackFull",
            version: 2,
            canales: [
                'BA TV',
                'TELEFE',
                'El trece',
                'telecreativa',
            ]
        },
        localidad: {
            nombre: "Lanus",
            codigoPostal: 1824
        }
    }, {

        nombre: "Carlos",
        apellido: "Fernandez",
        email: "carosf@gmail.com",
        documento: 29465478,
        operario: true
        ,
        ubicacionInstalacion: {
            type: "Point",
            coordinates: [-75.856077, 42.848447]
        },
        plan:
        {
            nombre: "PackFull",
            version: 2,
            canales: [
                'BA TV',
                'El dos',
                'Canal 26',
            ]
        },
        localidad: {
            nombre: "Avellaneda",
            codigoPostal: 1823
        }
    },
])
//tickets
db.getCollection('tickets').insertMany([
    {
        fechaCreacion: '2023-01-01',
        cliente: {

            nombre: "Hector",
            apellido: "Salvatore",
            email: "hectorsal@gmail.com",
            documento: 33465478,
            ubicacionInstalacion: {
                type: "Point",
                coordinates: [-73.856077, 40.848447]
            },
            localidad: {
                nombre: "Lanus",
                codigoPostal: 1824
            }
        },
        estado: "Abierto",
        ubicacion: {
            type: "Point",
            coordinates: [-73.856077, 40.848447]
        },
        motivo: "Desperfecto",
        historial: [
            {
                fecha: '2023-01-01',
                area: "Atención al cliente",
                operarios: [
                    {
                        nombreyApellido: "Carlos Fernandez",
                        resultados: [
                            {
                                detalle: "Reinicio del router a distancia",
                                solucionado: true
                            }
                        ]
                    }
                ]
            }
        ],
        estadoFinalEvento: 'Resuelto',
        notas: 'Se le indica al usuario que se reinicio el modem y revise la conexión en minutos'
    },
    {
        fechaCreacion: '2023-01-10',
        cliente: {

            nombre: "Carlos",
            apellido: "Fernandez",
            email: "carosf@gmail.com",
            documento: 29465478,
            operario: true
            ,
            ubicacionInstalacion: {
                type: "Point",
                coordinates: [-75.856077, 42.848447]
            },
            plan:
            {
                nombre: "PackFull",
                version: 2,
                canales: [
                    'BA TV',
                    'El dos',
                    'Canal 26',
                ]
            },
            localidad: {
                nombre: "Avellaneda",
                codigoPostal: 1823
            }
        },
        estado: "Demorado",
        ubicacion: {
            type: "Point",
            coordinates: [-75.856077, 42.848447]
        },
        motivo: "Cambio de plan",
        historial: [
            {
                fecha: '2023-01-10',
                area: "Atención al cliente",
                operarios: [
                    {
                        nombreyApellido: "Carlos Fernandez",
                        resultados: [
                            {
                                detalle: "Cancelacion del plan realizada",
                                solucionado: true
                            }
                        ]
                    }
                ]
            }
        ],
        estadoFinalEvento: 'Resuelto',
        notas: 'Se reviso el estao  de la cuenta y se dio de baja el plan'
    },
]);

