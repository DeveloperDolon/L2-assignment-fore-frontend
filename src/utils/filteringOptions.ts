const productFilteringOptions: ProductOption[] = [
  {
    menuName: 'Availability',
    tags: ['availability'],
    submenu: [
      {
        label: 'In stock',
        value: true,
      },
      {
        label: 'Out of stock',
        value: false,
      },
    ],
  },
  {
    menuName: 'Category',
    tags: ['category'],
    submenu: [
      {
        label: 'Bars',
        value: 'bars',
      },
      {
        label: 'Benches',
        value: 'benches',
      },
      {
        label: 'Dumbell',
        value: 'dumbell',
      },
    ],
  },
];

export default productFilteringOptions;
