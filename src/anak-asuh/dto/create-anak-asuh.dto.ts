import { Type } from 'class-transformer';
import {
    IsArray,
    IsDateString,
    IsIn,
    IsInt,
    IsOptional,
    IsString,
    Matches,
    Max,
    Min,
    MinLength,
} from 'class-validator';
import type {
    GolonganDarah,
    JenisKelamin,
    StatusAnak,
    StatusPendidikan,
} from '../entities/anak-asuh.entity.js';

export class CreateAnakAsuhDto {
    @IsString()
    @MinLength(3)
    nama: string;

    @IsIn(['Laki-laki', 'Perempuan'])
    jenisKelamin: JenisKelamin;

    @IsString()
    @MinLength(3)
    tempatLahir: string;

    @IsDateString()
    tanggalLahir: string;

    @IsIn(['Aktif', 'Alumni', 'Nonaktif'])
    status: StatusAnak;

    @IsIn([
        'Belum/Tidak Sekolah',
        'Sedang Sekolah',
        'Sedang Kuliah',
        'Sudah Lulus',
    ])
    statusPendidikan: StatusPendidikan;

    @IsOptional()
    @IsString()
    sekolah?: string;

    @IsOptional()
    @IsString()
    kelas?: string;

    @IsOptional()
    @IsString()
    semester?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1980)
    @Max(2100)
    tahunMasuk?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1980)
    @Max(2100)
    tahunLulus?: number;

    @IsIn(['A', 'B', 'AB', 'O'])
    golonganDarah: GolonganDarah;

    @IsOptional()
    @IsString()
    riwayatPenyakit?: string;

    @IsOptional()
    @IsString()
    alergi?: string;

    @IsDateString()
    tanggalMasukPanti: string;

    @IsString()
    @MinLength(3)
    asalDaerah: string;

    @IsString()
    @MinLength(3)
    namaWali: string;

    @Matches(/^[0-9+\-\s]{8,20}$/)
    teleponWali: string;

    @IsOptional()
    @IsString()
    keterangan?: string;

    @IsOptional()
    @IsString()
    foto?: string;

    @IsOptional()
    @IsArray()
    dokumen?: {
        label: string; namaFile: string;
        wajib: boolean
    }[];

    @IsOptional()
    @IsArray()
    riwayatKegiatan?: {
        nama: string; tanggal:
            string
    }[];
}