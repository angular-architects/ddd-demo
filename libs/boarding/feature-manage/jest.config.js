module.exports = {
  name: 'boarding-feature-manage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/boarding/feature-manage',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
