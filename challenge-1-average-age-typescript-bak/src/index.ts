namespace averageAge {
  interface familyMember {
    name: string;
    birthYear: number;
    gender: number;
  }

  const familyMembers: familyMember[] = [
    {
      name: "engin",
      birthYear: 1992,
      gender: 0
    },
    {
      name: "eda",
      birthYear: 1996,
      gender: 1
    },
    {
      name: "hakan",
      birthYear: 1994,
      gender: 0
    },
    {
      name: "merve",
      birthYear: 1999,
      gender: 1
    },
    {
      name: "namık",
      birthYear: 1990,
      gender: 0
    }
  ];

  const currentYear: number = new Date().getFullYear();

  // Beklenenler
  // 1.TypeScript namespace nedir ne işe yarar?
  // 1. En genç aile üyesi -- adını ve yaşını yazdıralım
  // 2. En yaşlı aile üyesini yazdıralım
  // 3. Ailenin yaş ortalamasını yazdıralım
}
