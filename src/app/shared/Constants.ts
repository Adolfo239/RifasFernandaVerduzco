import { Boleto } from "app/interfaces/boleto";


class ParticipantesImgModel {
    id: number = 0
    src: string = ''
    // title: string = ''
    // subtitle: string = ''
}

class EstadosModel {
  id: number = 0
  position: number = 0
  description: string = '';
}

export const ArrayEstados: EstadosModel[] = [
  {
    id: 33,
    position: 3,
    description: 'Estados Unidos'
  },
  {
    id: 34,
    position: 34,
    description: 'Otro'
  },
  {
    id: 1,
    position: 1,
    description: 'Aguascalientes'
  },
  {
    id: 2,
    position: 2,
    description: 'Baja California'
  },
  {
    id: 3,
    position: 3,
    description: 'Baja California Sur'
  },
  {
    id: 4,
    position: 4,
    description: 'Campeche'
  },
  {
    id: 5,
    position: 5,
    description: 'Chiapas'
  },
  {
    id: 6,
    position: 6,
    description: 'Chihuahua'
  },
  {
    id: 7,
    position: 7,
    description: 'Ciudad de México'
  },
  {
    id: 8,
    position: 8,
    description: 'Coahuila'
  },
  {
    id: 9,
    position: 9,
    description: 'Colima'
  },
  {
    id: 10,
    position: 10,
    description: 'Durango'
  },
  {
    id: 11,
    position: 11,
    description: 'Estado de México'
  },
  {
    id: 12,
    position: 12,
    description: 'Guanajuato'
  },
  {
    id: 13,
    position: 13,
    description: 'Guerrero'
  },
  {
    id: 14,
    position: 14,
    description: 'Hidalgo'
  },
  {
    id: 15,
    position: 15,
    description: 'Jalisco'
  },
  {
    id: 16,
    position: 16,
    description: 'Michoacán'
  },
  {
    id: 17,
    position: 17,
    description: 'Morelos'
  },
  {
    id: 18,
    position: 18,
    description: 'Nayarit'
  },
  {
    id: 19,
    position: 19,
    description: 'Nuevo León'
  },
  {
    id: 20,
    position: 20,
    description: 'Oaxaca'
  },
  {
    id: 21,
    position: 21,
    description: 'Puebla'
  },
  {
    id: 22,
    position: 22,
    description: 'Querétaro'
  },
  {
    id: 23,
    position: 23,
    description: 'Quintana roo'
  },
  {
    id: 24,
    position: 24,
    description: 'San Luis Potosí'
  },
  {
    id: 25,
    position: 25,
    description: 'Sinaloa'
  },
  {
    id: 26,
    position: 26,
    description: 'Sonora'
  },
  {
    id: 27,
    position: 27,
    description: 'Tabasco'
  },
  {
    id: 28,
    position: 28,
    description: 'Tamaulipas'
  },
  {
    id: 29,
    position: 29,
    description: 'Tlaxcala'
  },
  {
    id: 30,
    position: 30,
    description: 'Veracruz'
  },
  {
    id: 31,
    position: 31,
    description: 'Yucatán'
  },
  {
    id: 32,
    position: 32,
    description: 'Zacatecas'
  }
]

export const Arrayimgs : ParticipantesImgModel[] = [
    {
        id: 0,
        src: './assets/img/participantes/Participante.jpeg'
        // title: 'First slide',
        // subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
        id: 1,
        src: './assets/img/participantes/Participante2.jpeg',
      },
      {
        id: 2,
        src: './assets/img/participantes/Participante3.jpeg',
      },
      {
        id: 3,
        src: './assets/img/participantes/Participante4.jpeg',
      },
      {
        id: 4,
        src: './assets/img/participantes/Participante5.jpeg',
      },
      {
        id: 5,
        src: './assets/img/participantes/Participante6.jpeg',
      },
      {
        id: 6,
        src: './assets/img/participantes/Participante7.jpeg',
      },
      {
        id: 7,
        src: './assets/img/participantes/Participante8.jpeg',
      },
      {
        id: 8,
        src: './assets/img/participantes/Participante9.jpeg',
      },
      {
        id: 9,
        src: './assets/img/participantes/Participante10.jpeg',
      },
      {
        id: 10,
        src: './assets/img/participantes/Participante11.jpeg',
      },
      {
        id: 11,
        src: './assets/img/participantes/Participante12.jpeg',
      },
      {
        id: 12,
        src: './assets/img/participantes/ParticipanteGordoNavidad.jpeg',
      }
]

export const ArrayBoletos : Boleto[] = [
  {
    number: '001',
    available: true
  },
  {
    number: '002',
    available: true
  },
  {
    number: '003',
    available: false
  },
  {
    number: '004',
    available: true
  },
  {
    number: '005',
    available: true
  },
  {
    number: '006',
    available: true
  },
  {
    number: '007',
    available: false
  },
  {
    number: '008',
    available: true
  },
  {
    number: '009',
    available: false
  },
  {
    number: '010',
    available: true
  },
  {
    number: '011',
    available: true
  },
  {
    number: '012',
    available: true
  },
  {
    number: '013',
    available: false
  },
  {
    number: '014',
    available: true
  },
  {
    number: '015',
    available: true
  },
  {
    number: '016',
    available: true
  },
  {
    number: '017',
    available: false
  },
  {
    number: '018',
    available: true
  },
  {
    number: '019',
    available: false
  },
  {
    number: '020',
    available: true
  },
  {
    number: '021',
    available: true
  },
  {
    number: '022',
    available: true
  },
  {
    number: '023',
    available: false
  },
  {
    number: '024',
    available: true
  },
  {
    number: '025',
    available: true
  },
  {
    number: '026',
    available: true
  },
  {
    number: '027',
    available: false
  },
  {
    number: '028',
    available: true
  },
  {
    number: '029',
    available: false
  },
  {
    number: '030',
    available: true
  },
  {
    number: '031',
    available: true
  },
  {
    number: '032',
    available: true
  },
  {
    number: '033',
    available: false
  },
  {
    number: '034',
    available: true
  },
  {
    number: '035',
    available: true
  },
  {
    number: '036',
    available: true
  },
  {
    number: '037',
    available: false
  },
  {
    number: '038',
    available: true
  },
  {
    number: '039',
    available: false
  },
  {
    number: '040',
    available: true
  },
  {
    number: '041',
    available: true
  },
  {
    number: '042',
    available: true
  },
  {
    number: '043',
    available: false
  },
  {
    number: '044',
    available: true
  },
  {
    number: '045',
    available: true
  },
  {
    number: '046',
    available: true
  },
  {
    number: '047',
    available: false
  },
  {
    number: '048',
    available: true
  },
  {
    number: '049',
    available: false
  },
  {
    number: '050',
    available: true
  },
  {
    number: '051',
    available: true
  },
  {
    number: '052',
    available: true
  },
  {
    number: '053',
    available: false
  },
  {
    number: '054',
    available: true
  },
  {
    number: '055',
    available: true
  },
  {
    number: '056',
    available: true
  },
  {
    number: '057',
    available: false
  },
  {
    number: '058',
    available: true
  },
  {
    number: '059',
    available: false
  },
  {
    number: '060',
    available: true
  },
  {
    number: '061',
    available: true
  },
  {
    number: '062',
    available: true
  },
  {
    number: '063',
    available: false
  },
  {
    number: '064',
    available: true
  },
  {
    number: '065',
    available: true
  },
  {
    number: '066',
    available: true
  },
  {
    number: '067',
    available: false
  },
  {
    number: '068',
    available: true
  },
  {
    number: '069',
    available: false
  },
  {
    number: '070',
    available: true
  },
  {
    number: '071',
    available: true
  },
  {
    number: '072',
    available: true
  },
  {
    number: '073',
    available: false
  },
  {
    number: '074',
    available: true
  },
  {
    number: '075',
    available: true
  },
  {
    number: '076',
    available: true
  },
  {
    number: '077',
    available: false
  },
  {
    number: '078',
    available: true
  },
  {
    number: '079',
    available: false
  },
  {
    number: '080',
    available: true
  },
  {
    number: '081',
    available: true
  },
  {
    number: '082',
    available: true
  },
  {
    number: '083',
    available: false
  },
  {
    number: '084',
    available: true
  },
  {
    number: '085',
    available: true
  },
  {
    number: '086',
    available: true
  },
  {
    number: '087',
    available: false
  },
  {
    number: '088',
    available: true
  },
  {
    number: '089',
    available: false
  },
  {
    number: '090',
    available: true
  },
  {
    number: '091',
    available: true
  },
  {
    number: '092',
    available: true
  },
  {
    number: '093',
    available: false
  },
  {
    number: '094',
    available: true
  },
  {
    number: '095',
    available: true
  },
  {
    number: '096',
    available: true
  },
  {
    number: '097',
    available: false
  },
  {
    number: '098',
    available: true
  },
  {
    number: '099',
    available: false
  },
  {
    number: '100',
    available: true
  },
  {
    number: '101',
    available: true
  },
  {
    number: '102',
    available: true
  },
  {
    number: '103',
    available: false
  },
  {
    number: '104',
    available: true
  },
  {
    number: '105',
    available: true
  },
  {
    number: '106',
    available: true
  },
  {
    number: '107',
    available: false
  },
  {
    number: '108',
    available: true
  },
  {
    number: '109',
    available: false
  },
  {
    number: '110',
    available: true
  },
];

export const ArrayCantidadBoletos: EstadosModel[] = [
  {
    id: 1,
    position: 1,
    description: '1 Boleto'
  },
  {
    id: 2,
    position: 2,
    description: '2 Boletos'
  },
  {
    id: 3,
    position: 3,
    description: '3 Boletos'
  },
  {
    id: 4,
    position: 4,
    description: '4 Boletos'
  },
  {
    id: 5,
    position: 5,
    description: '5 Boletos'
  },
  {
    id: 10,
    position: 10,
    description: '10 Boletos'
  },
  {
    id: 20,
    position: 20,
    description: '20 Boletos'
  },
  {
    id: 30,
    position: 30,
    description: '30 Boletos'
  },
  {
    id: 50,
    position: 50,
    description: '50 Boletos'
  },
  {
    id: 100,
    position: 100,
    description: '100 Boletos'
  },
]
