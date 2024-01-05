import LogoMauritaniyyah from "../img/mauritaniyyah.png";
export default function PaymentReceipt({closeActive, data = []}) {
  console.log('data ', data );
  const totalPayment = parseInt(data.firstYear) + parseInt(data.reRegister) + parseInt(data.spp) + parseInt(data.ekskul1);
  console.log(totalPayment);
  // Number to Words
  var ones = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
  var tens = ['', '', 'Dua Puluh', 'Tiga Puluh', 'Empat Puluh', 'Lima Puluh', 'Enam Puluh', 'Tujuh Puluh', 'Delapan Puluh', 'Sembilan Puluh'];
  var teens = ['Sepuluh', 'Sebelas', 'Dua Belas', 'Tiga Belas', 'Empat Belas', 'Lima Belas', 'Enam Belas', 'Tujuh Belas', 'Delapan Belas', 'Sembilan Belas'];

function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " Juta " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num) {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " Puluh " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " Ratus " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num) {
  if (num === 0) return "Nol";
  else return convert_millions(num);
}
console.log('cek angka', convert(totalPayment));
  // Number to Words
  return (
    <>
      <div className="container flex flex-row p-4 bg-white" style={{ height:'28rem' }}>
        {closeActive && <button className="absolute top-4 left-4 w-10 h-10 font-semibold z-40 border border-white bg-primary hover:bg-secondary" onClick={closeActive}>X</button>}
        <div className=" basis-52 border border-primary relative">
          <div className="-rotate-90 flex flex-row h-fit absolute lg:-inset-x-28 -inset-x-32 lg:top-32 top-36" style={{ width:'25rem' }}>
            <div className="self-center w-40 h-fit scale-90"><img src={LogoMauritaniyyah} alt="Logo Mauritaniyyah"/></div>
            <div>
              <h1 className="lg:text-2xl text-lg text-green-600">YAYASAN AMMAR GHARIZA NUGROHO</h1>
              <h1 className="font-bold lg:text-3xl text-xl text-green-500">SIT MAURITANIYYAH</h1>
              <p className="lg:text-sm text-xs">Perum. Lembah Griya Indah Blok A8 No.01 RT.002/013, Ragajaya, Bojonggede, Bogor</p>
            </div>
          </div>
        </div>
        <div className="border border-primary w-full">
          <h1 className="font-bold text-2xl text-center pt-4 text-green-600">KUITANSI</h1>
          <p className="ps-4 font-medium">Tanggal : </p>
          <div className="grid grid-cols-4 ps-2">
            <p>Telah terima dari</p>
            <p className="col-span-3">: {data.name}</p>
          </div>
          <div className="grid grid-cols-4 ps-2">
            <p>Terbilang</p>
            <p className="col-span-3">: {convert(totalPayment)} Ribu Rupiah</p>
          </div>
          <div className="grid grid-cols-4 ps-2">
            <p>Pembayaran</p>
            <p className="col-span-3">:</p>
          </div>
        </div>
      </div>
    </>
  );
}
