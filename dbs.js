use('ticketera');

// canales
db.getCollection('canal').insertMany([
    { nombre: 'BA TV', numeroCanal: 10 },
    { nombre: 'TELEFE', numeroCanal: 11 },
    { nombre: 'El trece', numeroCanal: 13 },
    { nombre: 'telecreativa', numeroCanal: 5 },
    { nombre: 'Canal 26', numeroCanal: 26 }
]);
db.getCollection('plan').insertMany([
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
db.getCollection('localidad').insertMany([
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
db.getCollection('oficina').insertMany([
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
db.getCollection('usuario').insertMany([
    {
        nombre: "Hector",
        apellido: "Salvatore",
        email: "hectorsal@gmail.com",
        documento: 33465478,
        operario: false
    },
    {
        nombre: "Carlos",
        apellido: "Fernandez",
        email: "carosf@gmail.com",
        documento: 29465478,
        operario: true
    }
]);
//clientes
db.getCollection('cliente').insertMany([
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

