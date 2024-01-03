import Table from "./Table";

export default function FinanceList({ openActivePage }) {
  const titleTable = [
    "No",
    "Nama",
    "Kelas",
    "Nama Orang Tua",
    "Tanggal Bayar",
    "Tanggal Input",
  ];
  return (
    <>
      <h1 className="font-semibold text-4xl mb-5 border-b-2 border-primary">
        Keuangan
      </h1>
      <button
        onClick={() => openActivePage("AddPayment")}
        className="bg-green-500 hover:bg-green-300 hover:text-gray-600 text-white border w-full rounded-b-md mb-5 text-xl font-semibold"
      >
        Tambah Pembayaran
      </button>
      <Table userData={[]} titleTable={titleTable} active="finance" />
    </>
  );
}
