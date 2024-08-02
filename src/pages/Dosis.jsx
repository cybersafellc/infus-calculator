import Container from "../components/Container";
import SubMenu from "../components/dosis/SubMenu";
import Navbars from "../components/Navbars";
import Section from "../components/Section";
import React from "react";
import { calculateInfusionRate, hitungDosisInfus } from "../utils/dosis/main";

export default function Dosis() {
  const [beratBadan, setBeratBadan] = React.useState(0);
  const [satuanBerat, setSatuanBerat] = React.useState("kg");
  const [totalObat, setTotalObat] = React.useState(0);
  const [satuanTotalObat, setSatuanTotalObat] = React.useState("mg");
  const [volumeCairan, setVolumeCairan] = React.useState(0);
  const [satuabVolumeCairan, setSatuanVolumeCairan] = React.useState("ml");
  const [satuanDosis, setSatuanDosis] = React.useState("mg/jam");
  const [range, setRange] = React.useState(0); // dosis
  const [maxRange, setMaxRange] = React.useState(100);
  const [tetesMirko, setTetesMikro] = React.useState(60);

  const [hasil, setHasil] = React.useState(0);
  const [konsentrasi, setKonsentrasi] = React.useState(0);
  const [satuanHasil, setSatuanHasil] = React.useState("ml/jam");

  const EnamPuluhTM = React.useRef();
  const SepuluhTM = React.useRef();
  const LimaBelasTM = React.useRef();
  const DuaPuluhTM = React.useRef();

  const changeBeratBadan = ({ target }) => setBeratBadan(target.value);
  const changeSatuanBerat = ({ target }) => setSatuanBerat(target.value);
  const changeTotalObat = ({ target }) => setTotalObat(target.value);
  const changesatuanTotalObat = ({ target }) =>
    setSatuanTotalObat(target.value);
  const changeVolumeCairan = ({ target }) => setVolumeCairan(target.value);
  const changeSatuanVolumeCairan = ({ target }) =>
    setSatuanVolumeCairan(target.value);
  const changeDosis = ({ target }) => setRange(target.value);
  const changeSatuanDosis = ({ target }) => setSatuanDosis(target.value);
  const handleChangeMaxRange = ({ target }) => setMaxRange(target.value);
  const handleChangeRange = ({ target }) => setRange(target.value);
  const changeSatuanHasil = ({ target }) => setSatuanHasil(target.value);
  const changeTetesMikro = (who) => {
    if (who == "60") {
      setTetesMikro(60);
      EnamPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-500 text-white p-2";
      SepuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      LimaBelasTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      DuaPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
    } else if (who == "10") {
      setTetesMikro(10);
      EnamPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      SepuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-500 text-white p-2";
      LimaBelasTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      DuaPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
    } else if (who == "15") {
      setTetesMikro(15);
      EnamPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      SepuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      LimaBelasTM.current.className =
        "flex flex-col items-center justify-center bg-red-500 text-white p-2";
      DuaPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
    } else if (who == "20") {
      setTetesMikro(20);
      EnamPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      SepuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      LimaBelasTM.current.className =
        "flex flex-col items-center justify-center bg-red-300 text-white p-2";
      DuaPuluhTM.current.className =
        "flex flex-col items-center justify-center bg-red-500 text-white p-2";
    }
  };

  const handleHitung = async () => {
    try {
      const hasil = await hitungDosisInfus(
        beratBadan,
        satuanBerat,
        totalObat,
        satuanTotalObat,
        range,
        satuanDosis,
        volumeCairan,
        tetesMirko
      );
      setKonsentrasi(hasil["konsentrasi (mg/ml)"]);
      if (satuanHasil == "ml/jam") {
        setHasil(hasil["ml/jam"]);
      } else if (satuanHasil == "tetes/menit") {
        setHasil(hasil["tetes/menit"].toFixed(2));
      } else if (satuanHasil == "ml/menit") {
        setHasil(hasil["ml/menit"].toFixed(2));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbars>
        <SubMenu />
      </Navbars>
      <Section>
        <Container className="md:text-sm text-sm px-2 grid xl:grid-cols-2 gap-2">
          <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
            <div>Berat Badan</div>
            <div className="flex items-center justify-end gap-1">
              <div className="w-[50%]">
                <input
                  className="border md:p-2 p-1 rounded-xl w-full text-center"
                  type="number"
                  value={beratBadan}
                  onChange={changeBeratBadan}
                />
              </div>
              <div className="w-[50%]">
                <select
                  value={satuanBerat}
                  onChange={changeSatuanBerat}
                  className="appearance border md:p-2 p-1 rounded-xl w-full"
                >
                  <option value="kg">kg</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
            <div>Total Obat Dalam Cairan</div>
            <div className="flex items-center justify-end gap-1">
              <div className="w-[50%]">
                <input
                  className="border md:p-2 p-1 rounded-xl w-full text-center"
                  type="number"
                  value={totalObat}
                  onChange={changeTotalObat}
                />
              </div>
              <div className="w-[50%]">
                <select
                  value={satuanTotalObat}
                  onChange={changesatuanTotalObat}
                  className="appearance border md:p-2 p-1 rounded-xl w-full"
                >
                  <option value="mg">mg</option>
                  {/* <option value="g">g</option>
                  <option value="ug">ug</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
            <div>Volume Cairan</div>
            <div className="flex items-center justify-end gap-1">
              <div className="w-[50%]">
                <input
                  className="border md:p-2 p-1 rounded-xl w-full text-center"
                  type="number"
                  value={volumeCairan}
                  onChange={changeVolumeCairan}
                />
              </div>
              <div className="w-[50%]">
                <select
                  value={satuabVolumeCairan}
                  onChange={changeSatuanVolumeCairan}
                  className="appearance border md:p-2 p-1 rounded-xl w-full"
                >
                  <option value="ml">ml</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid bg-gray-100 p-5 shadow rounded-xl items-center">
            <div className="w-full flex gap-1">
              <span className="block w-[30%]">Dosis</span>
              <input
                className="border md:p-2 p-1 rounded-xl w-[35%] text-center"
                type="number"
                value={range}
                onChange={changeDosis}
              />
              <select
                value={satuanDosis}
                onChange={changeSatuanDosis}
                className="appearance border md:p-2 p-1 rounded-xl w-[35%]"
              >
                <option value="mg/jam">mg/jam</option>
                <option value="mg/menit">mg/menit</option>
                <option value="ug/menit">ug/menit</option>
                <option value="mg/kg/jam">mg/kg/jam</option>
                <option value="mg/kg/menit">mg/kg/menit</option>
                <option value="ug/kg/jam">ug/kg/jam</option>
                <option value="ug/kg/menit">ug/kg/menit</option>
                <option value="ug/jam">ug/jam</option>
              </select>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                className="border md:p-2 p-1 rounded-xl w-full text-center"
                type="range"
                min={0}
                max={maxRange}
                value={range}
                onChange={handleChangeRange}
              />
              <input
                className="border md:p-2 p-1 rounded-xl w-[35%] text-center bg-green"
                type="number"
                value={maxRange}
                onChange={handleChangeMaxRange}
              />
            </div>
          </div>

          <div>
            <div className="bg-default p-5 text-center text-white text-xs uppercase font-bold">
              <span>Kecepatan infus</span>
            </div>
            <div className="grid grid-cols-2 p-5 bg-gray-100">
              <div className="flex justify-center items-center text-2xl">
                <span>{hasil}</span>
              </div>
              <div className="flex justify-center items-center">
                <select
                  className="border md:p-2 p-1 rounded-xl w-full text-center bg-green"
                  type="number"
                  onChange={changeSatuanHasil}
                  value={satuanHasil}
                >
                  <option value="ml/jam">ml/jam</option>
                  <option value="tetes/menit">tetes/menit</option>
                  <option value="ml/menit">ml/menit</option>
                </select>
              </div>
              <div></div>
              <div className="py-4">
                Konsentrasi : <span>{konsentrasi}</span> mg/ml
              </div>
            </div>
            <div className="p-2 bg-gray-100">
              <button
                className="bg-[green] w-full p-2 rounded shadow-xl font-bold text-white"
                onClick={handleHitung}
              >
                Hitung
              </button>
            </div>
            <div className="p-2 bg-gray-100">
              <div className="mb-3">Faktor Tetes: tetes/ml</div>
              <div>
                <div className="grid grid-cols-4 gap-2">
                  <div
                    className="flex flex-col items-center justify-center bg-red-500 text-white p-2"
                    ref={EnamPuluhTM}
                    onClick={() => changeTetesMikro("60")}
                  >
                    <span>60</span>
                    <span>Tetes Mikro</span>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center bg-red-300 text-white p-2"
                    ref={SepuluhTM}
                    onClick={() => changeTetesMikro("10")}
                  >
                    <span>10</span>
                    <span>Tetes Mikro</span>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center bg-red-300 text-white p-2"
                    ref={LimaBelasTM}
                    onClick={() => changeTetesMikro("15")}
                  >
                    <span>15</span>
                    <span>Tetes Mikro</span>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center bg-red-300 text-white p-2"
                    ref={DuaPuluhTM}
                    onClick={() => changeTetesMikro("20")}
                  >
                    <span>20</span>
                    <span>Tetes Mikro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
