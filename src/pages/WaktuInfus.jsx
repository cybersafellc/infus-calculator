import React from "react";
import Container from "../components/Container";
import Navbars from "../components/Navbars";
import Section from "../components/Section";
import SubMenu from "../components/waktu-infus/SubMenu";
import { hitungDosisInfus } from "../utils/waktu-infus/main";

export default function WaktuInfus() {
  const [volumeCairan, setVolumeCairan] = React.useState(0);
  const [kecepatanInfus, setKecepatanInfus] = React.useState(0);
  const [satuanKecepatan, setSatuanKecepatan] = React.useState("ml/jam");

  const [jam, setJam] = React.useState(0);
  const [menit, setmenit] = React.useState(0);

  const changeVolumeCairan = ({ target }) => setVolumeCairan(target.value);
  const changeKecepatanInfus = ({ target }) => setKecepatanInfus(target.value);
  const changeSatuanKecepatan = ({ target }) =>
    setSatuanKecepatan(target.value);

  const handleHitung = async () => {
    try {
      const hasil = hitungDosisInfus(
        volumeCairan,
        kecepatanInfus,
        satuanKecepatan
      );
      setJam(hasil.jam);
      setmenit(hasil.menit);
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
        <Container className="px-2">
          <div className="mx-auto w-full grid md:grid-cols-2 gap-2">
            <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
              <div>Volume Cairan</div>
              <div className="flex items-center justify-end gap-1">
                <div className="w-[100%] flex items-center gap-2">
                  <input
                    className="border md:p-2 p-1 rounded-xl w-full text-center"
                    type="number"
                    onChange={changeVolumeCairan}
                    value={volumeCairan}
                  />
                  <span>ml</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5 shadow rounded-xl items-center">
              <div>Kecepatan Infus</div>
              <div className="flex items-center justify-end gap-1">
                <div className="w-[50%]">
                  <input
                    className="border md:p-2 p-1 rounded-xl w-full text-center"
                    type="number"
                    value={kecepatanInfus}
                    onChange={changeKecepatanInfus}
                  />
                </div>
                <div className="w-[50%]">
                  <select
                    className="appearance border md:p-2 p-1 rounded-xl w-full"
                    value={satuanKecepatan}
                    onChange={changeSatuanKecepatan}
                  >
                    <option value="ml/jam">ml/jam</option>
                    <option value="ml/menit">ml/menit</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <button
                  className="bg-[green] text-white p-2 w-full rounded shadow"
                  onClick={handleHitung}
                >
                  Hitung
                </button>
              </div>
              <div className="flex justify-center items-center bg-gray-100 rounded p-5 shadow text-gray-700 gap-2 mt-2">
                <span>{jam} hr</span>
                <span>{menit} min</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
