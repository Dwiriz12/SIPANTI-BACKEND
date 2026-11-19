import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { CreateAnakAsuhDto } from './dto/create-anak-asuh.dto.js';
import { UpdateAnakAsuhDto } from './dto/update-anak-asuh.dto.js';
import { AnakAsuh } from './entities/anak-asuh.entity.js';

@Injectable()
export class AnakAsuhService {
  private anakAsuh: AnakAsuh[] = [
    {
      id: 'AA-2026-001',
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
      keterangan: 'Anak yang rajin dan sopan.',
    },
  ];

  findAll(): AnakAsuh[] {
    return this.anakAsuh;
  }

  findOne(id: string): AnakAsuh {
    const anak = this.anakAsuh.find((item) =>
      item.id === id);

    if (!anak) {
      throw new NotFoundException(
        `Anak asuh dengan id ${id} tidak ditemukan`,
      );
    }

    return anak;
  }

  create(dto: CreateAnakAsuhDto): AnakAsuh {
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
      ...dto,
      id: this.buatId(),
    };

    this.anakAsuh.push(anakBaru);
    return anakBaru;
  }

  update(id: string, dto: UpdateAnakAsuhDto):
    AnakAsuh {
    const anak = this.findOne(id);
    Object.assign(anak, dto);
    return anak;
  }

  remove(id: string): AnakAsuh {
    const anak = this.findOne(id);
    this.anakAsuh = this.anakAsuh.filter((item) =>
      item.id !== id);
    return anak;
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