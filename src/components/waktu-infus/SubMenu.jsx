export default function SubMenu() {
  return (
    <>
      <div className="grid grid-cols-3 text-center text-white gap-1 uppercase md:font-bold text-xs mt-1">
        <a
          href="/dosis"
          className="w-full md:p-3 p-2 bg-green-700 rounded-xl flex justify-center items-center"
        >
          Dosis
        </a>
        <a
          href="waktu-infus"
          className="bg-green-100 w-full md:p-3 p-2 border-b-4 border-green-700 text-green-700 rounded-xl flex justify-center items-center"
        >
          Waktu Infus
        </a>
        <a
          href="kecepatan-infus"
          className="w-full md:p-3 p-2 bg-green-700 rounded-xl flex justify-center items-center"
        >
          Kecepatan Infus
        </a>
      </div>
    </>
  );
}
