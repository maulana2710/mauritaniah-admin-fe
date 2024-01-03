import Table from "./Table";

export default function UserList({ userData }) {
    const titleTable = ['No', 'Nama', 'Tanggal Lahir', 'NIS', 'Kelas', 'Nama Orang Tua', 'Action'];
    return(
        <>
        <h1 className="font-semibold text-4xl mb-5 border-b-2 border-primary">Daftar Siswa</h1>
        <Table userData={userData} titleTable={titleTable} active='user' />
        </>
    )
}