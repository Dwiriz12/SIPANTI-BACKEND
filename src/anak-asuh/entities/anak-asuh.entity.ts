export type JenisKelamin = 'Laki-laki' | 'Perempuan';
export type StatusAnak = 'Aktif' | 'Alumni' | 'Nonaktif';
export type StatusPendidikan =
    | 'Belum/Tidak Sekolah'
    | 'Sedang Sekolah'
    | 'Sedang Kuliah'
    | 'Sudah Lulus';
export type GolonganDarah = 'A' | 'B' | 'AB' | 'O';

export class AnakAsuh {
    id: string;
    nama: string;
    jenisKelamin: JenisKelamin;
    tempatLahir: string;
    tanggalLahir: string;
    status: StatusAnak;
    statusPendidikan: StatusPendidikan;
    sekolah?: string;
    kelas?: string;
    semester?: string;
    tahunMasuk?: number;
    tahunLulus?: number;
    golonganDarah: GolonganDarah;
    riwayatPenyakit?: string;
    alergi?: string;
    tanggalMasukPanti: string;
    asalDaerah: string;
    namaWali: string;
    teleponWali: string;
    keterangan?: string;
    foto?: string;
    dokumen?: {
        label: string; namaFile: string;
        wajib: boolean
    }[];
    riwayatKegiatan?: {
        nama: string; tanggal:
            string
    }[];
}