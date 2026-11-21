import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { CreateAnakAsuhDto } from './dto/create-anak-asuh.dto.js';
import { UpdateAnakAsuhDto } from './dto/update-anak-asuh.dto.js';
import { AnakAsuh } from './entities/anak-asuh.entity.js';

@Injectable()
export class AnakAsuhService {
  private anakAsuh: AnakAsuh[] = [
    {
      id: 'AA-2024-001',
      nama: 'Ahmad Fauzi',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2014-06-03',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 1',
      kelas: '7',
      tahunMasuk: 2024,
      golonganDarah: 'O',
      tanggalMasukPanti: '2024-01-15',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Budi Santoso',
      teleponWali: '0812-3456-7890',
      keterangan: 'Anak yang rajin, sopan, dan aktif dalam kegiatan.',
    },
    {
      id: 'AA-2024-002',
      nama: 'Aisyah Humaira',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Sumedang',
      tanggalLahir: '2013-02-20',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Islam Al-Falah',
      kelas: '8',
      tahunMasuk: 2024,
      golonganDarah: 'A',
      riwayatPenyakit: 'Asma ringan',
      alergi: 'Debu',
      tanggalMasukPanti: '2024-02-20',
      asalDaerah: 'Sumedang',
      namaWali: 'Ibu Rina Marlina',
      teleponWali: '0813-2211-4455',
      keterangan: 'Suka membaca dan membantu pengurus menyiapkan kegiatan.',
    },
    {
      id: 'AA-2024-003',
      nama: 'Rizky Maulana',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Garut',
      tanggalLahir: '2015-03-10',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SD Islam Terpadu',
      kelas: '5',
      tahunMasuk: 2024,
      golonganDarah: 'B',
      tanggalMasukPanti: '2024-03-10',
      asalDaerah: 'Garut',
      namaWali: 'Bapak Dedi Kurniawan',
      teleponWali: '0857-8899-1122',
      keterangan: 'Aktif dalam kegiatan olahraga dan senam bersama.',
    },
    {
      id: 'AA-2024-004',
      nama: 'Nabila Putri',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Cimahi',
      tanggalLahir: '2014-04-05',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 3',
      kelas: '7',
      tahunMasuk: 2024,
      golonganDarah: 'AB',
      alergi: 'Seafood',
      tanggalMasukPanti: '2024-04-05',
      asalDaerah: 'Cimahi',
      namaWali: 'Ibu Siti Nurjanah',
      teleponWali: '0821-3344-5566',
      keterangan: 'Disiplin dan sering menjadi ketua kelompok belajar.',
    },
    {
      id: 'AA-2024-005',
      nama: 'Muhammad Ali',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2016-01-12',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SD Islam Terpadu',
      kelas: '4',
      tahunMasuk: 2024,
      golonganDarah: 'O',
      tanggalMasukPanti: '2024-05-12',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Hendra Gunawan',
      teleponWali: '0812-7788-9900',
      keterangan: 'Ceria dan mudah bergaul dengan teman-temannya.',
    },
    {
      id: 'AA-2024-006',
      nama: 'Fatimah Zahra',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Tasikmalaya',
      tanggalLahir: '2015-07-18',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SD Islam Al-Falah',
      kelas: '5',
      tahunMasuk: 2024,
      golonganDarah: 'A',
      tanggalMasukPanti: '2024-05-18',
      asalDaerah: 'Tasikmalaya',
      namaWali: 'Ibu Lilis Suryani',
      teleponWali: '0856-2233-4411',
      keterangan: 'Rajin mengikuti kajian dan hafalan surat pendek.',
    },
    {
      id: 'AA-2024-007',
      nama: 'Abdullah Hasan',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2013-09-22',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 3',
      kelas: '8',
      tahunMasuk: 2024,
      golonganDarah: 'B',
      tanggalMasukPanti: '2024-05-22',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Ahmad Subarjo',
      teleponWali: '0813-5566-7788',
      keterangan: 'Suka membantu pengurus di bagian kebersihan panti.',
    },
    {
      id: 'AA-2023-008',
      nama: 'Siti Nurhaliza',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Bogor',
      tanggalLahir: '2012-03-14',
      status: 'Alumni',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMA Negeri 1',
      kelas: '10',
      tahunMasuk: 2023,
      golonganDarah: 'O',
      tanggalMasukPanti: '2023-10-10',
      asalDaerah: 'Bogor',
      namaWali: 'Ibu Nurhayati',
      teleponWali: '0812-1010-2020',
      keterangan: 'Lulus dan melanjutkan pendidikan di SMA Negeri 1.',
    },
    {
      id: 'AA-2024-009',
      nama: 'Zidan Malik',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2016-11-02',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SD Muhammadiyah',
      kelas: '4',
      tahunMasuk: 2024,
      golonganDarah: 'AB',
      tanggalMasukPanti: '2024-03-25',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Iwan Setiawan',
      teleponWali: '0857-6060-7070',
      keterangan: 'Anak pendiam tetapi sangat teliti saat belajar.',
    },
    {
      id: 'AA-2024-010',
      nama: 'Mutiara Ananda',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Subang',
      tanggalLahir: '2014-08-30',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 4',
      kelas: '7',
      tahunMasuk: 2024,
      golonganDarah: 'B',
      alergi: 'Dingin',
      tanggalMasukPanti: '2024-04-30',
      asalDaerah: 'Subang',
      namaWali: 'Ibu Ani Suryani',
      teleponWali: '0813-9191-3131',
      keterangan: 'Senang menari dan tampil pada acara panti.',
    },
    {
      id: 'AA-2023-011',
      nama: 'Hafidz Nur',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2011-05-07',
      status: 'Alumni',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMA Islam Terpadu',
      kelas: '11',
      tahunMasuk: 2023,
      golonganDarah: 'O',
      tanggalMasukPanti: '2023-11-07',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Asep Saepudin',
      teleponWali: '0812-4040-5050',
      keterangan: 'Alumni yang masih aktif membantu kegiatan tahfidz.',
    },
    {
      id: 'AA-2024-012',
      nama: 'Khadijah Azzahra',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Bandung',
      tanggalLahir: '2013-12-18',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Islam Al-Azhar',
      kelas: '8',
      tahunMasuk: 2024,
      golonganDarah: 'A',
      tanggalMasukPanti: '2024-01-18',
      asalDaerah: 'Bandung',
      namaWali: 'Ibu Fitri Handayani',
      teleponWali: '0856-8181-9292',
      keterangan: 'Aktif dalam kegiatan keputrian dan bimbingan belajar.',
    },
    {
      id: 'AA-2025-013',
      nama: 'Andi Prasetyo',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2014-02-11',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 2',
      kelas: '7',
      tahunMasuk: 2025,
      golonganDarah: 'O',
      tanggalMasukPanti: '2025-07-14',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Rudi Prasetyo',
      teleponWali: '0812-2828-3838',
      foto: '/images/anak/andi-prasetyo.png',
      keterangan: 'Gemar bermain sepak bola dan mengikuti kegiatan pramuka.',
    },
    {
      id: 'AA-2025-014',
      nama: 'Dina April',
      jenisKelamin: 'Perempuan',
      tempatLahir: 'Cianjur',
      tanggalLahir: '2015-04-09',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SD Negeri 5',
      kelas: '5',
      tahunMasuk: 2025,
      golonganDarah: 'B',
      tanggalMasukPanti: '2025-08-01',
      asalDaerah: 'Cianjur',
      namaWali: 'Ibu Dewi Aprilia',
      teleponWali: '0857-7373-8484',
      foto: '/images/anak/dina-april.png',
      keterangan: 'Ceria dan senang mengikuti kegiatan kesenian.',
    },
    {
      id: 'AA-2025-015',
      nama: 'Farendra Alfiansyah',
      jenisKelamin: 'Laki-laki',
      tempatLahir: 'Bandung',
      tanggalLahir: '2014-10-27',
      status: 'Aktif',
      statusPendidikan: 'Sedang Sekolah',
      sekolah: 'SMP Negeri 5',
      kelas: '7',
      tahunMasuk: 2025,
      golonganDarah: 'A',
      tanggalMasukPanti: '2025-09-09',
      asalDaerah: 'Bandung',
      namaWali: 'Bapak Alfian Nugraha',
      teleponWali: '0813-6363-7474',
      foto: '/images/anak/farendra-alfiansyah.png',
      keterangan: 'Anak yang santun dan aktif dalam kegiatan keagamaan.',
    },
  ];

  findAll() {
    return this.anakAsuh.map((anak) => this.lengkapi(anak));
  }

  findOne(id: string) {
    return this.lengkapi(this.cariAnak(id));
  }

  create(dto: CreateAnakAsuhDto) {
    const duplikat = this.anakAsuh.some(
      (anak) =>
        anak.nama.toLowerCase() ===
        dto.nama.toLowerCase() &&
        anak.tanggalLahir === dto.tanggalLahir,
    );

    if (duplikat) {
      throw new ConflictException(
        'Anak asuh dengan nama dan tanggal lahir yang sama sudah ada',
      );
    }

    const anakBaru: AnakAsuh = {
      id: this.buatId(),
      ...dto,
    };

    this.anakAsuh.push(anakBaru);
    return this.lengkapi(anakBaru);
  }

  update(id: string, dto: UpdateAnakAsuhDto) {
    const anak = this.cariAnak(id);
    Object.assign(anak, dto);
    return this.lengkapi(anak);
  }

  remove(id: string) {
    const anak = this.cariAnak(id);
    this.anakAsuh = this.anakAsuh.filter((item) => item.id !== id);
    return this.lengkapi(anak);
  }

  private cariAnak(id: string): AnakAsuh {
    const anak = this.anakAsuh.find((item) => item.id === id);

    if (!anak) {
      throw new NotFoundException(
        `Anak asuh dengan id ${id} tidak ditemukan`,
      );
    }

    return anak;
  }

  private hitungUsia(tanggalLahir: string): string {
    const lahir = new Date(tanggalLahir);
    const sekarang = new Date();

    if (Number.isNaN(lahir.getTime())) return '';

    let usia = sekarang.getFullYear() - lahir.getFullYear();
    const selisihBulan = sekarang.getMonth() - lahir.getMonth();

    if (
      selisihBulan < 0 ||
      (selisihBulan === 0 && sekarang.getDate() < lahir.getDate())
    ) {
      usia -= 1;
    }

    return usia > 0 ? `${usia} Tahun` : '';
  }

  private lengkapi(anak: AnakAsuh) {
    return {
      ...anak,
      usia: this.hitungUsia(anak.tanggalLahir),
      dokumen: anak.dokumen ?? [],
      riwayatKegiatan: anak.riwayatKegiatan ?? [],
    };
  }

  private buatId(): string {
    const tahun = new Date().getFullYear();

    const nomorTerbesar =
      this.anakAsuh.reduce((maks, anak) => {
        const nomor =
          Number(anak.id.split('-').pop());
        return nomor > maks ? nomor : maks;
      }, 0);

    return `AA-${tahun}-${String(nomorTerbesar +
      1).padStart(3, '0')}`;
  }
}