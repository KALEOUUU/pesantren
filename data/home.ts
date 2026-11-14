export type AcademicProgram = {
  title: string;
  description: string;
  image: string;
  href: string;
};
export type Facility = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export const academicPrograms: AcademicProgram[] = [
  {
    title: "Kurikulum Terpadu",
    description:
      "Sinergi pendidikan syar'i dan ilmu umum untuk mencetak generasi yang taat sekaligus berwawasan global.",
    image: "/assets/home/program-1.png",
    href: "#kurikulum",
  },
  {
    title: "Akhlak & Tahfidz",
    description:
      "Fokus pada pembentukan adab, kebiasaan ibadah harian, dan hafalan Al-Qur'an secara intensif.",
    image: "/assets/home/program-2.png",
    href: "#tahfidz",
  },
  {
    title: "Pendampingan Karakter",
    description:
      "Bimbingan personal dari pembina untuk memastikan tumbuh kembang dan kedisiplinan setiap santri.",
    image: "/assets/home/program-3.png",
    href: "#karakter",
  },
];

export const facilities: Facility[] = [
  {
    title: "Pembiasaan Ibadah",
    description:
      "Shalat berjamaah, pembentukan kedisiplinan, dan bimbingan karakter harian bersama asatidz.",
    image: "/assets/home/facility-3.png",
    date: "19 Juni 2026",
  },
  {
    title: "Kajian Bersama",
    description:
      "Shalat berjamaah, pembentukan kedisiplinan, dan bimbingan karakter harian bersama asatidz.",
    image: "/assets/home/facility-4.png",
    date: "19 Juni 2026",
  },
  {
    title: "Halaqah Tahfidz & Tahsin",
    description:
      "Bimbingan rutin intensif untuk perbaikan bacaan, penambahan hafalan baru, dan muraja'ah Al-Qur'an harian.",
    image: "/assets/home/facility-5.png",
    date: "19 Juni 2026",
  },
];
