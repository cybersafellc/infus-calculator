function hitungDosisInfus(volumeCairan, kecepatanInfus, satuanKecepatan) {
  // Validasi input
  if (
    isNaN(volumeCairan) ||
    isNaN(kecepatanInfus) ||
    volumeCairan <= 0 ||
    kecepatanInfus <= 0
  ) {
    throw new Error(
      "Volume cairan dan kecepatan infus harus angka positif yang valid."
    );
  }

  // Pastikan satuan kecepatan valid
  if (satuanKecepatan !== "ml/jam" && satuanKecepatan !== "ml/menit") {
    throw new Error("Satuan kecepatan harus 'ml/jam' atau 'ml/menit'.");
  }

  // Konversi kecepatan infus ke ml/jam jika perlu
  let kecepatanInfusMlJam =
    satuanKecepatan === "ml/menit" ? kecepatanInfus * 60 : kecepatanInfus;

  // Perhitungan waktu infus (menit)
  const waktuInfusMenit = (volumeCairan / kecepatanInfusMlJam) * 60;

  // Tangani hasil NaN dan hasil yang sangat kecil
  let jam = 0;
  let menit = 0;
  if (!isNaN(waktuInfusMenit) && waktuInfusMenit > 0) {
    jam = Math.floor(waktuInfusMenit / 60);
    menit = Math.round(waktuInfusMenit % 60);
  }

  return { jam, menit };
}
export { hitungDosisInfus };
