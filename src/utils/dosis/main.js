function hitungDosisInfus(
  beratBadan,
  satuanBerat,
  totalObat,
  satuanTotal,
  dosis,
  satuanDosis,
  volumeCairan,
  faktorTetes
) {
  console.log(beratBadan, totalObat, volumeCairan, dosis, faktorTetes);
  // Validasi input
  if (
    isNaN(beratBadan) ||
    isNaN(totalObat) ||
    isNaN(dosis) ||
    isNaN(volumeCairan) ||
    isNaN(faktorTetes)
  ) {
    throw new Error("Semua input harus berupa angka.");
  }

  // Validasi faktor tetes
  const validFaktorTetes = [10, 15, 20, 60]; // Makro yang valid
  if (!validFaktorTetes.includes(faktorTetes)) {
    throw new Error("Faktor tetes harus salah satu dari: 10, 15, 20, atau 60.");
  }

  // Konversi berat badan ke kilogram jika perlu
  if (satuanBerat === "lb") {
    beratBadan *= 0.453592;
  }

  // Konversi total obat ke miligram jika perlu
  if (satuanTotal === "g") {
    totalObat *= 1000;
  } else if (satuanTotal === "ug") {
    totalObat /= 1000;
  }

  // Hitung kecepatan infus (ml/jam) berdasarkan satuan dosis
  let mlPerJam;
  switch (satuanDosis) {
    case "mg/jam":
      mlPerJam = dosis;
      break;
    case "mg/menit":
      mlPerJam = dosis * 60;
      break;
    case "ug/menit":
      mlPerJam = (dosis * 60) / 1000;
      break;
    case "mg/kg/jam":
      mlPerJam = dosis * beratBadan;
      break;
    case "mg/kg/menit":
      mlPerJam = dosis * beratBadan * 60;
      break;
    case "ug/kg/jam":
      mlPerJam = (dosis * beratBadan) / 1000;
      break;
    case "ug/kg/menit":
      mlPerJam = (dosis * beratBadan * 60) / 1000;
      break;
    case "ug/jam":
      mlPerJam = dosis / 1000;
      break;
    default:
      throw new Error("Satuan dosis tidak valid.");
  }

  // Hitung tetes per menit dan ml per menit
  const tetesPerMenit = (mlPerJam * faktorTetes) / 60;
  const mlPerMenit = mlPerJam / 60;

  // Hitung konsentrasi obat (mg/ml)
  const konsentrasi = totalObat / volumeCairan;

  // Hitung waktu infus (jam)
  const waktuInfusJam = volumeCairan / mlPerJam;

  return {
    "ml/jam": mlPerJam,
    "tetes/menit": tetesPerMenit,
    "ml/menit": mlPerMenit,
    "konsentrasi (mg/ml)": konsentrasi,
    "waktu infus (jam)": waktuInfusJam,
  };
}

function calculateInfusionRate(
  totalObatMg,
  volumeCairanMl,
  dosisMgKgJam,
  beratBadanKg,
  jenisMakro
) {
  // Batasan Dosis Maksimum
  const maxDosis = 100;
  const dosisMgJam = dosisMgKgJam * beratBadanKg;
  if (dosisMgJam > maxDosis) {
    return { error: "Dosis melebihi batas maksimum." };
  }

  // Kecepatan Infus (ml/jam)
  const kecepatanInfus = (totalObatMg / volumeCairanMl) * dosisMgJam;

  // Faktor Tetesan
  const faktorTetesan = {
    "makro-60": 1,
    "makro-10": 0.1667,
    "makro-15": 0.25,
    "makro-20": 0.3333,
  }[jenisMakro];

  // Jumlah Tetesan per Menit
  const tetesPerMenit = Math.round((kecepatanInfus * faktorTetesan) / 60);

  return {
    kecepatanInfus,
    tetesPerMenit,
  };
}

export { hitungDosisInfus, calculateInfusionRate };
