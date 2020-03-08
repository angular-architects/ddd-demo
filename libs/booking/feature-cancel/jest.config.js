module.exports = {
  name: 'booking-feature-cancel',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-cancel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
