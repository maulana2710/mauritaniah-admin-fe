// import axios from "axios";
import { useState } from "react";
import PaymentReceipt from "./PaymentReceipt";

export default function AddPayment() {
  const [active, setActive] = useState(false);
  console.log("🚀 ~ file: AddPayment.jsx:6 ~ AddPayment ~ active:", active)
  
  const closeActive = () => {
    setActive(false)
  }
  const [input, setInput] = useState({});
  console.log("input:", input);
  const [inputFile, setInputFile] = useState("");
  console.log("inputFile:", inputFile);

  const handleFileChange = (event) => {
    setInputFile(event.target.files[0]);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setActive(true);
    console.log(input);
    console.log("file1 :", inputFile);
    try {
      // const formData = new FormData();
      // formData.append("name", input.name);
      // formData.append("category", input.category);
      // formData.append("series", input.series);
      // formData.append("price", input.price);
      // formData.append("discountPercentage", input.discountPercentage);
      // formData.append("sku", input.sku);
      // formData.append("quantityStock", input.quantityStock);
      // formData.append("description", input.description);
      // formData.append("file1", inputFile);
      // const response = await axios.post(
      //   `https://`,
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      // console.log(response.data.success);
      // if (response.data.success === true) {
      // navigate(`/`, { state: { addhProductTrue: true } });
      // }
    } catch (error) {
      console.log("gagal memperbarui", error);
      throw error;
    }
  };
  return (
    <>
      <h1 className="font-semibold text-4xl mb-5 border-b-2 border-primary">
        Tambah Pembayaran
      </h1>

      <section className="">
        <form className="w-full mx-auto">
          <h1 className="text-lg font-semibold text-center border-t border-secondary pb-4">
            Form Pengisian
          </h1>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                value={input.name || ""}
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Siswa
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="parentName"
                value={input.parentName || ""}
                id="parentName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="parentName"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Orang Tua
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="classGroup"
              value={input.classGroup || ""}
              id="classGroup"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="classGroup"
              className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Kelas
            </label>
          </div>

          <h1 className="text-lg font-semibold">Pembayaran</h1>
          <div className="relative z-0 w-full mb-5 group mt-4 flex flex-row items-center">
            <label className="text-gray-500 pe-2 text-sm">Rp. </label>
            <input
              type="number"
              name="firstYear"
              value={input.firstYear || ""}
              id="firstYear"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="firstYear"
              className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Awal Tahun
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group mt-4 flex flex-row items-center">
            <label className="text-gray-500 pe-2 text-sm">Rp. </label>
            <input
              type="number"
              name="reRegister"
              value={input.reRegister || ""}
              id="reRegister"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              htmlFor="reRegister"
              className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Daftar Ulang
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group mt-4 flex flex-row items-center">
              <label className="text-gray-500 pe-2 text-sm">Rp. </label>
              <input
                type="number"
                name="spp"
                value={input.spp || ""}
                id="spp"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleChange}
              />
              <label
                htmlFor="spp"
                className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                SPP
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group mt-4 flex flex-row items-center">
              <input
                type="date"
                name="monthSpp"
                value={input.monthSpp || ""}
                id="monthSpp"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="monthSpp"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bulan
              </label>
            </div>
          </div>
          {/* EKSKUL */}
          <div className="grid md:grid-cols-3 md:gap-6 mt-4 items-center">
            <select
              id="countries"
              className="h-fit mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              name="ekskulName1"
            >
              <option selected>Pilih Ekskul</option>
              <option value="Baca Tulis">Baca Tulis</option>
              <option value="Tahsin/Tahfidz">Tahsin/Tahfidz</option>
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Futsal">Futsal</option>
              <option value="Silat">Silat</option>
              <option value="Panahan">Panahan</option>
            </select>
            <div className="relative z-0 w-full mb-5 group flex flex-row items-center">
              <label className="text-gray-500 pe-2 text-sm">Rp. </label>
              <input
                type="number"
                name="ekskul1"
                value={input.ekskul1 || ""}
                id="ekskul1"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="ekskul1"
                className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ekskul
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="bulanEkskul1"
                value={input.bulanEkskul1 || ""}
                id="bulanEkskul1"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="bulanEkskul1"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bulan
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6 mt-4  items-center">
          <select
              id="countries"
              className="h-fit mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              name="ekskulName2"
            >
              <option selected>Pilih Ekskul</option>
              <option value="Baca Tulis">Baca Tulis</option>
              <option value="Tahsin/Tahfidz">Tahsin/Tahfidz</option>
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Futsal">Futsal</option>
              <option value="Silat">Silat</option>
              <option value="Panahan">Panahan</option>
            </select>
            <div className="relative z-0 w-full mb-5 group flex flex-row items-center">
              <label className="text-gray-500 pe-2 text-sm">Rp. </label>
              <input
                type="number"
                name="ekskul2"
                value={input.ekskul2 || ""}
                id="ekskul2"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="ekskul2"
                className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ekskul
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="bulanEkskul2"
                value={input.bulanEkskul2 || ""}
                id="bulanEkskul2"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="bulanEkskul2"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bulan
              </label>
            </div>
            
          </div>
          <div className="grid md:grid-cols-3 md:gap-6 mt-4  items-center">
          <select
              id="countries"
              className="h-fit mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              name="ekskulName3"
            >
              <option selected>Pilih Ekskul</option>
              <option value="Baca Tulis">Baca Tulis</option>
              <option value="Tahsin/Tahfidz">Tahsin/Tahfidz</option>
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Futsal">Futsal</option>
              <option value="Silat">Silat</option>
              <option value="Panahan">Panahan</option>
            </select>
            <div className="relative z-0 w-full mb-5 group flex flex-row items-center">
              <label className="text-gray-500 pe-2 text-sm">Rp. </label>
              <input
                type="number"
                name="ekskul3"
                value={input.ekskul3 || ""}
                id="ekskul3"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="ekskul3"
                className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ekskul
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="bulanEkskul3"
                value={input.bulanEkskul3 || ""}
                id="bulanEkskul3"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="bulanEkskul3"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bulan
              </label>
            </div>
            
          </div>
          <div className="grid md:grid-cols-3 md:gap-6  mt-4  items-center">
          <select
              id="countries"
              className="h-fit mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              name="ekskulName4"
            >
              <option selected>Pilih Ekskul</option>
              <option value="Baca Tulis">Baca Tulis</option>
              <option value="Tahsin/Tahfidz">Tahsin/Tahfidz</option>
              <option value="Matematika">Matematika</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="Bahasa Arab">Bahasa Arab</option>
              <option value="Futsal">Futsal</option>
              <option value="Silat">Silat</option>
              <option value="Panahan">Panahan</option>
            </select>
            <div className="relative z-0 w-full mb-5 group flex flex-row items-center">
              <label className="text-gray-500 pe-2 text-sm">Rp. </label>
              <input
                type="number"
                name="ekskul4"
                value={input.ekskul4 || ""}
                id="ekskul4"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="ekskul4"
                className="ps-8 peer-focus:ps-0 peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ekskul
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="bulanEkskul4"
                value={input.bulanEkskul4 || ""}
                id="bulanEkskul4"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="bulanEkskul4"
                className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bulan
              </label>
            </div>
            
          </div>
          {/* EKSKUL */}
          {/* File */}
          <div>
            <label
              className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Bukti Pembayaran
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleFileChange}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              PNG, JPG or PDF.
            </p>
          </div>
          {/* File */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          
        </form>
        {active && 
          <div className="absolute inset-0 top-48 xl:left-20 left-0  z-50">
            <PaymentReceipt data={input} closeActive={closeActive}/>
          </div>
        }
      </section>
    </>
  );
}
