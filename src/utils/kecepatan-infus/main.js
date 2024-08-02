function calculateInfusionRate(volumeCairan, waktuInfusJam, waktuInfusMenit) {
  // Validasi input
  if (
    isNaN(volumeCairan) ||
    isNaN(waktuInfusJam) ||
    isNaN(waktuInfusMenit) ||
    volumeCairan <= 0 ||
    waktuInfusJam < 0 ||
    waktuInfusMenit < 0
  ) {
    throw new Error("Semua input harus berupa angka non-negatif.");
  }

  // Hitung total waktu infus dalam menit
  const totalWaktuMenit = waktuInfusJam * 60 + waktuInfusMenit;

  // Validasi total waktu infus
  if (totalWaktuMenit === 0) {
    throw new Error("Waktu infus harus lebih besar dari 0.");
  }

  // Hitung kecepatan infus dalam ml/jam dan ml/menit
  const mlPerJam = volumeCairan / (totalWaktuMenit / 60);
  const mlPerMenit = volumeCairan / totalWaktuMenit;

  return {
    "ml/jam": mlPerJam.toFixed(2), // Bulatkan ke 2 angka di belakang koma
    "ml/menit": mlPerMenit.toFixed(2),
  };
}

export { calculateInfusionRate };
