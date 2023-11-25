use('ticketera');

// canales
db.getCollection('canales').insertMany([
    { nombre: 'BA TV', numeroCanal: 10 },
    { nombre: 'TELEFE', numeroCanal: 11 },
    { nombre: 'El trece', numeroCanal: 13 },
    { nombre: 'telecreativa', numeroCanal: 5 },
    { nombre: 'Canal 26', numeroCanal: 26 }
]);
db.getCollection('planes').insertMany([
    {
        nombre: "normal",
        version: 1,
        canales: [
            { nombre: 'BA TV', numeroCanal: 10 },
            { nombre: 'TELEFE', numeroCanal: 11 },
            { nombre: 'El trece', numeroCanal: 13 }
        ]
    },
    {
        nombre: "SuperPack1",
        version: 1,
        canales: [
            { nombre: 'BA TV', numeroCanal: 10 },
            { nombre: 'TELEFE', numeroCanal: 11 },
            { nombre: 'El trece', numeroCanal: 13 },
        ]
    },
    {
        nombre: "SuperPackFull",
        version: 1,
        canales: [
            { nombre: 'BA TV', numeroCanal: 10 },
            { nombre: 'TELEFE', numeroCanal: 11 },
            { nombre: 'El trece', numeroCanal: 13 },
            { nombre: 'Canal 26', numeroCanal: 26 }
        ]
    },
    {
        nombre: "SuperPackFull",
        version: 2,
        canales: [
            { nombre: 'BA TV', numeroCanal: 10 },
            { nombre: 'TELEFE', numeroCanal: 11 },
            { nombre: 'El trece', numeroCanal: 13 },
            { nombre: 'telecreativa', numeroCanal: 5 },
        ]
    }
]);
//localidad
db.getCollection('localidades').insertMany([
    {
        nombre: "Lanus",
        codigoPostal: 1824
    },
    {
        nombre: "Avellaneda",
        codigoPostal: 1823
    }
]);
//oficina
db.getCollection('oficinas').insertMany([
    {
        direccion: "falsa 123",
        ubicacion: {
            type: "Point",
            coordinates: [-73.856077, 40.848447]
        },
        tipo: "Atención al cliente"
    }, {
        direccion: "falsa 245",
        ubicacion: {
            type: "Point",
            coordinates: [-72.856077, -42.848447]
        },
        tipo: "Servicio técnico"
    }
]);
//usuario
db.getCollection('usuarios').insertMany([
    {
        nombre: "Hector",
        apellido: "Salvatore",
        email: "hectorsal@gmail.com",
        documento: 33465478
    },
    {
        nombre: "Carlos",
        apellido: "Fernandez",
        email: "carosf@gmail.com",
        documento: 29465478
    },
    {
        nombre: "Hernan",
        apellido: "Fernandez",
        email: "hernanf@gmail.com",
        documento: 29465578
    }
]);
//clientes
db.getCollection('clientes').insertMany([
    {
        usuario: {
            nombre: "Hector",
            apellido: "Salvatore",
            email: "hectorsal@gmail.com",
            documento: 33465478,
            operario: false
        },
        ubicacionInstalacion: {
            type: "Point",
            coordinates: [-73.856077, 40.848447]
        },
        planes: [
            {
                nombre: "SuperPackFull",
                version: 2,
                canales: [
                    { nombre: 'BA TV', numeroCanal: 10 },
                    { nombre: 'TELEFE', numeroCanal: 11 },
                    { nombre: 'El trece', numeroCanal: 13 },
                    { nombre: 'telecreativa', numeroCanal: 5 },
                ]
            },
            {
                nombre: "normal",
                version: 1,
                canales: [
                    { nombre: 'BA TV', numeroCanal: 10 },
                    { nombre: 'TELEFE', numeroCanal: 11 },
                    { nombre: 'El trece', numeroCanal: 13 }
                ]
            }
        ],
        localidad: {
            nombre: "Lanus",
            codigoPostal: 1824
        }
    },
]);
//operador
db.getCollection('operadores').insertMany([
    {
        usuario:  {
            nombre: "Carlos",
            apellido: "Fernandez",
            email: "carosf@gmail.com",
            documento: 29465478
        },
        areas:[
            'Atención al cliente',
        ]
    },
    {
        usuario:  {
            nombre: "Hernan",
            apellido: "Fernandez",
            email: "hernanf@gmail.com",
            documento: 29465578
        },
        areas:[
            'Servicio técnico'
        ]
    }
]);
//operador
db.getCollection('eventos').insertMany([
   {
    inicio:     1699754392,
    responsable:  {
        usuario:  {
            nombre: "Carlos",
            apellido: "Fernandez",
            email: "carosf@gmail.com",
            documento: 29465478
        },
        areas:[
            'Atención al cliente',
        ]
    },
    estadoFinalEvento:'Resuelto',
    notas: 'Se le indica al usuario que reinicie el model por medio del boton lo que hace que vuelva a funcionar'
   }
]);
//tickets
db.getCollection('tickets').insertMany([
    {
        cliente: {
            usuario: {
                nombre: "Hector",
                apellido: "Salvatore",
                email: "hectorsal@gmail.com",
                documento: 33465478,
                operario: false
            },
            ubicacionInstalacion: {
                type: "Point",
                coordinates: [-73.856077, 40.848447]
            },
            planes: [
                {
                    nombre: "SuperPackFull",
                    version: 2,
                    canales: [
                        { nombre: 'BA TV', numeroCanal: 10 },
                        { nombre: 'TELEFE', numeroCanal: 11 },
                        { nombre: 'El trece', numeroCanal: 13 },
                        { nombre: 'telecreativa', numeroCanal: 5 },
                    ]
                },
                {
                    nombre: "normal",
                    version: 1,
                    canales: [
                        { nombre: 'BA TV', numeroCanal: 10 },
                        { nombre: 'TELEFE', numeroCanal: 11 },
                        { nombre: 'El trece', numeroCanal: 13 }
                    ]
                }
            ],
            localidad: {
                nombre: "Lanus",
                codigoPostal: 1824
            }
        },
        estado: "demorado",
        razon: "problemas con el decodificador", 
        historial: [

        ],
        relatedAreas: {
            type:Array, 
            require
        }
    },
]);

