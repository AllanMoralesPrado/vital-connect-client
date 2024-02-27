const vacunas = [
  {
    vacunaId: 1,
    vacunaNombre: "dTp acelular Difteria - Tetanos - Pertussis",
    vacunaDescripcion:
      "Está indicada como dosis única en la inmunización activa de refuerzo para prevenir el tétanos, la difteria y la tos convulsiva en niños a partir de los 4 años, adolescentes y adultos, incluyendo embarazadas.",
  },
  {
    vacunaId: 2,
    vacunaNombre: "BCG",
    vacunaDescripcion:
      "Al recibir la vacuna BCG ministerial, se previene la Tuberculosis y las formas graves de la Tuberculosis infantil (meníngea y diseminada) por vía sanguínea (hematógena).",
  },
  {
    vacunaId: 3,
    vacunaNombre: "Hepatitis B",
    vacunaDescripcion:
      "Al recibir la vacuna de Hepatitis B (Ministerial) se está protegido de la infección causada por el virus de la hepatitis B.",
  },
  {
    vacunaId: 4,
    vacunaNombre: "Hexavalente",
    vacunaDescripcion:
      "Esta vacuna ayuda a prevenir enfermedades como la difteria, el tétanos, la tos ferina, la hepatitis B, la poliomielitis y las enfermedades invasivas causadas por Haemophilus influenzae tipo b, desde las 6 semanas de vida hasta los 24 meses de edad.",
  },
  {
    vacunaId: 5,
    vacunaNombre: "Neumocónica recombinante",
    vacunaDescripcion:
      "Recibir esta vacuna previene contra enfermedades invasivas causadas por Streptococcus pneumoniae (Neumococos) como Otitis Media, Sinusitis, Neumonías y Meningitis aguda, que pueden causar muerte o discapacidad de por vida.",
  },
  {
    vacunaId: 6,
    vacunaNombre: "Meningocócica conjugada tetravalente",
    vacunaDescripcion:
      "La Vacuna Meningocócica recombinante, protege contra el meningococo, una de las bacterias que causa la mayo cantidad de casos de meningitis en el todo el mundo (inflamación de las membranas que recubren el cerebro, el cerebelo y la médula ósea). Esta enfermedad puede evolucionar rápidamente e incluso causar la muerte.",
  },
  {
    vacunaId: 7,
    vacunaNombre: "SRP(sarampion, Rubeola, Parotiditis)",
    vacunaDescripcion:
      "Es una vacuna viral viva atenuada combinada. Contiene cepas de los virus Sarampión, Rubéola y Parotiditis.",
  },
  {
    vacunaId: 8,
    vacunaNombre: "Neumocónica recombinante",
    vacunaDescripcion:
      "Protege de enfermedades invasoras provocadas por los serogrupos A, C, W e Y, de la bacteria Neisseria meningitidis (Meningococo), tales como la enfermedad meningocócica invasiva (EMI) que es una infección grave, causada por la bacteria Neisseria meningitidis (meningococo).",
  },
  {
    vacunaId: 9,
    vacunaNombre: "Hepatitis A",
    vacunaDescripcion:
      "Protege de la infección causada por el virus de la hepatitis A, que es una enfermedad potencialmente grave que puede provocar, con baja frecuencia, una falla hepática aguda y la muerte.\nLas formas más graves de la enfermedad necesitan hospitalización e, incluso, trasplante hepático.\nEsta infección puede adquirirse tanto en el país como durante viajes a otras regiones.",
  },
  {
    vacunaId: 10,
    vacunaNombre: "Varicela",
    vacunaDescripcion:
      "Protege contra la varicela en personas de 12 meses de edad o mayores.\n\nLa varicela, es una enfermedad potencialmente grave e incluso mortal. Es una enfermedad muy contagiosa causada por el virus de la varicela-zóster (VVZ), es un miembro de la familia del herpesvirus.",
  },
  {
    vacunaId: 11,
    vacunaNombre: "SRP(sarampion, Rubeola, Parotiditis)",
    vacunaDescripcion:
      "Es una vacuna viral viva atenuada combinada. Contiene cepas de los virus Sarampión, Rubéola y Parotiditis.",
  },
  {
    vacunaId: 12,
    vacunaNombre: "Varicela",
    vacunaDescripcion:
      "Protege contra la varicela en personas de 12 meses de edad o mayores.\n\nLa varicela, es una enfermedad potencialmente grave e incluso mortal. Es una enfermedad muy contagiosa causada por el virus de la varicela-zóster (VVZ), es un miembro de la familia del herpesvirus.",
  },
  {
    vacunaId: 13,
    vacunaNombre: "dTp acelular Difteria - Tetanos - Pertussis",
    vacunaDescripcion:
      "Está indicada como dosis única en la inmunización activa de refuerzo para prevenir el tétanos, la difteria y la tos convulsiva en niños a partir de los 4 años, adolescentes y adultos, incluyendo embarazadas.",
  },
  {
    vacunaId: 14,
    vacunaNombre: "VpH (Virus del papiloma humano",
    vacunaDescripcion:
      "Protege contra el Virus del Papiloma Humano (VPH) que causa cáncer.\nLa vacuna contra el VPH puede prevenir más del 90% de los cánceres causados por el Virus de Papiloma Humano, así como los pre cánceres anales, vaginales, cervicales y vulvares (células anormales que pueden provocar cáncer).\nPara que la vacuna contra el VPH sea más eficaz, la serie debe comenzar antes de la exposición al VPH.",
  },
  {
    vacunaId: 15,
    vacunaNombre: "VpH (Virus del papiloma humano",
    vacunaDescripcion:
      "Protege contra el Virus del Papiloma Humano (VPH) que causa cáncer.\nLa vacuna contra el VPH puede prevenir más del 90% de los cánceres causados por el Virus de Papiloma Humano, así como los pre cánceres anales, vaginales, cervicales y vulvares (células anormales que pueden provocar cáncer).\nPara que la vacuna contra el VPH sea más eficaz, la serie debe comenzar antes de la exposición al VPH.",
  },
  {
    vacunaId: 16,
    vacunaNombre: "dTp acelular Difteria - Tetanos - Pertussis",
    vacunaDescripcion:
      "Está indicada como dosis única en la inmunización activa de refuerzo para prevenir el tétanos, la difteria y la tos convulsiva en niños a partir de los 4 años, adolescentes y adultos, incluyendo embarazadas.",
  },
  {
    vacunaId: 17,
    vacunaNombre: "Neumocócicas Polisacárida 23 Valente",
    vacunaDescripcion:
      "Vacuna indicada para la prevención de las infecciones por neumococos, en particular de las neumonías debidas a los serotipos contenidos en la vacuna, en los sujetos de riesgo a partir de la edad de 2 años.",
  },
];
export default vacunas;
