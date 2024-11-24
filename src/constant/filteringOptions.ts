const productFilteringOptions: ProductOption[] = [
  {
    menuName: 'Availability',
    tags: ['availability'],
    submenu: [
      {
        label: 'In stock',
        value: 1,
      },
      {
        label: 'Out of stock',
        value: 0,
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
