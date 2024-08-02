import React from "react";
import Container from "../components/Container";
import SubMenu from "../components/kecepatan-infus/SubMenu";
import Navbars from "../components/Navbars";
import Section from "../components/Section";
import { calculateInfusionRate } from "../utils/kecepatan-infus/main";

export default function KecepatanInfus() {
  const [volumeCairan, setVolumeCairan] = React.useState(0);
  const [waktuInfusJam, setWaktuInfusJam] = React.useState(0);
  const [waktuInfusMenit, setWaktuInfusMenit] = React.useState(0);
  const [satuanHasil, setSatuanHasil] = React.useState("ml/jam");
  const [hasil, setHasil] = React.useState(0);

  const changeVolumeCairan = ({ target }) => setVolumeCairan(target.value);
  const changeInfusJam = ({ target }) => setWaktuInfusJam(target.value);
  const changeInfusMenit = ({ target }) => setWaktuInfusMenit(target.value);
  const changeSatuanHasil = ({ target }) => setSatuanHasil(target.value);

  const handleCalculate = async () => {
    try {
      const hasil = calculateInfusionRate(
        volumeCairan,
        waktuInfusJam,
        waktuInfusMenit
      );
      if (satuanHasil == "ml/jam") {
        setHasil(hasil["ml/jam"]);
      } else {
        setHasil(hasil["ml/menit"]);
      }
    } catch (error) {
      alert(error.value);
    }
  };
  return (
    <>
      <Navbars>
        <SubMenu />
      </Navbars>
      <Section>
        <Container className="px-2">
          <div className="mx-auto grid md:grid-cols-2 gap-2">
            <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
              <div>Volume Cairan</div>
              <div className="flex items-center justify-end gap-1">
                <div className="w-[100%] flex items-center gap-2">
                  <input
                    className="border md:p-2 p-1 rounded-xl w-full text-center"
                    type="number"
                    value={volumeCairan}
                    onChange={changeVolumeCairan}
                  />
                  <span>ml</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
              <div>Waktu Infus</div>
              <div className="flex items-center justify-end gap-1">
                <div className="w-[100%] flex items-center gap-2">
                  <input
                    className="border md:p-2 p-1 rounded-xl w-full text-center"
                    type="number"
                    value={waktuInfusJam}
                    onChange={changeInfusJam}
                  />
                  <span>Jam</span>
                  <input
                    className="border md:p-2 p-1 rounded-xl w-full text-center"
                    type="number"
                    value={waktuInfusMenit}
                    onChange={changeInfusMenit}
                  />
                  <span>Menit</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded overflow-hidden shadow">
              <div className="flex justify-center items-center bg-default p-5 text-md text-white font-bold">
                <span>Kecepatan Infus</span>
              </div>
              <div className="grid grid-cols-2 p-5">
                <div className="flex justify-center items-center h-full text-2xl">
                  <span>{hasil}</span>
                </div>
                <div>
                  <select
                    className="appearance border md:p-2 p-1 rounded-xl w-full"
                    value={satuanHasil}
                    onChange={changeSatuanHasil}
                  >
                    <option value="ml/jam">ml/jam</option>
                    <option value="ml/menit">ml/menit</option>
                  </select>
                </div>
              </div>
              <div className="p-4">
                <button
                  className="p-2 text-white rounded w-full bg-[green]"
                  onClick={handleCalculate}
                >
                  Hitung
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
